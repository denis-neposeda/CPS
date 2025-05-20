const swiper = new Swiper('.swiper',{

    breakpoints: {
        550: {
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

