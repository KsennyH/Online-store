// Счетчик количества товара

import cartPrice from "./cartPrice.js";

const counter = () => {
    window.addEventListener('click', (e) => {

        let inputCounter;
    
        if( e.target.dataset.button === "up" || e.target.dataset.button === "down" ) {
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
    
        if( e.target.dataset.button === "up" || e.target.dataset.button === "down" ) {
            cartPrice();
        }
    });
}

export default counter;