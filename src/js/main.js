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
const cartProducts = document.querySelector('.cart-products');
window.addEventListener('click', (e) => {
    if(e.target.hasAttribute('data-cart')) {
        const card = e.target.closest('.product-card');
        
        const dataProduct = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.js-img-card').getAttribute('src'),
            title: card.querySelector('.product-card__title').innerText,
            price: card.querySelector('.product-card__price').innerText
        };

        const cardTemplate = `<div class="cart-product" data-id="${dataProduct.id}"> 
            <div class="cart-product__img"> <img src="${dataProduct.imgSrc}" alt="${dataProduct.title}"/></div>
            <div class="cart-product__title">${dataProduct.title}</div>
            <div class="cart-product__counter">
            <div class="counter"> 
                <button class="counter__btn counter__btn--down" type="button" data-button="down">-</button>
                <input class="counter__input" type="number" data-counter="data-counter" value="1"/>
                <button class="counter__btn counter__btn--up" type="button" data-button="up">+</button>
            </div>
            </div>
            <div class="cart-product__price"> 
            <p>${dataProduct.price}</p>
            </div>
            <button class="cart-product__deleate btn-close" type="button"><span> </span></button>
        </div>`

        cartProducts.insertAdjacentHTML('beforeend', cardTemplate);
    }
})





















