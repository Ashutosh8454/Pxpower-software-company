navbar = document.querySelector('.navbar');
searchbar = document.querySelector('.searchbar');
navlist = document.querySelector('.nav-list');
// vres=document.querySelector('.v-res');
burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    navbar.classList.toggle('h-res');
    searchbar.classList.toggle('v-res');
    navlist.classList.toggle('v-res');
})