window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar_top");
    if (window.scrollY > 50) {
        navbar.classList.add("fixed-top");
        document.body.style.paddingTop = `${navbar.offsetHeight}px`;
    } else {
        navbar.classList.remove("fixed-top");
        document.body.style.paddingTop = "0";
    }
});

var v;
let path;

// -------------------------------file system go ahead onclick - start----------------------------------------------------
function createFileSystemBody(Filename) {
    if (v != 0) {
        path = document.getElementById("path").innerHTML;
    }

    //create Terminal-FTP-Display-body Empty
    var RebootBodyBtn2 = document.getElementById("Terminal-FTP-Display-body");
    RebootBodyBtn2.innerHTML = "";

    //create path
    let p = document.createElement("p");
    p.setAttribute("id", "path");

    //go back buttn create
    let btn = document.createElement("button");
    btn.classList.add("btn", "btn-default", "mb-2");
    btn.setAttribute("id", "backBtn");

    let i = document.createElement("i");
    i.classList.add("fa", "fa-arrow-left");

    RebootBodyBtn2.appendChild(p);
    RebootBodyBtn2.appendChild(btn);
    btn.appendChild(i);

    if (path == "") {
        //hit when open FTP modal
        p.innerHTML = "Home";
    } else {
        //after openaning FTP modal
        p.innerHTML = path + "/" + Filename;
    }

    //Go back button onclick
    btn.onclick = function () {
        console.log(v);
        createFileSystemBodyGoback(document.getElementById("path").innerHTML);
    };

    let fileSystem = [
        { name: "new folder", type: "folder" },
        { name: "code.py", type: "file" },
        { name: "index.html", type: "file" },
        { name: "new folder (2)", type: "folder" },
        { name: "new", type: "folder" },
    ];

    if (v == 1) {
        fileSystem = [
            { name: "new folder", type: "folder" },
            { name: "code.py", type: "file" },
        ];
    } else if (v == 2) {
        fileSystem = [
            { name: "new folder", type: "folder" },
            { name: "code.py", type: "file" },
            { name: "code.py", type: "file" },
            { name: "index.html", type: "file" },
            { name: "new folder (2)", type: "folder" },
            { name: "new", type: "folder" },
            { name: "code.py", type: "file" },
            { name: "index.html", type: "file" },
            { name: "new folder (2)", type: "folder" },
            { name: "new", type: "folder" },
        ];
    }

    let container = document.createElement("div");
    container.innerHTML = "";
    container.classList.add("file-manager-container", "file-manager-col-view");

    // create files
    fileSystem.forEach(function (item) {
        let fileItem = document.createElement("div");
        fileItem.classList.add("file-item");

        //----check file type----
        if (item.type == "folder") {
            //folder onclick
            fileItem.onclick = function () {
                // console.log(item.name);
                v++;
                //call this function again
                createFileSystemBody(item.name);
            };
        } else {
            //file onclick
            fileItem.onclick = function () {
                //set path for download input-field
                var downloadInputVal = document.getElementById("downloadInputVal");
                //get current path + clicked file name
                var value = document.getElementById("path").innerHTML + "/" + item.name;
                downloadInputVal.value = value;
            };
        }

        //set icon to folder and file
        let fileItemIcon = document.createElement("div");
        fileItemIcon.classList.add("file-item-icon", "far", item.type === "folder" ? "fa-folder" : "fa-file", "text-secondary");

        let fileItemName = document.createElement("a");
        fileItemName.classList.add("file-item-name");
        fileItemName.innerText = item.name;

        fileItem.appendChild(fileItemIcon);
        fileItem.appendChild(fileItemName);
        container.appendChild(fileItem);
    });

    RebootBodyBtn2.appendChild(container);

    //set clicked path for download input-field
    var downloadInputVal = document.getElementById("downloadInputVal");
    downloadInputVal.value = document.getElementById("path").innerHTML;
}
// -------------------------------file system go ahead onclick - End----------------------------------------------------

