const menubutton = document.querySelector('#hamIcon');
const menuitems = document.querySelectorAll(".menu-item");
 
 menubutton.addEventListener('click', () => {
	menuitems.forEach((item) => item.classList.toggle("open"));
    menubutton.classList.toggle("close");
 });




// const menuitems = document.querySelectorAll(".nav-item");
 
// // menuitems will be a Node List of the list items

//  menubutton.addEventListener("click", () => {
// 	 menuitems.forEach((item) => item.classList.toggle("open"));
// 	menubutton.classList.toggle("close");
//  });
// document.getElementById("hamIcon").addEventListener("click", function (){
// 	document.getElementById("mainnav").classList.toggle("responsive"); }, false);
