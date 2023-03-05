// Цена для счетчика

const cartPrice = () => {
    const cartElements = document.querySelectorAll('.cart-product');
    const totalPriceElement = document.querySelector('[data-total]');
    let totalPrice = 0;

    cartElements.forEach(el => {
        const elementCount = el.querySelector('[data-counter]');
        const elementPrice = el.querySelector('.cart-product__price');
        const currentPriceElement = elementCount.value * parseInt(elementPrice.innerText.replace(" ", ""));
        totalPrice += currentPriceElement;
        totalPriceElement.innerText = totalPrice;
    });
}

export default cartPrice;