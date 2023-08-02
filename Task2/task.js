const subscribeModal = document.querySelector('#subscribe-modal')
const closeModal = document.querySelector('.modal__close')

subscribeModal.classList.add('modal_active')

if (document.cookie.includes('status=close')) {
    subscribeModal.className = 'modal'
}

closeModal.addEventListener('click', () => {
    if (subscribeModal.classList.contains('modal_active')) {
        subscribeModal.classList.remove('modal_active')
        setCookie('status', 'close')
    }
})

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value)
}

