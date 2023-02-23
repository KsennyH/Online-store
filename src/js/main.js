import swiper from "./modules/swiper.js";
import tabs from "./modules/tabs.js";
import features from "./modules/features.js";
import mobileNavigation from "./modules/mobileNavigation.js";
import spoilerFooter from "./modules/spoilerFooter.js";
import spoilerFeature from "./modules/spoilerFeature.js";
import mobileFilter from "./modules/mobileFilter.js";
//tabs();
//features();
mobileNavigation();
//spoilerFeature();
//spoilerFooter();
//mobileFilter();

const btnTab = document.querySelectorAll('.js-btn-tab');
const tabItem = document.querySelectorAll('.js-tab');

btnTab.forEach(el => {
    el.addEventListener('click', (e) => {
        let currentTabBtn = e.currentTarget;
        let idTab = currentTabBtn.getAttribute('data-service');
        let currentTabItem = document.querySelector(idTab);

        if ( !currentTabBtn.classList.contains('active') ) {
            btnTab.forEach(el => {
                el.classList.remove('active');
            });

            tabItem.forEach(el => {
                el.classList.remove('active');
            });
        }

        currentTabBtn.classList.add('active');
        currentTabItem.classList.add('active');
    })
})
document.querySelector('.js-btn-tab').click();














