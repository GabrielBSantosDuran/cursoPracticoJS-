const menuEmail= document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const menuHamIcon= document.querySelector('.menu');
const mobileMenu= document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobilepMenu);

function toggleDesktopMenu(){
    console.log('click')
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu(){
    console.log('click mobile menu');
    mobileMenu.classList.toggle('inactive');
}