// -------------------------------file system go back onclick - start----------------------------------------------------
function createFileSystemBodyGoback(CurrentPath) {
    //create Terminal-FTP-Display-body Empty
    var RebootBodyBtn2 = document.getElementById("Terminal-FTP-Display-body");
    RebootBodyBtn2.innerHTML = "";

    //create path
    let p = document.createElement("p");
    p.setAttribute("id", "path");

    //go back buttn create
    let btn = document.createElement("button");
    btn.classList.add("btn", "btn-default", "mb-2");
    btn.setAttribute("id", "backBtn");

    //saperate path from /
    var words = CurrentPath.split("/");

    //check path --> not in home
    if (words.length > 1) {
        v--;
        // Remove the last word and the preceding slash
        words.pop();
        words[words.length - 1] = words[words.length - 1].trim();

        // Join the remaining words back into a string using forward slash as the delimiter
        CurrentPath = words.join("/");
        console.log(CurrentPath);
    }

    let i = document.createElement("i");
    i.classList.add("fa", "fa-arrow-left");

    RebootBodyBtn2.appendChild(p);
    RebootBodyBtn2.appendChild(btn);
    btn.appendChild(i);

    //set current path
    p.innerHTML = CurrentPath;

    //go-back button click
    btn.onclick = function () {
        console.log(v);
        createFileSystemBodyGoback(CurrentPath);
    };

    let fileSystem = [
        { name: "new folder", type: "folder" },
        { name: "code.py", type: "file" },
        { name: "index.html", type: "file" },
        { name: "new folder (2)", type: "folder" },
        { name: "new", type: "folder" },
    ];

    if (v == 1) {
        fileSystem = [
            { name: "new folder", type: "folder" },
            { name: "code.py", type: "file" },
        ];
    } else if (v == 2) {
        fileSystem = [
            { name: "new folder", type: "folder" },
            { name: "code.py", type: "file" },
            { name: "code.py", type: "file" },
            { name: "index.html", type: "file" },
            { name: "new folder (2)", type: "folder" },
            { name: "new", type: "folder" },
            { name: "code.py", type: "file" },
            { name: "index.html", type: "file" },
            { name: "new folder (2)", type: "folder" },
            { name: "new", type: "folder" },
        ];
    }

    let container = document.createElement("div");
    container.innerHTML = "";
    container.classList.add("file-manager-container", "file-manager-col-view");

    //create files
    fileSystem.forEach(function (item) {
        let fileItem = document.createElement("div");
        fileItem.classList.add("file-item");

        //----check file type----
        if (item.type == "folder") {
            //folder onclick
            fileItem.onclick = function () {
                v++;
                //call go ahead function
                createFileSystemBody(item.name);
            };
        } else {
            //file onclick
            fileItem.onclick = function () {
                //set path for download input-field
                var downloadInputVal = document.getElementById("downloadInputVal");
                //get current path + clicked file name
                var value = document.getElementById("path").innerHTML + "/" + item.name;
                downloadInputVal.value = value;
            };
        }

        //set icon to folder and file
        let fileItemIcon = document.createElement("div");
        fileItemIcon.classList.add("file-item-icon", "far", item.type === "folder" ? "fa-folder" : "fa-file", "text-secondary");

        let fileItemName = document.createElement("a");
        fileItemName.classList.add("file-item-name");
        fileItemName.innerText = item.name;

        fileItem.appendChild(fileItemIcon);
        fileItem.appendChild(fileItemName);
        container.appendChild(fileItem);
    });

    RebootBodyBtn2.appendChild(container);

    //set clicked path for download input-field
    var downloadInputVal = document.getElementById("downloadInputVal");
    downloadInputVal.value = document.getElementById("path").innerHTML;
}
// -------------------------------file system go back onclick - End----------------------------------------------------

