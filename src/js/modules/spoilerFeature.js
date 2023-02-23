const spoilers = document.querySelectorAll("[data-name='spoiler-feature']");

const spoilerFeature = () => {
    spoilers.forEach(el => {
        el.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('spoiler-feature');
        });
    });
}

export default spoilerFeature;