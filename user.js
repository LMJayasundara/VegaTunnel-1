//list view create
document.addEventListener("DOMContentLoaded", function () {
  const userListUl = document.getElementById("user-list-ul");
  userListUl.innerHTML = "";

  for (let i = 0; i < 15; i++) {
      const userList = document.createElement("ul");
      userList.className = "list-group mb-1 changeToPointer";

      const user = document.createElement("li");
      user.className = "list-group-item list-group-item-action";

      const row = document.createElement("div");
      row.className = "row";

      const col1 = document.createElement("div");
      col1.className = "col";
      col1.textContent = i;

      const col2 = document.createElement("div");
      col2.className = "col";
      col2.textContent = "shenuka";

      const col3 = document.createElement("div");
      col3.className = "col";
      const badge = document.createElement("span");

      const col4 = document.createElement("div");
      col4.className = "col-1";

      if (i % 2 == 0) {
          badge.className = "badge bg-danger";
          badge.style.width = "6vh";
          badge.textContent = "Admin";

          col2.textContent = "Heshan";

          userList.onclick = function () {
              //remove selected row colour
              var lis = document.querySelectorAll("li");
              lis.forEach(function (element) {
                  element.classList.remove("bg-info");
              });

              //colour selected row
              //user.classList.add("bg-info");

              //hide card
              var card = document.getElementById("card-for-user");
              card.style.display = "none";

              //hide card
              var card1 = document.getElementById("card-for-device-search");
              card1.style.display = "none";

              var text1 = document.getElementById("user-card-text-1");
              text1.innerHTML = "Declined";

              var text2 = document.getElementById("user-card-text-2");
              text2.innerHTML = "Can't Edit Admin";

              //show start text
              var text = document.getElementById("start-text");
              text.style.display = "flex";
          };
      } else {
          badge.className = "badge bg-warning";
          badge.style.width = "6vh";
          badge.textContent = "User";

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
          aTag1.innerHTML = "Edit User Details";

          // Edit User Details Click
          aTag1.onclick = function () {
              //remove start text
              var text = document.getElementById("start-text");
              text.style.display = "none";

              //remove selected row colour
              var lis = document.querySelectorAll("li");
              lis.forEach(function (element) {
                  element.classList.remove("bg-info");
              });

              //colour selected row
              user.classList.add("bg-info");

              //hide card
              var card = document.getElementById("card-for-user");
              card.style.display = "none";

              //hide card
              var card1 = document.getElementById("card-for-device-search");
              card1.style.display = "none";

              //card title
              var cardtitle = document.getElementById("user-card-title");
              cardtitle.innerHTML = "Edit User Details " + i;

              //Form Start
              var cardBody = document.querySelector("#card-body-edit-user");
              cardBody.innerHTML = "";

              var form = document.createElement("form");
              form.setAttribute("style", "overflow-y: auto; height: 100%;");

              var formGroup1 = document.createElement("div");
              formGroup1.className = "form-group";
              var label1 = document.createElement("label");
              label1.textContent = "User ID";
              var input1 = document.createElement("input");
              input1.type = "text";
              input1.className = "form-control";
              input1.id = "userID";
              input1.disabled = true;
              formGroup1.appendChild(label1);
              formGroup1.appendChild(input1);

              var formGroup2 = document.createElement("div");
              formGroup2.className = "form-group";
              var label2 = document.createElement("label");
              label2.textContent = "User Name";
              var input2 = document.createElement("input");
              input2.type = "text";
              input2.className = "form-control";
              input2.id = "username";
              input2.placeholder = "Enter username";
              formGroup2.appendChild(label2);
              formGroup2.appendChild(input2);

              var formGroup3 = document.createElement("div");
              formGroup3.className = "form-group";
              var label3 = document.createElement("label");
              label3.textContent = "Email";
              var input3 = document.createElement("input");
              input3.type = "email";
              input3.className = "form-control";
              input3.id = "useremail";
              input3.placeholder = "Enter email";
              formGroup3.appendChild(label3);
              formGroup3.appendChild(input3);

              var formGroup4 = document.createElement("div");
              formGroup4.className = "form-group";
              var label4 = document.createElement("label");
              label4.textContent = "Current Password";
              var input4 = document.createElement("input");
              input4.type = "password";
              input4.className = "form-control";
              input4.id = "current-password";
              input4.placeholder = "Enter Current password";
              formGroup4.appendChild(label4);
              formGroup4.appendChild(input4);

              var formGroup5 = document.createElement("div");
              formGroup5.className = "form-group";
              var label5 = document.createElement("label");
              label5.textContent = "Password";
              var input5 = document.createElement("input");
              input5.type = "password";
              input5.className = "form-control";
              input5.id = "password";
              input5.placeholder = "Enter password";
              formGroup5.appendChild(label5);
              formGroup5.appendChild(input5);

              var formGroup6 = document.createElement("div");
              formGroup6.className = "form-group";
              var label6 = document.createElement("label");
              label6.textContent = "Confirm Password";
              var input6 = document.createElement("input");
              input6.type = "password";
              input6.className = "form-control";
              input6.id = "confirm-password";
              input6.placeholder = "Confirm your password";
              formGroup6.appendChild(label6);
              formGroup6.appendChild(input6);

              var formGroup7 = document.createElement("div");
              formGroup7.className = "form-group";
              var label7 = document.createElement("label");
              label7.textContent = "Role";
              var input7 = document.createElement("Select");
              input7.className = "form-control";
              input7.id = "role";

              var opt1 = document.createElement("option");
              opt1.value = "User";
              opt1.innerHTML = "User";

              var opt2 = document.createElement("option");
              opt2.value = "Admin";
              opt2.innerHTML = "Admin";

              formGroup7.appendChild(label7);
              formGroup7.appendChild(input7);
              input7.appendChild(opt1);
              input7.appendChild(opt2);

              form.appendChild(formGroup1);
              form.appendChild(formGroup2);
              form.appendChild(formGroup3);
              form.appendChild(formGroup4);
              form.appendChild(formGroup5);
              form.appendChild(formGroup6);
              form.appendChild(formGroup7);

              cardBody.appendChild(form);
              //form End

              //footer start
              const cardFooterEditUser = document.getElementById("card-footer-edit-user");
              cardFooterEditUser.innerHTML = "";

              const saveButton = document.createElement("button");
              saveButton.type = "button";
              saveButton.classList.add("btn", "btn-success", "btn-block");
              saveButton.innerText = "Save changes";

              const discardButton = document.createElement("button");
              discardButton.type = "button";
              discardButton.classList.add("btn", "btn-danger", "btn-block");
              discardButton.setAttribute("data-dismiss", "modal");
              discardButton.innerText = "Discard changes";

              cardFooterEditUser.appendChild(saveButton);
              cardFooterEditUser.appendChild(discardButton);

              //footer end

              //visiable card
              card.style.display = "block";
          };

          const aTag2 = document.createElement("a");
          aTag2.classList.add("dropdown-item", "font-weight-bold", "font-italic");
          aTag2.innerHTML = "Edit User Access";

          //edit Access user
          aTag2.onclick = function () {
              //remove start text
              var text = document.getElementById("start-text");
              text.style.display = "none";

              //remove selected row colour
              var lis = document.querySelectorAll("li");
              lis.forEach(function (element) {
                  element.classList.remove("bg-info");
              });

              //colour selected row
              user.classList.add("bg-info");

              //hide card
              var card = document.getElementById("card-for-user");
              card.style.display = "none";

              //card title
              var cardtitle = document.getElementById("user-editDevice-title");
              cardtitle.innerHTML = "Edit User Access " + i;

              //hide card
              var card = document.getElementById("card-for-device-search");
              card.style.display = "none";

              var tableBodyforDevice = document.getElementById("device-tablebody-checkbox");
              tableBodyforDevice.innerHTML = "";

              //table loop

              for (let x = 0; x < 10; x++) {
                  const tr = document.createElement("tr");

                  const td1 = document.createElement("td");
                  const input = document.createElement("input");
                  input.type = "checkbox";
                  td1.appendChild(input);
                  tr.appendChild(td1);

                  const td2 = document.createElement("td");
                  td2.textContent = "Row " + x;
                  tr.appendChild(td2);

                  const td3 = document.createElement("td");
                  td3.textContent = "Row 1, Column 2";
                  tr.appendChild(td3);

                  tableBodyforDevice.appendChild(tr);
              }

              //form End

              //footer start
              const cardFooterEditUser = document.getElementById("card-footer-edit-user");
              cardFooterEditUser.innerHTML = "";

              const saveButton = document.createElement("button");
              saveButton.type = "button";
              saveButton.classList.add("btn", "btn-success", "btn-block");
              saveButton.innerText = "Save changes";

              const discardButton = document.createElement("button");
              discardButton.type = "button";
              discardButton.classList.add("btn", "btn-danger", "btn-block");
              discardButton.setAttribute("data-dismiss", "modal");
              discardButton.innerText = "Discard changes";

              cardFooterEditUser.appendChild(saveButton);
              cardFooterEditUser.appendChild(discardButton);

              //footer end

              //visiable card
              card.style.display = "block";
          };

          const itag1 = document.createElement("i");
          itag1.classList.add("fas", "float-right");
          itag1.style.color = "green";
          itag1.innerHTML = "&#xf4ff;";

          const itag2 = document.createElement("i");
          itag2.classList.add("far", "float-right");
          itag2.style.color = "green";
          itag2.innerHTML = "&#xf044;";

          userList.onclick = function () {
              //userList Click
          };

          col4.appendChild(more);
          col4.appendChild(dropDownMenu);
          dropDownMenu.appendChild(aTag1);
          aTag1.appendChild(itag1);
          dropDownMenu.appendChild(aTag2);
          aTag2.appendChild(itag2);
      }

      col3.appendChild(badge);

      row.appendChild(col1);
      row.appendChild(col2);
      row.appendChild(col3);
      row.appendChild(col4);
      user.appendChild(row);
      userList.appendChild(user);

      userListUl.appendChild(userList);
  }
});

