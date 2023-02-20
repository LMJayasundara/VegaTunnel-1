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

//===============================================================================================
var v;
let path;

function createFileSystemBody(Filename) {
  if (v != 0) {
    path = document.getElementById("path").innerHTML;
  }

  var RebootBodyBtn2 = document.getElementById("Terminal-FTP-Display-body");
  RebootBodyBtn2.innerHTML = "";

  let p = document.createElement("p");
  p.setAttribute("id", "path");

  let btn = document.createElement("button");
  btn.classList.add("btn", "btn-default", "mb-2");
  btn.setAttribute("id", "backBtn");

  let i = document.createElement("i");
  i.classList.add("fa", "fa-arrow-left");

  RebootBodyBtn2.appendChild(p);
  RebootBodyBtn2.appendChild(btn);
  btn.appendChild(i);

  if (path == "") {
    p.innerHTML = "Home";
  } else {
    p.innerHTML = path + "/" + Filename;
  }

  console.log(document.getElementById("path").innerHTML);

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

  // ==

  fileSystem.forEach(function (item) {
    let fileItem = document.createElement("div");
    fileItem.classList.add("file-item");

    if (item.type == "folder") {
      fileItem.onclick = function () {
        console.log(item.name);

        v++;

        createFileSystemBody(item.name);
      };
    }else{

        fileItem.onclick = function () {
            var downloadInputVal = document.getElementById("downloadInputVal");
            var value = document.getElementById("path").innerHTML + "/" + item.name;
            downloadInputVal.value = value;
          };
    }

    let fileItemIcon = document.createElement("div");
    fileItemIcon.classList.add(
      "file-item-icon",
      "far",
      item.type === "folder" ? "fa-folder" : "fa-file",
      "text-secondary"
    );

    let fileItemName = document.createElement("a");
    fileItemName.classList.add("file-item-name");
    fileItemName.innerText = item.name;

    fileItem.appendChild(fileItemIcon);
    fileItem.appendChild(fileItemName);
    container.appendChild(fileItem);
  });

  // ==

  RebootBodyBtn2.appendChild(container);
  console.log(v);


  var downloadInputVal = document.getElementById("downloadInputVal");
  downloadInputVal.value = document.getElementById("path").innerHTML;


}

//========================go back==========================================================================================

