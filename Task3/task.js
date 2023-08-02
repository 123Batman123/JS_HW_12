const form = document.querySelector('#signin__form')
const welcome = document.querySelector('.welcome')
const idUser = document.querySelector('#user_id')
const exit = document

function ifActive(userId) {
    idUser.textContent = userId
    welcome.classList.add('welcome_active')
    form.closest('#signin').classList.remove('signin_active')

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
                localStorage.setItem(`active`, response.user_id)
            } 
            else {
                alert('Неверный логин или пароль!')
                form.reset()
            }
        })
    })
}
