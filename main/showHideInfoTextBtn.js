const showHideInfoTextBtn = document.querySelector('[data-js-info-btn]')
const showHideInfoText = document.querySelector('[data-js-info-text]')




showHideInfoTextBtn.addEventListener('click', 
    function() {
        if (showHideInfoText.style.height !== 'auto') {
            showHideInfoText.style.height = 'auto'
            showHideInfoTextBtn.textContent = 'Скрыть'
            // showHideBtn.classList.add("show-content")
        } else {
            showHideInfoText.style.height = '160px'
            showHideInfoTextBtn.textContent = 'Читать далее'
            // showHideBtn.classList.remove("show-content")
        }

        showHideInfoTextBtn.classList.toggle('show-content', (showHideInfoText.style.height === 'auto'))
    }
)

