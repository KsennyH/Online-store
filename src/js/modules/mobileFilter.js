const mobileFilter = () => {
    const mobileFilterBtn = document.querySelector('.js-filter-btn');
    const mobileFilterForm = document.querySelector('.js-filter');

    if(!mobileFilterBtn) {
        return;
    } else {
        mobileFilterBtn.addEventListener('click', () => {
            mobileFilterForm.classList.toggle('active');
        });
    }
}

export default mobileFilter;

