const featureBtn = document.querySelector('.feature-top__btn');
const feature = document.querySelector('.js-features');

featureBtn.addEventListener('click', function () {
    this.classList.toggle('open');
    feature.classList.toggle('active');
});
