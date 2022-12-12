const menuBtn = document.querySelector('#menuBtn');
const sideNav= document.querySelector('#sideNav');
const menuList= document.querySelector('#menuList');

    menuBtn.onclick = function () {
    sideNav.classList.toggle('open');
    menuList.classList.toggle('open')
    }
// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});









