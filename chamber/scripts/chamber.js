
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


// document.getElementById("range").addEventListener("change", function(){
//   popup("the range was changed to value " + this.value);
// });
// document.getElementById("form").addEventListener("submit", function(e){
//   e.preventDefault();

//   if(document.getElementById("user1").value != document.getElementById("user2").value){
//       alert("the usernames do not match");
//       return;
//   }

//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var rating = document.getElementById("range").value;
//   var username = document.getElementById("user1").value;

//   var div = document.createElement("div");

//   var h2 = document.createElement("h2");
//   h2.innerHTML = "Form Input";
//   div.appendChild(h2);

//   var table = document.createElement("table");
//   var tr = document.createElement("tr");
//   var th = document.createElement("th");
//   th.innerHTML = "Field";
//   tr.appendChild(th);
//   th = document.createElement("th");
//   th.innerHTML = "Value";
//   tr.appendChild(th);
//   table.appendChild(tr);

//   var tr = document.createElement("tr");
//   var td = document.createElement("td");
//   td.innerHTML = "Name";
//   tr.appendChild(td);
//   td = document.createElement("td");
//   td.innerHTML = name;
//   tr.appendChild(td);
//   table.appendChild(tr);

//   var tr = document.createElement("tr");
//   var td = document.createElement("td");
//   td.innerHTML = "Email";
//   tr.appendChild(td);
//   td = document.createElement("td");
//   td.innerHTML = email;
//   tr.appendChild(td);
//   table.appendChild(tr);

//   var tr = document.createElement("tr");
//   var td = document.createElement("td");
//   td.innerHTML = "Rating";
//   tr.appendChild(td);
//   td = document.createElement("td");
//   td.innerHTML = rating;
//   tr.appendChild(td);
//   table.appendChild(tr);

//   var tr = document.createElement("tr");
//   var td = document.createElement("td");
//   td.innerHTML = "Username";
//   tr.appendChild(td);
//   td = document.createElement("td");
//   td.innerHTML = username;
//   tr.appendChild(td);
//   table.appendChild(tr);

//   div.appendChild(table);

//   document.getElementById("formtable").appendChild(div);
//   document.getElementById("formtable").style.display = "block";

//   document.getElementById("form").reset();
// });

// var d = new Date();
// document.getElementById("date").value = d.toDateString();

// var hours = d.getHours();
// var mins = d.getMinutes();
// var seconds = d.getSeconds();
// document.getElementById("time").value = hours + ":" + mins + ":" + seconds;

// select HTML elements in the document
// weather api
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const townName = "Guangzhou";
const apiKey = "d3dbafb2f2288266046409ab37fc5787"
const url = `//api.openweathermap.org/data/2.5/weather?q=${townName}&appid=${apiKey}&units=imperial`;

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))

async function apiFetch1() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayData(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function displayData(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src',iconsrc );
    weatherIcon.setAttribute('alt',desc );
    captionDesc.textContent = `${desc}`;
  }
  
  apiFetch1();

  //JSON dynamic links
fetch("week05/data/activity.json")
  .then((response) => response.json())
  .then((data) => console.log(data))

async function apiFetch() {
    try {
      const response = await fetch("week05/data/activity.json");
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayData1(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
const activities = document.querySelector("#activities");
  function displayData1(data) {
    for(let i in data) {
      var li = document.createElement("li");
      var items =data[i];
      // var span = document.createElement("span");
      // span.innerHTML = data[i]+": ";
      // li.appendChild(span);
      for(let j in items){
        if(j != 0){
          var span2 = document.createElement("span");
          span2.innerHTML = " | ";
          li.appendChild(span2);
        }
          var a = document.createElement("a");
          a.href = items[j];
          a.innerHTML = items[j];
          li.appendChild(a);
          activities.appendChild(li);
    
      }
     
    }
  }
  apiFetch();  
  
 