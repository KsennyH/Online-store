const spoilerFeature = () => {
    const spoilers = document.querySelectorAll("[data-name='spoiler-feature']");

    if(!spoilers) {
        return;
    } else {
        spoilers.forEach((el) => {
            el.addEventListener('click', () => {
                el.nextElementSibling.classList.toggle('spoiler-feature');
            })
        })
    }
}

export default spoilerFeature;