var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
const io = require('socket.io')(server);

const ss = require('socket.io-stream');
const async = require('async');

app.set('port', (process.env.PORT || 8080));
app.use(express.static('public'));

// Map to keep track of each SSH connection and the corresponding client socket
const connected_master_clients = new Map();
const connected_minion_clients = new Map();
const fileTransferQueue = async.queue(processFileTransfer, 5); // Maximum of 5 concurrent workers

function processFileTransfer(task, callback) {
  const { stream, data, client_id } = task;
  if (connected_minion_clients.has(data.minionId)) {
    console.log(`saving to ${data.minionId}`);
    var newStream = ss.createStream();
    var client = connected_minion_clients.get(data.minionId);

    ss(client).emit('file', newStream, { name: data.name });
    stream.pipe(newStream);

    stream.on('end', function () {
      console.log('File transfer complete');
      callback(); // Signal the worker has completed processing this task
    });
  } else {
    console.log(`Client ${data.minionId} not connected`);
    callback(); // Signal the worker has completed processing this task
  }
};

io.on('connection', function (socket) {

  // Connection handle
  socket.on("master", function (data) {
    console.log(`Client master ${data.id} connected`);
    socket.client_id = data.id;
    socket.client_key = data.key;
    socket.minions = [];
    connected_master_clients.set(data.id, socket);

    if (connected_minion_clients.size != 0) {
      connected_minion_clients.forEach((minion) => {
        // Check if key matches
        if (minion.client_key === data.key) {
          socket.minions.push({ id: minion.client_id, ip: minion.client_ip });
          console.log(`Minion client ${minion.client_id} added to master client ${data.id}`);
          sendConnectedClients(data.id);
        }
      });
    }
  });

  socket.on("minion", function (data) {
    console.log(`Client minion ${data.id} connected`);
    socket.client_id = data.id;
    socket.client_key = data.key;
    socket.client_ip = socket.request.connection.remoteAddress;
    connected_minion_clients.set(data.id, socket);

    if (connected_master_clients.size != 0) {
      connected_master_clients.forEach((master) => {
        // Check if key matches
        if (master.client_key === data.key) {
          master.minions.push({ id: data.id, ip: socket.client_ip });
          console.log(`Minion client ${data.id} added to master client ${master.client_id}`);
          sendConnectedClients(master.client_id);
        }
      });
    }
  });

  // send file from browser client to nodejs client
  ss(socket).on('file', function (stream, data) {
    fileTransferQueue.push({ stream, data, client_id: socket.client_id });
  });

  // send file from nodejs client to browser client
  socket.on("getMinionFile", (data) => {
    if (connected_minion_clients.has(data.minionId)) {
      var minion = connected_minion_clients.get(data.minionId);
      minion.emit("getMinionFile", {
        masterId: data.masterId,
        path: data.path
      })
    } else {
      console.log(`Minion client ${data.minionId} not connected`);
    }
  });

  // FTP handle
  ss(socket).on('getFile', function (stream, data) {
    if (connected_master_clients.has(data.masterId)) {
      var master = connected_master_clients.get(data.masterId);
      var newStream = ss.createStream();
      ss(master).emit('getFile', newStream, {
        name: data.name,
        size: data.size
      });
      stream.pipe(newStream);
    } else {
      console.log(`Master client ${data.masterId} not connected`);
    }
  });

  // SSH handle
  socket.on('auth', (data) => {
    if (connected_minion_clients.has(data.clientId)) {
      connected_minion_clients.get(data.clientId).emit("openssh", {
        masterId: data.masterId,
        termId: data.termId,
        username: data.username,
        password: data.password
      });
    }
  });

  socket.on("terminal-input", (data) => {
    if (connected_minion_clients.has(data.clientId)) {
      connected_minion_clients.get(data.clientId).emit(data.termId, {
        masterId: data.masterId,
        termId: data.termId,
        data: data.data
      });
    }
  });

  socket.on("terminal-output", (data) => {
    if (connected_master_clients.has(data.masterId)) {
      connected_master_clients.get(data.masterId).emit("terminal-output", {
        data: data.data,
        masterId: data.masterId,
        termId: data.termId,
      });
    }
  });

  socket.on("disconnect", function () {
    let client_id = deleteClientFromMap(connected_master_clients, socket.id);
    if (!client_id) {
      client_id = deleteClientFromMap(connected_minion_clients, socket.id);
      if (connected_master_clients.size != 0) {
        connected_master_clients.forEach((master) => {
          master.minions.forEach((minion, i) => {
            if (minion.id === client_id) {
              master.minions.splice(i, 1);
              sendConnectedClients(master.client_id);
            }
          });
        });
      }
    }
    console.log(`Client ${client_id} disconnected`);
  });
});

const sendConnectedClients = (masterId) => {
  console.log(masterId);
  if (connected_master_clients.has(masterId)) {
    var master = connected_master_clients.get(masterId);
    master.emit("clients", {
      clients: master.minions
    })
  } else {
    console.log(`Client master ${masterId} not connected`);
  }
};

function deleteClientFromMap(map, socketId) {
  for (let [key, value] of map) {
    if (socketId === value.id) {
      map.delete(key);
      return value.client_id;
    }
  }
};

server.listen(app.get('port'), function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Running on port: ' + app.get('port'));
  }
});