
const paragraph2 = `
      <p>
        @${new Date().getFullYear()} Thuy Duong Thi Lawrence - WDD230 Project
      </p>
    `;
document.getElementById("copyright").innerHTML = paragraph2

const date2 = document.lastModified;

document.getElementById("lastModified").innerHTML = "Last Modification: " + date2;

const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");
// console.log(visitsDisplay)
// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date.
// todayDisplay.textContent = Date.now();

// You can view the localStorage data using the Applications panel in the browsers's DevTools.
// const user1 = document.querySelector("#user1");
// const user2 = document.querySelector("#user2")
// const message = document.querySelector("#form")
// user2.addEventListener("focusout", checkSame);
// function checkSame() {
//   if (user1.value !== user2.value) {
//     message.textContent = "The username does not match!";
//     message.getElementsByClassName.display = "block";
//     user2.getElementsByClassName.backgroundcolor = "#aa3333";
//     user2.getElementsByClassName.color = "#fff";
//     user2.focus();
//     user2.value = "";
//   } else {
//     // message.getElementsByClassName.display = "block";
//     // user2.getElementsByClassName.backgroundcolor = "#fff";
//     // user2.getElementsByClassName.color = "#000";
//     message.textContent = "The username does match!";
//     message.getElementsByClassName.display = "block";
//     user2.getElementsByClassName.backgroundcolor = "#aa3333";
//     user2.getElementsByClassName.color = "#fff";
//     user2.focus();
//     user2.value = "";
document.getElementById("range").addEventListener("change", function(){
  popup("the range was changed to value " + this.value);
});
document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();

  if(document.getElementById("user1").value != document.getElementById("user2").value){
      popup("the usernames do not match");
      return;
  }

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var rating = document.getElementById("range").value;
  var username = document.getElementById("user1").value;

  var div = document.createElement("div");

  var h2 = document.createElement("h2");
  h2.innerHTML = "Form Input";
  div.appendChild(h2);

  var table = document.createElement("table");
  var tr = document.createElement("tr");
  var th = document.createElement("th");
  th.innerHTML = "Field";
  tr.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Value";
  tr.appendChild(th);
  table.appendChild(tr);

  var tr = document.createElement("tr");
  var td = document.createElement("td");
  td.innerHTML = "Name";
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerHTML = name;
  tr.appendChild(td);
  table.appendChild(tr);

  var tr = document.createElement("tr");
  var td = document.createElement("td");
  td.innerHTML = "Email";
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerHTML = email;
  tr.appendChild(td);
  table.appendChild(tr);

  var tr = document.createElement("tr");
  var td = document.createElement("td");
  td.innerHTML = "Rating";
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerHTML = rating;
  tr.appendChild(td);
  table.appendChild(tr);

  var tr = document.createElement("tr");
  var td = document.createElement("td");
  td.innerHTML = "Username";
  tr.appendChild(td);
  td = document.createElement("td");
  td.innerHTML = username;
  tr.appendChild(td);
  table.appendChild(tr);

  div.appendChild(table);

  document.getElementById("formtable").appendChild(div);
  document.getElementById("formtable").style.display = "block";

  document.getElementById("form").reset();
});


