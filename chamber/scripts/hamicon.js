const menubutton = document.querySelector('.menu');
 const mynav = document.querySelector('nav');
 
 menubutton.addEventListener('click', () => {
	mynav.classList.toggle('open')
 })
