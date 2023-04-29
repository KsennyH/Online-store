const features = () => {
    const featureBtn = document.querySelector('.feature-top__btn');
    const feature = document.querySelector('.js-features');

    if(!featureBtn) {
        return;
    } else {
        featureBtn.addEventListener('click', () => {
            featureBtn.classList.toggle('open');
            feature.classList.toggle('active');
        })
    }
}

export default features;