// -----------------------------list view create - page loading Start--------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const socket = io();
    console.log(socket);
    const listView = document.getElementById("list");
    listView.innerHTML = "";

    // -------------------------- shoud be from APIs -------------------------- //
    let clientList = new Map(); //create a set of all clients
    clientList.set("ID001", [{ name: "Device 01", username: "ubuntu", password: "vega" }]);
    clientList.set("ID002", [{ name: "Device 02", username: "admin", password: "id001" }]);
    clientList.set("ID003", [{ name: "Device 03", username: "username", password: "password" }]);
    const key = "A123B";

    Array.from(clientList.keys()).forEach((client) => {
        let deviceName = clientList.get(client)[0].name;
        listView.innerHTML += `
        <ul class="list-group mb-1 changeToPointer" id="${client}">
            <li class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col nameclass">${deviceName}</div>
                    <div class="col idclass">${client}</div>
                    <div id="idip" class="col ipclass">0.0.0.0</div>
                    <div class="col">
                        <span id="idsts" class="badge bg-danger statusclass"> offline </span>
                    </div>
                    <div class="col-1 my-auto">
                        <i class="fa px-3" type="button" data-toggle="dropdown" aria-expanded="false">&#xf142;</i>
                        <div class="dropdown-menu" style="min-width: 200px" data-id="${client}">
                            <a class="dropdown-item font-weight-bold font-italic btn-edit" >Edit&nbsp;
                                <i class="far float-right" style="color: green;">&#xf044;</i>
                            </a>
                            <a class="dropdown-item font-weight-bold font-italic btn-del">Delete&nbsp;
                                <i class="far float-right" style="color: red;">&#xf2ed;</i>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        `;
    });

    function dec2hex(dec) {
        return dec.toString(16).padStart(2, "0")
    };

    function generateId(len) {
        var arr = new Uint8Array((len || 40) / 2)
        window.crypto.getRandomValues(arr)
        return Array.from(arr, dec2hex).join('')
    };

    let masterId = generateId(20);
    // document.getElementById("MId").innerHTML = masterId;

    socket.emit('master', {
        id: masterId,
        key: key
    });

    const btn_edit = document.querySelectorAll(".btn-edit");
    btn_edit.forEach((button) => {
        button.addEventListener("click", (event) => {
            let clientId = event.target.parentElement.getAttribute("data-id");

            event.target.parentElement.setAttribute("data-backdrop", "static");
            event.target.parentElement.setAttribute("data-keyboard", "false");

            document.getElementById("edit-device").innerHTML = clientId;

            document.getElementById("edit-device-name").value = clientId;

            //display modal
            event.target.parentElement.setAttribute("data-toggle", "modal");
            event.target.parentElement.setAttribute("data-target", "#editbtn");
        });
    });

    const btn_del = document.querySelectorAll(".btn-del");
    btn_del.forEach((button) => {
        button.addEventListener("click", (event) => {
            let clientId = event.target.parentElement.getAttribute("data-id");
            console.log(clientId);

            event.target.parentElement.setAttribute("data-backdrop", "static");
            event.target.parentElement.setAttribute("data-keyboard", "false");

            document.getElementById("delete-device").innerHTML = clientId;

            //display modal
            event.target.parentElement.setAttribute("data-toggle", "modal");
            event.target.parentElement.setAttribute("data-target", "#deletebtn");
        });
    });

    socket.on("clients", function (data) {
        console.log(data);

        let clients = data.clients;
        Array.from(clientList.keys()).forEach(client => {
            // check if client is in dataList
            const data = clients.find(data => data.id === client);
            if (data) {
                let status = 'Online';
                let ip = data.ip;
                document.getElementById(client).querySelector("#idsts").innerHTML = `${status}`;
                document.getElementById(client).querySelector("#idip").innerHTML = `${ip}`;
                document.getElementById(client).querySelector("#idsts").classList.remove("bg-danger");
                document.getElementById(client).querySelector("#idsts").classList.add("bg-success");

                document.getElementById(client).onclick = function () {

                    document.getElementById("modalIp").innerText = ip;
                    //remove start text
                    var text = document.getElementById("start-text");
                    text.style.display = "none";

                    //hide card
                    var card = document.getElementById("card-for-option");
                    card.style.display = "none";

                    //card title
                    var cardtitle = document.getElementById("card-title");
                    cardtitle.innerHTML = client;

                    //============================footer buttons====================================
                    let footer = document.getElementById("card-footer");
                    footer.innerHTML = "";

                    let btn1 = document.createElement("button");
                    btn1.type = "button";
                    btn1.classList.add("btn", "btn-primary", "btn-block");
                    btn1.innerHTML = '<i class="fa fa-window-maximize"></i>&nbsp;Open Terminal';

                    //====================terminal button==================================

                    btn1.onclick = function () {
                        btn1.setAttribute("data-backdrop", "static");
                        btn1.setAttribute("data-keyboard", "false");

                        var RebootTitleBtn1 = document.getElementById("Terminal-FTP-Display-title");
                        RebootTitleBtn1.innerHTML = "";
                        RebootTitleBtn1.innerHTML = "Terminal " + client;

                        var RebootBodyBtn1 = document.getElementById("Terminal-FTP-Display-body");
                        RebootBodyBtn1.innerHTML = "";
                        // RebootBodyBtn1.style.height = "75vh";

                        //////////////////////////////////////////////////////////////////////////////////////////////////////
                        const modal = document.getElementById("Terminal-FTP-Display");
                        const termId = generateId(20);
                        console.log("connect", termId);

                        // Create the terminal objects
                        const term = new Terminal({
                            cursorBlink: true,
                            rows: 33
                        });

                        // Open the terminal and start the SSH connection when the modal is shown
                        modal.style.display = "block";
                        term.open(RebootBodyBtn1);

                        // Resize the terminal to fit the modal
                        const fitAddon = new FitAddon.FitAddon(term);
                        term.loadAddon(fitAddon);
                        fitAddon.fit();

                        term.write('\r');

                        socket.emit("auth", {
                            masterId: masterId,
                            clientId: client,
                            termId: termId,
                            username: clientList.get(client)[0].username,
                            password: clientList.get(client)[0].password
                        });
    
                        // default method
                        term.onData((data) => {
                            socket.emit('terminal-input', {
                                masterId: masterId,
                                clientId: client,
                                termId: termId,
                                data: data
                            });
                        });
    
                        socket.on('terminal-output', function (data) {
                            if(data.termId == termId && data.masterId == masterId){
                                if(data.data == "Close"){
                                    term.clear();
                                    term.write("Session Closed!");
                                } else{
                                    term.write(data.data);
                                }
                            }
                        });

                        $("#btnClose").click(function() {
                            console.log("close");
                            // Close the modal
                            term.dispose();
                            modal.style.display = "none";
                        });

                        //////////////////////////////////////////////////////////////////////////////////////////////////////

                        var TerminalFTPDisplayfooter = document.getElementById("Terminal-FTP-Display-footer");
                        TerminalFTPDisplayfooter.innerHTML = "";

                        btn1.setAttribute("data-toggle", "modal");
                        btn1.setAttribute("data-target", "#Terminal-FTP-Display");
                    };

                    let btn2 = document.createElement("button");
                    btn2.type = "button";
                    btn2.classList.add("btn", "btn-info", "btn-block");
                    btn2.innerHTML = '<i class="fa fa-folder"></i>&nbsp;Open FTP';

                    //==============================FTP button=======================

                    btn2.onclick = function () {
                        v = 0;
                        path = "";

                        btn2.setAttribute("data-backdrop", "static");
                        btn2.setAttribute("data-keyboard", "false");

                        var RebootTitleBtn2 = document.getElementById("Terminal-FTP-Display-title");
                        RebootTitleBtn2.innerHTML = "";
                        RebootTitleBtn2.innerHTML = "FTP " + client;

                        var RebootBodyBtn2 = document.getElementById("Terminal-FTP-Display-body");
                        //============================================================================================================================================
                        //============================================================================================================================================
                        RebootBodyBtn2.innerHTML = "";
                        RebootBodyBtn2.style.height = "70vh";

                        var TerminalFTPDisplayfooter = document.getElementById("Terminal-FTP-Display-footer");
                        TerminalFTPDisplayfooter.innerHTML = "";

                        //create progress bar
                        // Create the necessary elements
                        const progressDiv = document.createElement("div");
                        const progressBarDiv = document.createElement("div");

                        // Set the attributes for the progress and progress bar divs
                        progressDiv.setAttribute("class", "progress");
                        progressDiv.setAttribute("style", "width: 100%;");
                        progressBarDiv.setAttribute("class", "progress-bar bg-success");
                        progressBarDiv.setAttribute("style", "width: 90%;");
                        progressBarDiv.textContent = "90%";

                        // Add the progress bar div to the progress div
                        progressDiv.appendChild(progressBarDiv);

                        //upload button create ---------------
                        // Create the necessary elements
                        const inputGroup = document.createElement("div");
                        const inputField = document.createElement("input");
                        const inputGroupAppend = document.createElement("div");
                        const downloadButton = document.createElement("button");

                        // Set the attributes for the input field and download button
                        inputField.setAttribute("type", "text");
                        inputField.setAttribute("class", "form-control");
                        inputField.setAttribute("id", "downloadInputVal");
                        downloadButton.classList.add("btn", "btn-success", "ml-2");
                        downloadButton.setAttribute("type", "button");
                        downloadButton.textContent = "Download";

                        // Add the download button to the input group append div
                        inputGroupAppend.appendChild(downloadButton);

                        // Add the input field and input group append div to the input group
                        inputGroup.appendChild(inputField);
                        inputGroup.appendChild(inputGroupAppend);
                        inputGroup.setAttribute("class", "input-group");

                        // create div with class input-group
                        const inputGroupDiv = document.createElement("div");
                        inputGroupDiv.classList.add("input-group");

                        // create div with class custom-file
                        const customFileDiv = document.createElement("div");
                        customFileDiv.classList.add("custom-file");

                        // create input with type file and class custom-file-input
                        const fileInput = document.createElement("input");
                        fileInput.setAttribute("type", "file");
                        fileInput.classList.add("custom-file-input");
                        fileInput.setAttribute("id", "inputGroupFile");

                        // create label with class custom-file-label
                        const fileInputLabel = document.createElement("label");
                        fileInputLabel.classList.add("custom-file-label");
                        fileInputLabel.textContent = "Choose file";

                        // append input to div with class custom-file
                        customFileDiv.appendChild(fileInput);

                        // append label to div with class custom-file
                        customFileDiv.appendChild(fileInputLabel);

                        // create button with type button and classes btn and btn-primary
                        const sendButton = document.createElement("button");
                        sendButton.setAttribute("type", "button");
                        sendButton.classList.add("btn", "btn-primary", "ml-2");
                        sendButton.textContent = "Send File";
                        sendButton.setAttribute("id", "inputGroupFileBtn");

                        // append div with class custom-file to div with class input-group
                        inputGroupDiv.appendChild(customFileDiv);

                        // append button to div with class input-group
                        inputGroupDiv.appendChild(sendButton);

                        TerminalFTPDisplayfooter.appendChild(progressDiv);
                        TerminalFTPDisplayfooter.appendChild(inputGroup);
                        TerminalFTPDisplayfooter.appendChild(inputGroupDiv);

                        //top bar end

                        //body

                        // ==

                        createFileSystemBody("/");

                        // ==

                        btn2.setAttribute("data-toggle", "modal");
                        btn2.setAttribute("data-target", "#Terminal-FTP-Display");
                    };

                    let btn3 = document.createElement("button");
                    btn3.type = "button";
                    btn3.classList.add("btn", "btn-success", "btn-block");
                    btn3.innerHTML = '<i class="fa fa-desktop"></i>&nbsp;View Display';

                    //========================================Display button=================================
                    btn3.onclick = function () {
                        btn3.setAttribute("data-backdrop", "static");
                        btn3.setAttribute("data-keyboard", "false");

                        var RebootTitleBtn3 = document.getElementById("Terminal-FTP-Display-title");
                        RebootTitleBtn3.innerHTML = "";
                        RebootTitleBtn3.innerHTML = "Display " + client;

                        var RebootBodyBtn3 = document.getElementById("Terminal-FTP-Display-body");
                        RebootBodyBtn3.innerHTML = "";
                        RebootBodyBtn3.style.height = "75vh";

                        var TerminalFTPDisplayfooter = document.getElementById("Terminal-FTP-Display-footer");
                        TerminalFTPDisplayfooter.innerHTML = "";

                        btn3.setAttribute("data-toggle", "modal");
                        btn3.setAttribute("data-target", "#Terminal-FTP-Display");
                    };

                    let btn4 = document.createElement("button");
                    btn4.type = "button";
                    btn4.classList.add("btn", "btn-secondary", "btn-block");
                    btn4.innerHTML = '<i class="fa fa-undo"></i>&nbsp;Reboot';

                    //========================================reboot button=================================
                    btn4.onclick = function () {
                        btn4.setAttribute("data-backdrop", "static");
                        btn4.setAttribute("data-keyboard", "false");

                        var RebootTitleBtn4 = document.getElementById("shoutdown-reboot-title");
                        RebootTitleBtn4.innerHTML = "";
                        RebootTitleBtn4.innerHTML = "Reboot " + client;

                        var RebootBodyBtn4 = document.getElementById("shoutdown-reboot-body");
                        RebootBodyBtn4.innerHTML = "";
                        RebootBodyBtn4.innerHTML = "Are you sure You want to Reboot this Device?";

                        const cancelButton = document.createElement("button");
                        cancelButton.type = "button";
                        cancelButton.className = "btn btn-secondary";
                        cancelButton.setAttribute("data-dismiss", "modal");
                        cancelButton.innerText = "Cancel";

                        const yesButton = document.createElement("button");
                        yesButton.type = "button";
                        yesButton.className = "btn btn-danger";
                        yesButton.innerText = "Reboot";

                        yesButton.onclick = function () {
                            console.log("reboot " + i);
                        };

                        const modalFooter = document.getElementById("shoutdown-reboot-footer");
                        modalFooter.innerHTML = "";
                        modalFooter.appendChild(cancelButton);
                        modalFooter.appendChild(yesButton);

                        btn4.setAttribute("data-toggle", "modal");
                        btn4.setAttribute("data-target", "#shoutdown-reboot-modal");
                    };

                    let btn5 = document.createElement("button");
                    btn5.type = "button";
                    btn5.classList.add("btn", "btn-danger", "btn-block");
                    btn5.innerHTML = '<i class="fa fa-power-off"></i>&nbsp;Shutdown';

                    //========================================shoutdown button=================================
                    btn5.onclick = function () {
                        btn5.setAttribute("data-backdrop", "static");
                        btn5.setAttribute("data-keyboard", "false");

                        var shoutdownTitle = document.getElementById("shoutdown-reboot-title");
                        shoutdownTitle.innerHTML = "";
                        shoutdownTitle.innerHTML = "Shoutdown " + client;

                        var shoutdownBody = document.getElementById("shoutdown-reboot-body");
                        shoutdownBody.innerHTML = "";
                        shoutdownBody.innerHTML = "Are you sure You want to Shoutdown this Device?";

                        const cancelButton = document.createElement("button");
                        cancelButton.type = "button";
                        cancelButton.className = "btn btn-secondary";
                        cancelButton.setAttribute("data-dismiss", "modal");
                        cancelButton.innerText = "Cancel";

                        const yesButton = document.createElement("button");
                        yesButton.type = "button";
                        yesButton.className = "btn btn-danger";
                        yesButton.innerText = "Shoutdown";

                        yesButton.onclick = function () {
                            console.log("shoutdown " + i);
                        };

                        const modalFooter = document.getElementById("shoutdown-reboot-footer");
                        modalFooter.innerHTML = "";
                        modalFooter.appendChild(cancelButton);
                        modalFooter.appendChild(yesButton);

                        btn5.setAttribute("data-toggle", "modal");
                        btn5.setAttribute("data-target", "#shoutdown-reboot-modal");
                    };

                    footer.appendChild(btn1);
                    footer.appendChild(btn2);
                    footer.appendChild(btn3);
                    footer.appendChild(btn4);
                    footer.appendChild(btn5);

                    //visiable card
                    card.style.display = "block";
                };
            }
            else {
                let status = 'Offline';
                let ip = "0.0.0.0";
                document.getElementById(client).querySelector("#idsts").innerHTML = `${status}`;
                document.getElementById(client).querySelector("#idip").innerHTML = `${ip}`;
                document.getElementById(client).querySelector("#idsts").classList.add("bg-danger");
                document.getElementById(client).querySelector("#idsts").classList.remove("bg-success");

                document.getElementById(client).onclick = function () {
                    //hide card
                    var card = document.getElementById("card-for-option");
                    card.style.display = "none";

                    //show start text
                    var text = document.getElementById("start-text");
                    text.style.display = "flex";
                    var text1 = document.getElementById("text-1");
                    text1.innerHTML = "Offline Device";
                    var text2 = document.getElementById("text-2");
                    text2.innerHTML = "Selected device is offline";
                };
            };

            document.getElementById(client).querySelector("#idedit")
        });
    });

    //   for (let i = 0; i < 15; i++) {
    //       const ul = document.createElement("ul");
    //       ul.classList.add("list-group", "mb-1", "changeToPointer");

    //       const li = document.createElement("li");
    //       li.classList.add("list-group-item", "list-group-item-action");
    //       const row = document.createElement("div");
    //       row.classList.add("row");

    //       const col1 = document.createElement("div");
    //       col1.classList.add("col", "nameclass");
    //       col1.innerText = "Device name for " + i;

    //       const col2 = document.createElement("div");
    //       col2.classList.add("col", "idclass");
    //       col2.innerText = "id for " + i;

    //       const col3 = document.createElement("div");
    //       col3.classList.add("col", "ipclass");
    //       col3.innerText = "ipaddress for " + i;

    //       const col4 = document.createElement("div");
    //       col4.classList.add("col");

    //       var span = document.createElement("span");

    //       if (i % 2 == 0) {
    //           span.classList.add("badge", "bg-danger", "statusclass", "px-2", "py-1");
    //           span.innerText = " offline ";

    //           ul.onclick = function () {
    //               //remove selected row colour
    //               var lis = document.querySelectorAll("li");
    //               lis.forEach(function (element) {
    //                   element.classList.remove("bg-info");
    //               });

    //               //colour selected row
    //               li.classList.add("bg-info");

    //               //hide card
    //               var card = document.getElementById("card-for-option");
    //               card.style.display = "none";

    //               var text1 = document.getElementById("text-1");
    //               text1.innerHTML = "Offline Device";

    //               var text2 = document.getElementById("text-2");
    //               text2.innerHTML = "you selected device is offline";

    //               //show start text
    //               var text = document.getElementById("start-text");
    //               text.style.display = "flex";
    //           };
    //       } else {
    //           span.classList.add("badge", "bg-success", "statusclass", "px-2", "py-1");
    //           span.innerText = " online ";

    //           //ul click
    //           ul.onclick = function () {
    //               //remove start text
    //               var text = document.getElementById("start-text");
    //               text.style.display = "none";

    //               //remove selected row colour
    //               var lis = document.querySelectorAll("li");
    //               lis.forEach(function (element) {
    //                   element.classList.remove("bg-info");
    //               });

    //               //colour selected row
    //               li.classList.add("bg-info");

    //               //hide card
    //               var card = document.getElementById("card-for-option");
    //               card.style.display = "none";

    //               //card title
    //               var cardtitle = document.getElementById("card-title");
    //               cardtitle.innerHTML = "device id " + i;

    //               //============================footer buttons====================================
    //               let footer = document.getElementById("card-footer");
    //               footer.innerHTML = "";

    //               let btn1 = document.createElement("button");
    //               btn1.type = "button";
    //               btn1.classList.add("btn", "btn-primary", "btn-block");
    //               btn1.innerHTML = '<i class="fa fa-window-maximize"></i>&nbsp;Open Terminal';

    //               //====================terminal button==================================

    //               btn1.onclick = function () {
    //                   btn1.setAttribute("data-backdrop", "static");
    //                   btn1.setAttribute("data-keyboard", "false");

    //                   var RebootTitleBtn1 = document.getElementById("Terminal-FTP-Display-title");
    //                   RebootTitleBtn1.innerHTML = "";
    //                   RebootTitleBtn1.innerHTML = "Terminal " + i;

    //                   var RebootBodyBtn1 = document.getElementById("Terminal-FTP-Display-body");
    //                   RebootBodyBtn1.innerHTML = "";
    //                   RebootBodyBtn1.style.height = "75vh";

    //                   var TerminalFTPDisplayfooter = document.getElementById("Terminal-FTP-Display-footer");
    //                   TerminalFTPDisplayfooter.innerHTML = "";

    //                   btn1.setAttribute("data-toggle", "modal");
    //                   btn1.setAttribute("data-target", "#Terminal-FTP-Display");
    //               };

    //               let btn2 = document.createElement("button");
    //               btn2.type = "button";
    //               btn2.classList.add("btn", "btn-info", "btn-block");
    //               btn2.innerHTML = '<i class="fa fa-folder"></i>&nbsp;Open FTP';

    //               //==============================FTP button=======================

    //               btn2.onclick = function () {
    //                   v = 0;
    //                   path = "";

    //                   btn2.setAttribute("data-backdrop", "static");
    //                   btn2.setAttribute("data-keyboard", "false");

    //                   var RebootTitleBtn2 = document.getElementById("Terminal-FTP-Display-title");
    //                   RebootTitleBtn2.innerHTML = "";
    //                   RebootTitleBtn2.innerHTML = "FTP " + i;

    //                   var RebootBodyBtn2 = document.getElementById("Terminal-FTP-Display-body");
    //                   //============================================================================================================================================
    //                   //============================================================================================================================================
    //                   RebootBodyBtn2.innerHTML = "";
    //                   RebootBodyBtn2.style.height = "70vh";

    //                   var TerminalFTPDisplayfooter = document.getElementById("Terminal-FTP-Display-footer");
    //                   TerminalFTPDisplayfooter.innerHTML = "";

    //                   //create progress bar
    //                   // Create the necessary elements
    //                   const progressDiv = document.createElement("div");
    //                   const progressBarDiv = document.createElement("div");

    //                   // Set the attributes for the progress and progress bar divs
    //                   progressDiv.setAttribute("class", "progress");
    //                   progressDiv.setAttribute("style", "width: 100%;");
    //                   progressBarDiv.setAttribute("class", "progress-bar bg-success");
    //                   progressBarDiv.setAttribute("style", "width: 90%;");
    //                   progressBarDiv.textContent = "90%";

    //                   // Add the progress bar div to the progress div
    //                   progressDiv.appendChild(progressBarDiv);

    //                   //upload button create ---------------
    //                   // Create the necessary elements
    //                   const inputGroup = document.createElement("div");
    //                   const inputField = document.createElement("input");
    //                   const inputGroupAppend = document.createElement("div");
    //                   const downloadButton = document.createElement("button");

    //                   // Set the attributes for the input field and download button
    //                   inputField.setAttribute("type", "text");
    //                   inputField.setAttribute("class", "form-control");
    //                   inputField.setAttribute("id", "downloadInputVal");
    //                   downloadButton.classList.add("btn", "btn-success", "ml-2");
    //                   downloadButton.setAttribute("type", "button");
    //                   downloadButton.textContent = "Download";

    //                   // Add the download button to the input group append div
    //                   inputGroupAppend.appendChild(downloadButton);

    //                   // Add the input field and input group append div to the input group
    //                   inputGroup.appendChild(inputField);
    //                   inputGroup.appendChild(inputGroupAppend);
    //                   inputGroup.setAttribute("class", "input-group");

    //                   // create div with class input-group
    //                   const inputGroupDiv = document.createElement("div");
    //                   inputGroupDiv.classList.add("input-group");

    //                   // create div with class custom-file
    //                   const customFileDiv = document.createElement("div");
    //                   customFileDiv.classList.add("custom-file");

    //                   // create input with type file and class custom-file-input
    //                   const fileInput = document.createElement("input");
    //                   fileInput.setAttribute("type", "file");
    //                   fileInput.classList.add("custom-file-input");
    //                   fileInput.setAttribute("id", "inputGroupFile");

    //                   // create label with class custom-file-label
    //                   const fileInputLabel = document.createElement("label");
    //                   fileInputLabel.classList.add("custom-file-label");
    //                   fileInputLabel.textContent = "Choose file";

    //                   // append input to div with class custom-file
    //                   customFileDiv.appendChild(fileInput);

    //                   // append label to div with class custom-file
    //                   customFileDiv.appendChild(fileInputLabel);

    //                   // create button with type button and classes btn and btn-primary
    //                   const sendButton = document.createElement("button");
    //                   sendButton.setAttribute("type", "button");
    //                   sendButton.classList.add("btn", "btn-primary", "ml-2");
    //                   sendButton.textContent = "Send File";
    //                   sendButton.setAttribute("id", "inputGroupFileBtn");

    //                   // append div with class custom-file to div with class input-group
    //                   inputGroupDiv.appendChild(customFileDiv);

    //                   // append button to div with class input-group
    //                   inputGroupDiv.appendChild(sendButton);

    //                   TerminalFTPDisplayfooter.appendChild(progressDiv);
    //                   TerminalFTPDisplayfooter.appendChild(inputGroup);
    //                   TerminalFTPDisplayfooter.appendChild(inputGroupDiv);

    //                   //top bar end

    //                   //body

    //                   // ==

    //                   createFileSystemBody("/");

    //                   // ==

    //                   btn2.setAttribute("data-toggle", "modal");
    //                   btn2.setAttribute("data-target", "#Terminal-FTP-Display");
    //               };

    //               let btn3 = document.createElement("button");
    //               btn3.type = "button";
    //               btn3.classList.add("btn", "btn-success", "btn-block");
    //               btn3.innerHTML = '<i class="fa fa-desktop"></i>&nbsp;View Display';

    //               //========================================Display button=================================
    //               btn3.onclick = function () {
    //                   btn3.setAttribute("data-backdrop", "static");
    //                   btn3.setAttribute("data-keyboard", "false");

    //                   var RebootTitleBtn3 = document.getElementById("Terminal-FTP-Display-title");
    //                   RebootTitleBtn3.innerHTML = "";
    //                   RebootTitleBtn3.innerHTML = "Display " + i;

    //                   var RebootBodyBtn3 = document.getElementById("Terminal-FTP-Display-body");
    //                   RebootBodyBtn3.innerHTML = "";
    //                   RebootBodyBtn3.style.height = "75vh";

    //                   var TerminalFTPDisplayfooter = document.getElementById("Terminal-FTP-Display-footer");
    //                   TerminalFTPDisplayfooter.innerHTML = "";

    //                   btn3.setAttribute("data-toggle", "modal");
    //                   btn3.setAttribute("data-target", "#Terminal-FTP-Display");
    //               };

    //               let btn4 = document.createElement("button");
    //               btn4.type = "button";
    //               btn4.classList.add("btn", "btn-secondary", "btn-block");
    //               btn4.innerHTML = '<i class="fa fa-undo"></i>&nbsp;Reboot';

    //               //========================================reboot button=================================
    //               btn4.onclick = function () {
    //                   btn4.setAttribute("data-backdrop", "static");
    //                   btn4.setAttribute("data-keyboard", "false");

    //                   var RebootTitleBtn4 = document.getElementById("shoutdown-reboot-title");
    //                   RebootTitleBtn4.innerHTML = "";
    //                   RebootTitleBtn4.innerHTML = "Reboot " + i;

    //                   var RebootBodyBtn4 = document.getElementById("shoutdown-reboot-body");
    //                   RebootBodyBtn4.innerHTML = "";
    //                   RebootBodyBtn4.innerHTML = "Are you sure You want to Reboot this Device?";

    //                   const cancelButton = document.createElement("button");
    //                   cancelButton.type = "button";
    //                   cancelButton.className = "btn btn-secondary";
    //                   cancelButton.setAttribute("data-dismiss", "modal");
    //                   cancelButton.innerText = "Cancel";

    //                   const yesButton = document.createElement("button");
    //                   yesButton.type = "button";
    //                   yesButton.className = "btn btn-danger";
    //                   yesButton.innerText = "Reboot";

    //                   yesButton.onclick = function () {
    //                       console.log("reboot " + i);
    //                   };

    //                   const modalFooter = document.getElementById("shoutdown-reboot-footer");
    //                   modalFooter.innerHTML = "";
    //                   modalFooter.appendChild(cancelButton);
    //                   modalFooter.appendChild(yesButton);

    //                   btn4.setAttribute("data-toggle", "modal");
    //                   btn4.setAttribute("data-target", "#shoutdown-reboot-modal");
    //               };

    //               let btn5 = document.createElement("button");
    //               btn5.type = "button";
    //               btn5.classList.add("btn", "btn-danger", "btn-block");
    //               btn5.innerHTML = '<i class="fa fa-power-off"></i>&nbsp;Shutdown';

    //               //========================================shoutdown button=================================
    //               btn5.onclick = function () {
    //                   btn5.setAttribute("data-backdrop", "static");
    //                   btn5.setAttribute("data-keyboard", "false");

    //                   var shoutdownTitle = document.getElementById("shoutdown-reboot-title");
    //                   shoutdownTitle.innerHTML = "";
    //                   shoutdownTitle.innerHTML = "Shoutdown " + i;

    //                   var shoutdownBody = document.getElementById("shoutdown-reboot-body");
    //                   shoutdownBody.innerHTML = "";
    //                   shoutdownBody.innerHTML = "Are you sure You want to Shoutdown this Device?";

    //                   const cancelButton = document.createElement("button");
    //                   cancelButton.type = "button";
    //                   cancelButton.className = "btn btn-secondary";
    //                   cancelButton.setAttribute("data-dismiss", "modal");
    //                   cancelButton.innerText = "Cancel";

    //                   const yesButton = document.createElement("button");
    //                   yesButton.type = "button";
    //                   yesButton.className = "btn btn-danger";
    //                   yesButton.innerText = "Shoutdown";

    //                   yesButton.onclick = function () {
    //                       console.log("shoutdown " + i);
    //                   };

    //                   const modalFooter = document.getElementById("shoutdown-reboot-footer");
    //                   modalFooter.innerHTML = "";
    //                   modalFooter.appendChild(cancelButton);
    //                   modalFooter.appendChild(yesButton);

    //                   btn5.setAttribute("data-toggle", "modal");
    //                   btn5.setAttribute("data-target", "#shoutdown-reboot-modal");
    //               };

    //               footer.appendChild(btn1);
    //               footer.appendChild(btn2);
    //               footer.appendChild(btn3);
    //               footer.appendChild(btn4);
    //               footer.appendChild(btn5);

    //               //visiable card
    //               card.style.display = "block";
    //           };
    //       }

    //       const col5 = document.createElement("div");
    //       col5.classList.add("col-1", "my-auto");

    //       const more = document.createElement("i");
    //       more.classList.add("fa", "px-3");
    //       more.setAttribute("type", "button");
    //       more.setAttribute("data-toggle", "dropdown");
    //       more.setAttribute("aria-expanded", "false");
    //       more.innerHTML = "&#xf142;";

    //       const dropDownMenu = document.createElement("div");
    //       dropDownMenu.classList.add("dropdown-menu");
    //       dropDownMenu.setAttribute("style", "min-width: 200px");

    //       const aTag1 = document.createElement("a");
    //       aTag1.classList.add("dropdown-item", "font-weight-bold", "font-italic");
    //       aTag1.innerHTML = "Edit&nbsp;";

    //       //editbtn
    //       aTag1.onclick = function () {
    //           console.log("edit" + i);

    //           aTag1.setAttribute("data-backdrop", "static");
    //           aTag1.setAttribute("data-keyboard", "false");

    //           document.getElementById("edit-device").innerHTML = "device id " + i;

    //           document.getElementById("edit-device-name").value = i;

    //           //display modal
    //           aTag1.setAttribute("data-toggle", "modal");
    //           aTag1.setAttribute("data-target", "#editbtn");
    //       };

    //       const aTag2 = document.createElement("a");
    //       aTag2.classList.add("dropdown-item", "font-weight-bold", "font-italic");
    //       aTag2.innerHTML = "Delete&nbsp;";

    //       // deletebtn
    //       aTag2.onclick = function () {
    //           console.log("delete" + i);

    //           aTag2.setAttribute("data-backdrop", "static");
    //           aTag2.setAttribute("data-keyboard", "false");

    //           document.getElementById("delete-device").innerHTML = "device id " + i;

    //           //display modal
    //           aTag2.setAttribute("data-toggle", "modal");
    //           aTag2.setAttribute("data-target", "#deletebtn");
    //       };

    //       const itag1 = document.createElement("i");
    //       itag1.classList.add("far", "float-right");
    //       itag1.style.color = "green";
    //       itag1.innerHTML = "&#xf044;";

    //       const itag2 = document.createElement("i");
    //       itag2.classList.add("far", "float-right");
    //       itag2.style.color = "red";
    //       itag2.innerHTML = "&#xf2ed;";

    //       row.appendChild(col1);
    //       row.appendChild(col2);
    //       row.appendChild(col3);
    //       row.appendChild(col4);
    //       col4.appendChild(span);
    //       row.appendChild(col5);
    //       col5.appendChild(more);
    //       col5.appendChild(dropDownMenu);
    //       dropDownMenu.appendChild(aTag1);
    //       aTag1.appendChild(itag1);
    //       dropDownMenu.appendChild(aTag2);
    //       aTag2.appendChild(itag2);
    //       li.appendChild(row);
    //       ul.appendChild(li);
    //       listView.appendChild(ul);
    //   }
});
// -----------------------------list view create - page loading End---------------------------------------------------

