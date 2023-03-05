// Добавление товара в корзину

import cartStatus from "./cartStatus.js";
import cartPrice from "./cartPrice.js";

const addToCart = () => {
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
                    ${dataProduct.price}
                </div>
                <button class="cart-product__deleate btn-close" type="button" data-deleate="deleate"><span> </span></button>
                    </div>`

                cartProducts.insertAdjacentHTML('beforeend', cardTemplate);
            }
            cartStatus();
            cartPrice();
        }
    });
}

export default addToCart;