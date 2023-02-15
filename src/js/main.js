import swiper from "./modules/swiper.js";
import tabs from "./modules/tabs.js";
//swiper();

const colorBtns = document.querySelectorAll('.js-color-btn');
const colorImg = document.querySelectorAll('.js-img');

colorBtns.forEach(el => {
    el.addEventListener("click", (e) => {
        let currentColorBtn = e.currentTarget;
        let tabId = currentColorBtn.getAttribute('data-color');
        let currentColorImg = document.querySelector(tabId);

        if ( !currentColorBtn.classList.contains('active') ) {
            colorBtns.forEach(el => {
                el.classList.remove('active');
            });

            colorImg.forEach(el => {
                el.classList.remove('active');
            });
        }

        currentColorBtn.classList.add('active');
        currentColorImg.classList.add('active');
    })
})
document.querySelector('.js-color-btn').click();

