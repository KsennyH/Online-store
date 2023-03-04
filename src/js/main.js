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

// Количество товаров в корзине
function cartStatus () {
    const products = document.querySelector('.cart-products');
    const cartEmpty = document.querySelector('.busket');
    const cartHeader = document.querySelector('.cart__info');
    const cartTotal = document.querySelector('.cart__total');

    if(products.children.length > 0) {
        cartEmpty.classList.add('none');
        cartHeader.classList.remove('none');
        cartTotal.classList.remove('none');
    } else {
        cartEmpty.classList.remove('none');
        cartHeader.classList.add('none');
        cartTotal.classList.add('none');
    }
}


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

        const productInCart = cartProducts.querySelector(`[data-id='${dataProduct.id}']`);
       
        if (productInCart) {
            const counterInCart = productInCart.querySelector('[data-counter]');
            counterInCart.value = ++counterInCart.value;
        } else {
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
            <button class="cart-product__deleate btn-close" type="button" data-deleate="deleate"><span> </span></button>
                </div>`

            cartProducts.insertAdjacentHTML('beforeend', cardTemplate);
        }
        cartStatus();
    }
});

//Удаление из корзины
window.addEventListener('click', (e) => {
    if( e.target.dataset.deleate === "deleate") {
        const cardForDeleate = e.target.closest('.cart-product');
        cardForDeleate.remove();
        cartStatus();
    }
});






















