import swiper from "./modules/swiper.js";
import mobileNavigation from "./modules/mobileNavigation.js";
import tabs from "./modules/tabs.js";
import features from "./modules/features.js";
import mobileFilter from "./modules/mobileFilter.js";
import spoilerFeature from "./modules/spoilerFeature.js";
import spoilerFooter from "./modules/spoilerFooter.js";
import counter from "./modules/counter.js";
import deleateFromCart from "./modules/deleateFromCart.js";
import addToCart from "./modules/addToCart.js";
import loginModal from "./modules/loginModal.js";

// deleateFromCart();
// counter();
// addToCart();
loginModal();
mobileNavigation();
tabs();
features();
mobileFilter();
spoilerFeature();
spoilerFooter();






const cartProducts = document.querySelector('.cart-products');

let cardsList = [];

if(localStorage.getItem('cards')) {
    cardsList = JSON.parse(localStorage.getItem('cards'));
    cardsList.forEach((el) => renderCard(el));
}

showQuantity();
checkEmptyCart();
getPrice();

window.addEventListener('click', addCard);

window.addEventListener('click', deleteCard);

window.addEventListener('click', changeCounter);

function addToLocalStorage() {
    localStorage.setItem('cards', JSON.stringify(cardsList));
}

function renderCard(el) {
    if(!cartProducts) {
        return;
    }

    const productInCart = cartProducts.querySelector(`[data-id='${el.id}']`);

    if (productInCart) {
        const counterInCart = productInCart.querySelector('[data-counter]');
        counterInCart.value = ++counterInCart.value;
    } else {
        const cardTemplate = `<div class="cart-product" data-id="${el.id}"> 
            <div class="cart-product__img"> <img class="js-img-cart" src="${el.imgSrc}" alt="${el.title}"/></div>
            <div class="cart-product__title">${el.title}</div>
            <div class="cart-product__counter">
            <div class="counter"> 
                <button class="counter__btn counter__btn--down" type="button" data-button="down">-</button>
                <input class="counter__input" type="number" data-counter="data-counter" value="1"/>
                <button class="counter__btn counter__btn--up" type="button" data-button="up">+</button>
            </div>
            </div>
            <div class="cart-product__price"> 
                ${el.price}
            </div>
            <button class="cart-product__deleate btn-close" type="button" data-deleate="deleate"><span> </span></button>
                </div>`
        
        cartProducts.insertAdjacentHTML('beforeend', cardTemplate);
    }
}

function addCard(e) {
    if(e.target.hasAttribute('data-cart')) {
        const card = e.target.closest('.js-card');

        const dataProduct = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.js-img-card').getAttribute('src'),
            title: card.querySelector('.js-title').innerText,
            price: card.querySelector('.js-price').innerText
        };

        cardsList.push(dataProduct);

        addToLocalStorage();

        renderCard(dataProduct);

        showQuantity();
        checkEmptyCart();
        getPrice();
    }
}

function deleteCard(e) {
    if(e.target.dataset.deleate === 'deleate') {
        const cardForDeleate = e.target.closest('.cart-product');
        const idCard = cardForDeleate.dataset.id;

        cardsList = cardsList.filter(el => el.id !== idCard);

        addToLocalStorage();

        cardForDeleate.remove();

        showQuantity();
        checkEmptyCart();
        getPrice();
    }
}

function changeCounter(e) {
    let inputCounter;

    if( e.target.dataset.button === "up" || e.target.dataset.button === "down" ) {
        const counter = e.target.closest('.counter');
        inputCounter = counter.querySelector('[data-counter]');
    }

    if( e.target.dataset.button === "up" ) {
        const cardProduct = e.target.closest('.cart-product');

        const dataProduct = {
            id: cardProduct.dataset.id,
            imgSrc: cardProduct.querySelector('.js-img-cart').getAttribute('src'),
            title: cardProduct.querySelector('.cart-product__title').innerText,
            price: cardProduct.querySelector('.cart-product__price').innerText
        };

        cardsList.push(dataProduct);

        addToLocalStorage();

        inputCounter = inputCounter.value++;
    }

    if( e.target.dataset.button === "down" ) {
        if( inputCounter.value > 1 ) {
            const cardForDeleate = e.target.closest('.cart-product');
            const idCard = cardForDeleate.dataset.id;

            const cardIndex = cardsList.findIndex(el => el.id === idCard);

            cardsList.splice(cardIndex, 1);

            addToLocalStorage();

            inputCounter.value = --inputCounter.value;
        }
    }

    if( e.target.dataset.button === "up" || e.target.dataset.button === "down" ) {
        showQuantity();
        getPrice();
    }
    console.log(cardsList);
}

function checkEmptyCart() {

    if(!cartProducts) {
        return;
    }

    const cartEmpty = document.querySelector('.busket');
    const cartHeader = document.querySelector('.cart__info');
    const cartTotal = document.querySelector('.cart__total');

    if(cardsList.length > 0){
        cartEmpty.classList.add('none');
        cartHeader.classList.remove('none');
        cartTotal.classList.remove('none');
    } else {
        cartEmpty.classList.remove('none');
        cartHeader.classList.add('none');
        cartTotal.classList.add('none');
    }
}

function getPrice() {
    if(!cartProducts) {
        return;
    }
    const totalPriceElement = document.querySelector('[data-total]');
    let totalPrice = 0;

    cardsList.forEach((el) => {
        const elemPrice = parseInt(el.price.replace("руб.", "").replace(" ", ""));
        totalPrice += elemPrice;
    })

    totalPriceElement.innerText = totalPrice;
}

function showQuantity() {
    const userCounter = document.querySelector('.user__quantity');
    let quantity = cardsList.length;

    if(quantity > 0) {
        userCounter.classList.add('active');
        userCounter.innerText = quantity;
    } else {
        userCounter.classList.remove('active');
    }
}



























