const popup = document.querySelector('.js-popup');
const loginPopup = document.querySelector('.js-login-popup');

const login = () => {
    const loginBtn = document.querySelector('.js-login');
    const btnClose = document.querySelector('.js-modal-close');

    loginBtn.addEventListener('click', showLogin);

    btnClose.addEventListener('click', hideLogin);
}

function showLogin() {
    
    popup.classList.add('active');
    loginPopup.classList.add('active');
    
    popup.addEventListener('click', function(e) {
        const login = loginPopup.closest('.js-login-popup');
        if(e.target.contains(login)) {
            hideLogin();
        }
    });
}

function hideLogin() {

    popup.classList.remove('active');
    loginPopup.classList.remove('active');

}

export default login;