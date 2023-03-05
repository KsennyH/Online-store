const mobileFilterBtn = document.querySelector('.js-filter-btn');
const mobileFilterForm = document.querySelector('.js-filter');

mobileFilterBtn.addEventListener('click', () => {
    mobileFilterForm.classList.toggle('active');
});
