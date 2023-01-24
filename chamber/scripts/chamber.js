
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
