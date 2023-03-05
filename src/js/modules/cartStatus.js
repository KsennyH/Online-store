// Количество товаров в корзине

const cartStatus = () => {
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

export default cartStatus;