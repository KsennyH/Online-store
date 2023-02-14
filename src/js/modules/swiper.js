import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.popular-products__slider', {
    modules: [Navigation, Pagination],
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        575: {
            spaceBetween: 20,
        },
        654: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    }
});

export default swiper;