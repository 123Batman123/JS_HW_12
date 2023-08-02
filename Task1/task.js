const textArea = document.querySelector('#editor')
const clear = document.querySelector('.clear')
let getText = localStorage.getItem('text')

if (getText) {
    textArea.value = getText
}

textArea.addEventListener('input', (e) => {
    let text = textArea.value
    localStorage.setItem('text', text)
})

clear.addEventListener('click', () => {
    textArea.value = ''
    localStorage.setItem('text', '')
})