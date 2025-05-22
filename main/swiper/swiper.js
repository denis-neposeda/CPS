const swiper = new Swiper('.swiper',{

    breakpoints: {
        768: {
            enabled: false,
        }
    },

    mousewheel: {
        sensativity: 1,
    },

    slidesPerView: 'auto',

    spaceBetween: '16px',

    slideToClickedSlide: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});

