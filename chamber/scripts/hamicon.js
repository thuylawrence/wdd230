const menubutton = document.querySelector('#hamIcon');
const menuitems = document.querySelectorAll(".menu-item");
 
 menubutton.addEventListener('click', () => {
	menuitems.forEach((item) => item.classList.toggle("open"));
    menubutton.classList.toggle("close");
 });