//--------------------------------validations-add new device start----------------------------------------------------
document.getElementById("devicename").addEventListener("input", function () {
    var deviceName = this.value;
    document.getElementById("devicenameerror").innerHTML = deviceName ? "" : "Please enter a device name";
});

document.getElementById("deviceid").addEventListener("input", function () {
    var deviceId = this.value;
    document.getElementById("deviceiderror").innerHTML = deviceId ? "" : "Please enter a device id";
});

document.getElementById("devicekey").addEventListener("input", function () {
    var deviceKey = this.value;
    document.getElementById("devicekeyerror").innerHTML = deviceKey ? "" : "Please enter a key";
});

document.getElementById("addbutton").addEventListener("click", function () {
    var deviceName = document.getElementById("devicename").value;
    var deviceId = document.getElementById("deviceid").value;
    var deviceKey = document.getElementById("devicekey").value;
    var deviceType = document.getElementById("device-type").value;

    var error = false;
    if (deviceName == "") {
        document.getElementById("devicenameerror").innerHTML = "Please enter a device name";
        error = true;
    }
    if (deviceId == "") {
        document.getElementById("deviceiderror").innerHTML = "Please enter a device id";
        error = true;
    }
    if (deviceKey == "") {
        document.getElementById("devicekeyerror").innerHTML = "Please enter a key";
        error = true;
    }
    if (!error) {
        //submit form
    }
});
//-------------------------------------------validations-add new device end------------------------------------------------

