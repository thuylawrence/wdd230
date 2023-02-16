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
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);