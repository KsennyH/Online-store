const loginModal = () => {
    window.addEventListener('click', (e) => {
        if(e.target.dataset.user === "user-login") {
            const btnLogin = e.target;
            const popup = document.querySelector('.js-popup');
            const loginPopup = document.querySelector('[data-login]');
            const btnClose = document.querySelector('.login__close');
    
            btnLogin.addEventListener('click', (e) => {
                e.preventDefault;
                popup.classList.add('active');
                loginPopup.classList.add('active');
            });
    
            btnClose.addEventListener('click', (e) => {
                e.preventDefault();
                popup.classList.remove('active');
                loginPopup.classList.remove('active');
            });
        }
    });
}

export default loginModal;