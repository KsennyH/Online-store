const btnTab = document.querySelectorAll('.js-btn-tab');
const tabItem = document.querySelectorAll('.js-tab');

const servicesTabs = () => {
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
}

export default servicesTabs;