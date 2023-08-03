const form = document.querySelector('#signin__form')
const welcome = document.querySelector('.welcome')
const idUser = document.querySelector('#user_id')
const exit = document.querySelector('.container_button')

function ifActive(userId) {
    idUser.textContent = userId
    welcome.classList.add('welcome_active')
    form.closest('#signin').classList.remove('signin_active')
    exit.classList.add('container_button_active')
}

if (localStorage.getItem('active')) {
    ifActive(localStorage.getItem('active'))
} 
else {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let sent = new FormData(form)
        let xhr = new XMLHttpRequest()
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
        xhr.responseType = 'json'
        xhr.send(sent)
        xhr.addEventListener('load', () => {
            let response = xhr.response
            if (response.success) {
                ifActive(response.user_id)
                localStorage.setItem('active', response.user_id)
            } 
            else {
                alert('Неверный логин или пароль!')
                form.reset()
            }
        })
    })
}

exit.addEventListener('click', () => {
    localStorage.removeItem('active')
    welcome.classList.remove('welcome_active')
    form.closest('#signin').classList.add('signin_active')
    exit.classList.remove('container_button_active')
})