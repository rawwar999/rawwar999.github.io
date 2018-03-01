var menuOpen = document.querySelector('.head__menu');
var controlMenu = document.querySelector('.menu-header');
var menuClose = document.querySelector('.menu__close');

menuOpen.addEventListener("click", function(event) {
  event.preventDefault();
  controlMenu.classList.remove('menu__header--close');
});

menuClose.addEventListener("click", function(event) {
  event.preventDefault();
  controlMenu.classList.add('menu__header--close');
});