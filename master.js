            //==========================================javascript============================================
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

            //list view create
            document.addEventListener("DOMContentLoaded", function () {
                const listView = document.getElementById("list");
                listView.innerHTML = "";

                for (let i = 0; i < 15; i++) {
                    const ul = document.createElement("ul");
                    ul.classList.add("list-group", "mb-1");

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

                        ul.onclick = function (){

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
                        }

                    }else{

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
                          btn1.innerHTML = '<i class="fa fa-window-maximize"></i>&nbsp;Open Terminal';

                          //====================terminal button==================================

                          btn1.onclick = function () {
                              btn1.setAttribute("data-backdrop", "static");
                              btn1.setAttribute("data-keyboard", "false");

                              var RebootTitleBtn1 = document.getElementById("Terminal-FTP-Display-title");
                              RebootTitleBtn1.innerHTML = "";
                              RebootTitleBtn1.innerHTML = "Terminal " + i;

                              var RebootBodyBtn1 = document.getElementById("Terminal-FTP-Display-body");
                              RebootBodyBtn1.innerHTML = "";
                              RebootBodyBtn1.style.height = "80vh";
                              //RebootBody.innerHTML = "Are you sure You want to Reboot this Device?";

                              btn1.setAttribute("data-toggle", "modal");
                              btn1.setAttribute("data-target", "#Terminal-FTP-Display");
                          };

                          let btn2 = document.createElement("button");
                          btn2.type = "button";
                          btn2.classList.add("btn", "btn-info", "btn-block");
                          btn2.innerHTML = '<i class="fa fa-folder"></i>&nbsp;Open FTP';

                          //==============================FTP button=======================

                          btn2.onclick = function () {
                              btn2.setAttribute("data-backdrop", "static");
                              btn2.setAttribute("data-keyboard", "false");

                              var RebootTitleBtn2 = document.getElementById("Terminal-FTP-Display-title");
                              RebootTitleBtn2.innerHTML = "";
                              RebootTitleBtn2.innerHTML = "FTP " + i;

                              var RebootBodyBtn2 = document.getElementById("Terminal-FTP-Display-body");
                              RebootBodyBtn2.innerHTML = "";
                              RebootBodyBtn2.style.height = "80vh";
                              //RebootBody.innerHTML = "Are you sure You want to Reboot this Device?";

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
                              RebootTitleBtn3.innerHTML = "Display " + i;

                              var RebootBodyBtn3 = document.getElementById("Terminal-FTP-Display-body");
                              RebootBodyBtn3.innerHTML = "";
                              RebootBodyBtn3.style.height = "80vh";
                              //RebootBody.innerHTML = "Are you sure You want to Reboot this Device?";

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
                              RebootTitleBtn4.innerHTML = "Reboot " + i;

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
                              shoutdownTitle.innerHTML = "Shoutdown " + i;

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
            document.getElementById("devicenameerror").innerHTML = deviceName ? "" : "Please enter a device name";
            });

            document.getElementById("deviceid").addEventListener("input", function () {
            var deviceId = this.value;
            document.getElementById("deviceiderror").innerHTML = deviceId ? "" : "Please enter a device id";
            });

            document.getElementById("devicekey").addEventListener("input", function() {
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

            // validation end

      //card remove button - strat
      document.getElementById("clsbtn").addEventListener("click", function () {
        document.querySelectorAll("li").forEach(function (element) {
          element.classList.remove("bg-info");
        });
        document.getElementById("card-for-option").style.display = "none";
        document.getElementById("start-text").style.display = "flex";
        document.getElementById("text-1").innerHTML = "Select your Device";
        document.getElementById("text-2").innerHTML = "Device options will appear here.";
      });
      //card remove button - end

      //secrch from search box - strat
      $("#search").on("keyup", function() {
        var searchvalue = $('#search').val().toLowerCase();
        var conceptName = $('#selectDD').find(":selected").val();
        var ddvalue = (conceptName == 2) ? "online" : (conceptName == 3) ? "offline" : "";

        $("#list .statusclass").filter(function() {
          $(this).closest("ul").toggle($(this).text().toLowerCase().indexOf(ddvalue) > -1)
        });

        if(searchvalue !== ""){
          $("#list ul:visible").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(searchvalue) > -1)
          });
        }
      });
      //secrch from search box - end

      //search from dropdown - start
      $("#selectDD").change(function(){
        var searchvalue = $('#search').val().toLowerCase();
        var conceptName = $('#selectDD').find(":selected").val();

        $("#list ul").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(searchvalue) > -1)
        });

        if(conceptName !== 1){
          var ddvalue = (conceptName == 2) ? "online" : (conceptName == 3) ? "offline" : "";
          $("#list .statusclass:visible").filter(function() {
            $(this).closest("ul").toggle($(this).text().toLowerCase().indexOf(ddvalue) > -1)
          });
        }
      });
      //search from dropdown - end