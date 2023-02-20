const spoilers = document.querySelectorAll("[data-name='spoiler']");

const spoiler = () => {
    spoilers.forEach(el => {
        el.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('spoiler');
        });
    });
}

export default spoiler;