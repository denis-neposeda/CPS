export function showHideTech() {
    const showHideTechBtn = document.querySelector('[data-js-tech-btn]')
    const showHideTechList = document.querySelector('[data-js-tech-list]')

    showHideTechBtn.addEventListener('click', 
        function() {
            if (showHideTechList.style.maxHeight !== 'none') {
                showHideTechList.style.maxHeight = 'none'
                showHideTechBtn.textContent = 'Скрыть'
                // showHideBtn.classList.add("show-content")
            } else {
                showHideTechList.style.maxHeight = '160px'
                showHideTechBtn.textContent = 'Показать все'
                // showHideBtn.classList.remove("show-content")
            }

            showHideTechBtn.classList.toggle('show-content', (showHideTechList.style.maxHeight === 'none'))
        }
    )

}