function createFileSystemBodyGoback(CurrentPath) {
  console.log(CurrentPath);

  var RebootBodyBtn2 = document.getElementById("Terminal-FTP-Display-body");
  RebootBodyBtn2.innerHTML = "";

  let p = document.createElement("p");
  p.setAttribute("id", "path");

  let btn = document.createElement("button");
  btn.classList.add("btn", "btn-default", "mb-2");
  btn.setAttribute("id", "backBtn");

  var words = CurrentPath.split("/");

  if (words.length > 1) {
    console.log(v + "====");
    v--;
    console.log(v + "====");
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

  p.innerHTML = CurrentPath;

  console.log(CurrentPath);

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

  // ==

  fileSystem.forEach(function (item) {
    let fileItem = document.createElement("div");
    fileItem.classList.add("file-item");

    if (item.type == "folder") {
      fileItem.onclick = function () {
        console.log(item.name);

        v++;

        createFileSystemBody(item.name);
      };
    }else{

        fileItem.onclick = function () {
            var downloadInputVal = document.getElementById("downloadInputVal");
            var value = document.getElementById("path").innerHTML + "/" + item.name;
            downloadInputVal.value = value;
          };
    }

    let fileItemIcon = document.createElement("div");
    fileItemIcon.classList.add(
      "file-item-icon",
      "far",
      item.type === "folder" ? "fa-folder" : "fa-file",
      "text-secondary"
    );

    let fileItemName = document.createElement("a");
    fileItemName.classList.add("file-item-name");
    fileItemName.innerText = item.name;

    fileItem.appendChild(fileItemIcon);
    fileItem.appendChild(fileItemName);
    container.appendChild(fileItem);
  });

  // ==

  RebootBodyBtn2.appendChild(container);
  console.log(v);

  var downloadInputVal = document.getElementById("downloadInputVal");
  downloadInputVal.value = document.getElementById("path").innerHTML;
}

//===============================================================================================

//list view create
document.addEventListener("DOMContentLoaded", function () {
  const listView = document.getElementById("list");
  listView.innerHTML = "";

  for (let i = 0; i < 15; i++) {
    const ul = document.createElement("ul");
    ul.classList.add("list-group", "mb-1", "changeToPointer");

    const li = document.createElement("li");
    li.classList.add("list-group-item", "list-group-item-action");
    const row = document.createElement("div");
    row.classList.add("row");

    const col1 = document.createElement("div");
    col1.classList.add("col", "nameclass");
    col1.innerText = "Device name for " + i;

    const col2 = document.createElement("div");
    col2.classList.add("col", "idclass");
    col2.innerText = "id for " + i;

    const col3 = document.createElement("div");
    col3.classList.add("col", "ipclass");
    col3.innerText = "ipaddress for " + i;

    const col4 = document.createElement("div");
    col4.classList.add("col");

    var span = document.createElement("span");

    if (i % 2 == 0) {
      span.classList.add("badge", "bg-danger", "statusclass", "px-2", "py-1");
      span.innerText = " offline ";

      ul.onclick = function () {
        //remove selected row colour
        var lis = document.querySelectorAll("li");
        lis.forEach(function (element) {
          element.classList.remove("bg-info");
        });

        //colour selected row
        li.classList.add("bg-info");

        //hide card
        var card = document.getElementById("card-for-option");
        card.style.display = "none";

        var text1 = document.getElementById("text-1");
        text1.innerHTML = "Offline Device";

        var text2 = document.getElementById("text-2");
        text2.innerHTML = "you selected device is offline";

        //show start text
        var text = document.getElementById("start-text");
        text.style.display = "flex";
      };
    } else {
      span.classList.add("badge", "bg-success", "statusclass", "px-2", "py-1");
      span.innerText = " online ";

      //ul click
      ul.onclick = function () {
        //remove start text
        var text = document.getElementById("start-text");
        text.style.display = "none";

        //remove selected row colour
        var lis = document.querySelectorAll("li");
        lis.forEach(function (element) {
          element.classList.remove("bg-info");
        });

        //colour selected row
        li.classList.add("bg-info");

        //hide card
        var card = document.getElementById("card-for-option");
        card.style.display = "none";

        //card title
        var cardtitle = document.getElementById("card-title");
        cardtitle.innerHTML = "device id " + i;

        //============================footer buttons====================================
        let footer = document.getElementById("card-footer");
        footer.innerHTML = "";

        let btn1 = document.createElement("button");
        btn1.type = "button";
        btn1.classList.add("btn", "btn-primary", "btn-block");
        btn1.innerHTML =
          '<i class="fa fa-window-maximize"></i>&nbsp;Open Terminal';

        //====================terminal button==================================

        btn1.onclick = function () {
          btn1.setAttribute("data-backdrop", "static");
          btn1.setAttribute("data-keyboard", "false");

          var RebootTitleBtn1 = document.getElementById(
            "Terminal-FTP-Display-title"
          );
          RebootTitleBtn1.innerHTML = "";
          RebootTitleBtn1.innerHTML = "Terminal " + i;

          var RebootBodyBtn1 = document.getElementById(
            "Terminal-FTP-Display-body"
          );
          RebootBodyBtn1.innerHTML = "";
          RebootBodyBtn1.style.height = "75vh";

          var TerminalFTPDisplayfooter = document.getElementById(
            "Terminal-FTP-Display-footer"
          );
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

          var RebootTitleBtn2 = document.getElementById(
            "Terminal-FTP-Display-title"
          );
          RebootTitleBtn2.innerHTML = "";
          RebootTitleBtn2.innerHTML = "FTP " + i;

          var RebootBodyBtn2 = document.getElementById(
            "Terminal-FTP-Display-body"
          );
          //============================================================================================================================================
          //============================================================================================================================================
          RebootBodyBtn2.innerHTML = "";
          RebootBodyBtn2.style.height = "70vh";

          var TerminalFTPDisplayfooter = document.getElementById(
            "Terminal-FTP-Display-footer"
          );
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
          inputField.setAttribute("id", "downloadInputVal")
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

          var RebootTitleBtn3 = document.getElementById(
            "Terminal-FTP-Display-title"
          );
          RebootTitleBtn3.innerHTML = "";
          RebootTitleBtn3.innerHTML = "Display " + i;

          var RebootBodyBtn3 = document.getElementById(
            "Terminal-FTP-Display-body"
          );
          RebootBodyBtn3.innerHTML = "";
          RebootBodyBtn3.style.height = "75vh";

          var TerminalFTPDisplayfooter = document.getElementById(
            "Terminal-FTP-Display-footer"
          );
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

          var RebootTitleBtn4 = document.getElementById(
            "shoutdown-reboot-title"
          );
          RebootTitleBtn4.innerHTML = "";
          RebootTitleBtn4.innerHTML = "Reboot " + i;

          var RebootBodyBtn4 = document.getElementById("shoutdown-reboot-body");
          RebootBodyBtn4.innerHTML = "";
          RebootBodyBtn4.innerHTML =
            "Are you sure You want to Reboot this Device?";

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

          const modalFooter = document.getElementById(
            "shoutdown-reboot-footer"
          );
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

          var shoutdownTitle = document.getElementById(
            "shoutdown-reboot-title"
          );
          shoutdownTitle.innerHTML = "";
          shoutdownTitle.innerHTML = "Shoutdown " + i;

          var shoutdownBody = document.getElementById("shoutdown-reboot-body");
          shoutdownBody.innerHTML = "";
          shoutdownBody.innerHTML =
            "Are you sure You want to Shoutdown this Device?";

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

          const modalFooter = document.getElementById(
            "shoutdown-reboot-footer"
          );
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

    const col5 = document.createElement("div");
    col5.classList.add("col-1", "my-auto");

    const more = document.createElement("i");
    more.classList.add("fa", "px-3");
    more.setAttribute("type", "button");
    more.setAttribute("data-toggle", "dropdown");
    more.setAttribute("aria-expanded", "false");
    more.innerHTML = "&#xf142;";

    const dropDownMenu = document.createElement("div");
    dropDownMenu.classList.add("dropdown-menu");
    dropDownMenu.setAttribute("style", "min-width: 200px");

    const aTag1 = document.createElement("a");
    aTag1.classList.add("dropdown-item", "font-weight-bold", "font-italic");
    aTag1.innerHTML = "Edit&nbsp;";

    aTag1.onclick = function () {
      console.log("edit" + i);
      //editbtn
      //edit-device-name

      aTag1.setAttribute("data-backdrop", "static");
      aTag1.setAttribute("data-keyboard", "false");

      var deleteCardTitle = document.getElementById("edit-device");
      deleteCardTitle.innerHTML = "device id " + i;

      var input = document.getElementById("edit-device-name");
      input.value = i;

      //display modal
      aTag1.setAttribute("data-toggle", "modal");
      aTag1.setAttribute("data-target", "#editbtn");
    };

    const aTag2 = document.createElement("a");
    aTag2.classList.add("dropdown-item", "font-weight-bold", "font-italic");
    aTag2.innerHTML = "Delete&nbsp;";

    aTag2.onclick = function () {
      console.log("delete" + i);
      // deletebtn

      aTag2.setAttribute("data-backdrop", "static");
      aTag2.setAttribute("data-keyboard", "false");

      var deleteCardTitle = document.getElementById("delete-device");
      deleteCardTitle.innerHTML = "device id " + i;

      //display modal
      aTag2.setAttribute("data-toggle", "modal");
      aTag2.setAttribute("data-target", "#deletebtn");
    };

    const itag1 = document.createElement("i");
    itag1.classList.add("far", "float-right");
    itag1.style.color = "green";
    itag1.innerHTML = "&#xf044;";

    const itag2 = document.createElement("i");
    itag2.classList.add("far", "float-right");
    itag2.style.color = "red";
    itag2.innerHTML = "&#xf2ed;";

    //edit option
    // <div class="dropright">
    //   <i type="button"  data-toggle="dropdown" aria-expanded="false" style="font-size:24px" class="fa">&#xf142;</i>
    //   <div class="dropdown-menu">
    //     <a class="dropdown-item" href="#"><i style='color:green' class='far'>&#xf044;</i>&nbsp;Edit</a>
    //     <a class="dropdown-item" href="#"><i style='color:red' class='fas'>&#xf2ed;</i>&nbsp;Delete</a>
    //   </div>
    // </div>

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    col4.appendChild(span);
    row.appendChild(col5);
    col5.appendChild(more);
    col5.appendChild(dropDownMenu);
    dropDownMenu.appendChild(aTag1);
    aTag1.appendChild(itag1);
    dropDownMenu.appendChild(aTag2);
    aTag2.appendChild(itag2);
    li.appendChild(row);
    ul.appendChild(li);
    listView.appendChild(ul);
  }
});

// validations start

document.getElementById("devicename").addEventListener("input", function () {
  var deviceName = this.value;
  document.getElementById("devicenameerror").innerHTML = deviceName
    ? ""
    : "Please enter a device name";
});

document.getElementById("deviceid").addEventListener("input", function () {
  var deviceId = this.value;
  document.getElementById("deviceiderror").innerHTML = deviceId
    ? ""
    : "Please enter a device id";
});

document.getElementById("devicekey").addEventListener("input", function () {
  var deviceKey = this.value;
  document.getElementById("devicekeyerror").innerHTML = deviceKey
    ? ""
    : "Please enter a key";
});

document.getElementById("addbutton").addEventListener("click", function () {
  var deviceName = document.getElementById("devicename").value;
  var deviceId = document.getElementById("deviceid").value;
  var deviceKey = document.getElementById("devicekey").value;
  var deviceType = document.getElementById("device-type").value;

  var error = false;
  if (deviceName == "") {
    document.getElementById("devicenameerror").innerHTML =
      "Please enter a device name";
    error = true;
  }
  if (deviceId == "") {
    document.getElementById("deviceiderror").innerHTML =
      "Please enter a device id";
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

// validation end

//card remove button - strat
document.getElementById("clsbtn").addEventListener("click", function () {
  document.querySelectorAll("li").forEach(function (element) {
    element.classList.remove("bg-info");
  });
  document.getElementById("card-for-option").style.display = "none";
  document.getElementById("start-text").style.display = "flex";
  document.getElementById("text-1").innerHTML = "Select your Device";
  document.getElementById("text-2").innerHTML =
    "Device options will appear here.";
});
//card remove button - end

//secrch from search box - strat
$("#search").on("keyup", function () {
  var searchvalue = $("#search").val().toLowerCase();
  var conceptName = $("#selectDD").find(":selected").val();
  var ddvalue = conceptName == 2 ? "online" : conceptName == 3 ? "offline" : "";

  $("#list .statusclass").filter(function () {
    $(this)
      .closest("ul")
      .toggle($(this).text().toLowerCase().indexOf(ddvalue) > -1);
  });

  if (searchvalue !== "") {
    $("#list ul:visible").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(searchvalue) > -1);
    });
  }
});
//secrch from search box - end

//search from dropdown - start
$("#selectDD").change(function () {
  var searchvalue = $("#search").val().toLowerCase();
  var conceptName = $("#selectDD").find(":selected").val();

  $("#list ul").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(searchvalue) > -1);
  });

  if (conceptName !== 1) {
    var ddvalue =
      conceptName == 2 ? "online" : conceptName == 3 ? "offline" : "";
    $("#list .statusclass:visible").filter(function () {
      $(this)
        .closest("ul")
        .toggle($(this).text().toLowerCase().indexOf(ddvalue) > -1);
    });
  }
});
//search from dropdown - end
