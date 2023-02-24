const spoilers = document.querySelectorAll("[data-name='spoiler-feature']");

spoilers.forEach(el => {
    el.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('spoiler-feature');
    });
});