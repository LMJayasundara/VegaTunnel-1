const io = require('socket.io-client');
const username = "ID001"
const socket = io('http://localhost:8080');
var ssh2 = require("ssh2");
const ss = require('socket.io-stream');
var fs = require('fs');
var path = require('path');

socket.on('connect', () => {
    console.log('connected to server');

    // Connection handle
    socket.emit('minion', {
        id: username,
        key: "A123B"
    });

    // FTP handle
    ss(socket).on('file', (stream, data) => {
        const filepath = `./ID001/${data.name}`;
        stream.pipe(fs.createWriteStream(filepath));
        stream.on('end', () => console.log(`file saved to ${filepath}`));
    });

    socket.on("getMinionFile", (data) => {
        console.log(data);
        var stream = ss.createStream();
        var size = 0;

        try {
            var totalBytes = fs.statSync(data.path).size;
            var blobStream = fs.createReadStream(data.path);

            blobStream.on('data', function (chunk) {
                size += chunk.length;
                console.log(`Uploading ${Math.floor(size / totalBytes * 100)} %`);
            });

            blobStream.on('end', function () {
                console.log('Done send');
            });

            ss(socket).emit('getFile', stream, {
                masterId: data.masterId,
                name: path.basename(blobStream.path),
                size: totalBytes
            });

            blobStream.pipe(stream);
        } catch (error) {
            console.log(error.message);
        }
    });

    // SSH handle
    socket.on('openssh', (data) => {
        console.log(`connect ${data.termId}`);
        const sshConnection = new ssh2.Client();
        sshConnection.on('ready', function () {
            sshConnection.shell(function (err, stream) {
                if (err) throw err;
                socket.on(data.termId, function (input) {
                    stream.write(input.data);
                });
                // Send output from the SSH connection stream to the corresponding client socket
                stream.on('data', function (termdata) {
                    socket.emit('terminal-output', {
                        data: termdata.toString(),
                        termId: data.termId,
                        masterId: data.masterId
                    });
                });
            });
        });
        sshConnection.connect({
            host: "13.233.100.149",
            port: "22",
            username: data.username,
            password: data.password,
            // debug: console.log
        });
        sshConnection.on('error', (err) => {
            socket.emit('terminal-output', {
                data: err.toString(),
                termId: data.termId,
                masterId: data.masterId
            });
        });
        sshConnection.on("close", function () {
            console.log(`close ${data.termId}`);
            socket.emit('terminal-output', {
                data: "Close",
                termId: data.termId,
                masterId: data.masterId
            });
        });
    });
});

socket.on('disconnect', () => {
    console.log('disconnected from server');
});