const mobileNavigation = () => {

    const mobileNavButton = document.querySelector('.mobile-button');
    const mobileNavIcon = document.querySelector('.mobile-button__icon');
    const mobileNav = document.querySelector('.mobile-nav');

    if(!mobileNavButton) {
        return;
    } else {
        mobileNavButton.addEventListener('click', () => {
            mobileNavIcon.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }
}

export default mobileNavigation;