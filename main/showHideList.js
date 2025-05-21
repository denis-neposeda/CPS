const showHideBtn = document.querySelector('[data-js-btn-show-hide]')
const swiperWrapper = document.querySelector('[data-js-swiper-wrapper]')




showHideBtn.addEventListener('click', 
    function() {
        if (swiperWrapper.style.maxHeight !== 'none') {
            swiperWrapper.style.maxHeight = 'none'
            showHideBtn.textContent = 'Скрыть'
            // showHideBtn.classList.add("show-content")
        } else {
            swiperWrapper.style.maxHeight = '160px'
            showHideBtn.textContent = 'Показать все'
            // showHideBtn.classList.remove("show-content")
        }

        showHideBtn.classList.toggle('show-content', (swiperWrapper.style.maxHeight === 'none'))
    }
)

