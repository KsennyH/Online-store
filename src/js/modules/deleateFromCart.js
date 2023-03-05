// Удаление товара из корзины

import cartPrice from "./cartPrice.js";
import cartStatus from "./cartStatus.js";

const deleateFromCart = () => {
    window.addEventListener('click', (e) => {
        if( e.target.dataset.deleate === "deleate") {
            const cardForDeleate = e.target.closest('.cart-product');
            cardForDeleate.remove();
            cartStatus();
            cartPrice();
        }
    });
}

export default deleateFromCart;