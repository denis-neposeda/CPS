const container = document.querySelector('[data-js-container]')
const toggleBurger = document.querySelector('[data-js-toggle-burger]')
const callBtn = document.querySelector('[data-js-call-btn]')
const callBtnClose = document.querySelector('[data-js-call-btn-close]')
const feedbackBtn = document.querySelector('[data-js-feedback-btn]')
const feedbackBtnClose = document.querySelector('[data-js-feedback-btn-close]')
const modalFeedback = document.querySelector('[data-js-modal-feedback]')
const modalCall = document.querySelector('[data-js-modal-call]')
const modalCallWrapper = document.querySelector('[data-js-modal-call-wrapper]')
const modalFeedbackWrapper = document.querySelector('[data-js-modal-feedback-wrapper]')



toggleBurger.addEventListener('click',
    function() {
        container.classList.toggle('blur-from-toggle-burger')
    }
)

callBtn.addEventListener('click',
    function() {
        modalCall.classList.toggle('modal_open')
        modalCallWrapper.classList.toggle('modal__blur')
    }
)

feedbackBtn.addEventListener('click',
    function() {
        modalFeedback.classList.toggle('modal_open')
        modalFeedbackWrapper.classList.toggle('modal__blur')
    }
)

callBtnClose.addEventListener('click', 
    function() {
        modalCall.classList.remove('modal_open')
        modalCallWrapper.classList.remove('modal__blur')
    }
)

feedbackBtnClose.addEventListener('click', 
    function() {
        modalFeedback.classList.remove('modal_open')
        modalFeedbackWrapper.classList.remove('modal__blur')
    }
)

function handleOutside(event) {  
    const isClickInside = !!event.target.closest('.modal__blur');  
    if (!isClickInside) {  
        function closedModal() {
            modalFeedback.classList.remove('modal_open')
            modalFeedbackWrapper.classList.remove('modal__blur')
            };      
        };

}  
