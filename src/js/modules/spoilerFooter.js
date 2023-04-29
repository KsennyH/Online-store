const spoilerFooter = () => {

    const spoilers = document.querySelectorAll("[data-name='spoiler']");

    if(!spoilers) {
        return;
    } else {
        spoilers.forEach(el => {
            el.addEventListener('click', () => {
                el.nextElementSibling.classList.toggle('spoiler');
            });
        });
    }    
}

export default spoilerFooter;