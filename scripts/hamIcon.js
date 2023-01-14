document.getElementById("copyright").innerHTML = paragraph

var date = document.lastModified;

document.getElementById("lastModified").innerHTML = "Last Modification: " + date;

 const menubutton = document.querySelector('header button');
 const mynav = document.querySelector('nav');
 
 menubutton.addEventListener('click', () => {
	mynav.classList.toggle('open')
 })



// const menuitems = document.querySelectorAll(".nav-item");
 
// // menuitems will be a Node List of the list items

//  menubutton.addEventListener("click", () => {
// 	 menuitems.forEach((item) => item.classList.toggle("open"));
// 	menubutton.classList.toggle("close");
//  });
// document.getElementById("hamIcon").addEventListener("click", function (){
// 	document.getElementById("mainnav").classList.toggle("responsive"); }, false);
