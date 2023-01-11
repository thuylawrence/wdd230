document.getElementById("copyright").innerHTML = paragraph

var date = document.lastModified;

document.getElementById("lastModified").innerHTML = "Last Modification: " + date;

const menubutton = document.querySelector("#menu-button");
const menuitems = document.querySelectorAll(".menu-item");
// menuitems will be a Node List of the list items

menubutton.addEventListener("click", () => {
	menuitems.forEach((item) => item.classList.toggle("open"));
	menubutton.classList.toggle("close");
});