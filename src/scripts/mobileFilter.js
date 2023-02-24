const mobileFilterBtn = document.querySelector('.js-filter-btn');
const mobileFilterForm = document.querySelector('.js-filter');

const mobileFilter = () => {
    mobileFilterBtn.addEventListener('click', () => {
        mobileFilterForm.classList.toggle('active');
    });
}

export default mobileFilter;