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

//Счетчик
window.addEventListener('click', (e) => {

    let inputCounter;

    if(e.target.dataset.button === "up" || e.target.dataset.button === "down" ) {
        const counter = e.target.closest('.counter');
        inputCounter = counter.querySelector('[data-counter]');
    }

    if( e.target.dataset.button === "up" ) {
        inputCounter = inputCounter.value++;
    }

    if( e.target.dataset.button === "down" ) {
        if( inputCounter.value > 1 ) {
            inputCounter.value = --inputCounter.value;
        }
    }
});

//Добавление в корзину
window.addEventListener('click', (e) => {
    if(e.target.hasAttribute('data-cart')) {
        const card = e.target.closest('.product-card');
        
        const dataProduct = {
            imgSrc: card.querySelector('.js-img-card').getAttribute('src'),
            title: card.querySelector('.product-card__title').innerText,
            price: card.querySelector('.product-card__price').innerText
        }
        console.log(dataProduct);
    }
})





