//-------------------------------------------card remove button - strat-----------------------------------------------------
document.getElementById("clsbtn").addEventListener("click", function () {
    document.querySelectorAll("li").forEach(function (element) {
        element.classList.remove("bg-info");
    });
    document.getElementById("card-for-option").style.display = "none";
    document.getElementById("start-text").style.display = "flex";
    document.getElementById("text-1").innerHTML = "Select your Device";
    document.getElementById("text-2").innerHTML = "Device options will appear here.";
});
//--------------------------------------------card remove button - end------------------------------------------------------

//----------------------------------------------secrch from search box - strat----------------------------------------------
document.getElementById("search").addEventListener("keyup", function () {
    var searchvalue = document.getElementById("search").value.toLowerCase();
    var conceptName = document.querySelector("#selectDD option:checked").value;
    var ddvalue = conceptName === "2" ? "online" : conceptName === "3" ? "offline" : "";

    var statusClasses = document.querySelectorAll("#list .statusclass:not([style*='display: none'])");
    statusClasses.forEach(function (statusClass) {
        var ul = statusClass.closest("ul");
        ul.style.display = statusClass.textContent.toLowerCase().indexOf(ddvalue) > -1 ? "" : "none";
    });

    var visibleUls = document.querySelectorAll("#list ul:not([style*='display: none'])");
    visibleUls.forEach(function (ul) {
        ul.style.display = ul.textContent.toLowerCase().indexOf(searchvalue) > -1 ? "" : "none";
    });
});
//----------------------------------------------secrch from search box - end-----------------------------------------------

//-----------------------------------------------search from dropdown - start-----------------------------------------------
document.getElementById("selectDD").addEventListener("change", function () {
    var searchvalue = document.getElementById("search").value.toLowerCase();
    var conceptName = document.querySelector("#selectDD option:checked").value;
    var list = document.getElementById("list");

    var uls = list.querySelectorAll("ul");
    uls.forEach(function (ul) {
        ul.style.display = ul.textContent.toLowerCase().indexOf(searchvalue) > -1 ? "" : "none";
    });

    if (conceptName !== "1") {
        var ddvalue = conceptName === "2" ? "online" : conceptName === "3" ? "offline" : "";
        var statusClasses = list.querySelectorAll(".statusclass:not([style*='display: none'])");
        statusClasses.forEach(function (statusClass) {
            var ul = statusClass.closest("ul");
            ul.style.display = statusClass.textContent.toLowerCase().indexOf(ddvalue) > -1 ? "" : "none";
        });
    }
});
//------------------------------------------------search from dropdown - end--------------------------------------------------
