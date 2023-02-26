import swiper from "./modules/swiper.js";
import mobileNavigation from "./modules/mobileNavigation.js";
import spoilerFooter from "./modules/spoilerFooter.js";
mobileNavigation();
spoilerFooter();

const loginBtn = document.querySelector('.js-login');
const popup = document.querySelector('.js-popup');
const login = document.querySelector('.js-login-popup');
const loginClose = document.querySelector('.login__close');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.add('active');
    login.classList.add('active');
})

loginClose.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.remove('active');
    login.classList.remove('active');
})

document.addEventListener('click', (e) => {
    if(e.target === popup) {
        login.classList.remove('active');
        popup.classList.remove('active');
    }
})






















