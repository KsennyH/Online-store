import swiper from "./modules/swiper.js";
import mobileNavigation from "./modules/mobileNavigation.js";
import spoilerFooter from "./modules/spoilerFooter.js";
mobileNavigation();
spoilerFooter();

const loginBtn = document.querySelector('.js-login');
const loginPopup = document.querySelector('.js-login-popup');
const loginClose = document.querySelector('.login__close');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginPopup.classList.add('active');
})

loginClose.addEventListener('click', (e) => {
    e.preventDefault();
    loginPopup.classList.remove('active');
})

