//card remove button - strat
document.getElementById("user-card-close").addEventListener("click", function () {
  document.querySelectorAll("li").forEach(function (element) {
      element.classList.remove("bg-info");
  });
  document.getElementById("card-for-user").style.display = "none";
  document.getElementById("start-text").style.display = "flex";
  document.getElementById("user-card-text-1").innerHTML = "Select User";
  document.getElementById("user-card-text-2").innerHTML = "User details will appere here.";
});
//card remove button - end

//card remove button - strat
document.getElementById("user-cardDevice-close").addEventListener("click", function () {
  document.querySelectorAll("li").forEach(function (element) {
      element.classList.remove("bg-info");
  });
  document.getElementById("card-for-device-search").style.display = "none";
  document.getElementById("start-text").style.display = "flex";
  document.getElementById("user-card-text-1").innerHTML = "Select User";
  document.getElementById("user-card-text-2").innerHTML = "User details will appere here.";
});
//card remove button - end

$("#search-device-checkbox").on("keyup", function () {
  var value = $(this).val().toLowerCase();
  $("#device-tablebody-checkbox tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
});

// //secrch from search box - strat
$("#search-user").on("keyup", function () {
  var searchvalue = $("#search-user").val().toLowerCase();

  console.log(searchvalue);

  $("#user-list-ul ul").filter(function () {
      $(this)
          .closest("ul")
          .toggle($(this).text().toLowerCase().indexOf(searchvalue) > -1);
  });
});

