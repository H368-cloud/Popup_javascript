const popup = document.querySelector('.popup')
const button = document.querySelector('button')
const closeIcon = document.querySelector('.close')


button.addEventListener('click', () => {
    popup.classList.add('open')
})
closeIcon.addEventListener('click', () => {
    popup.classList.remove('open')
})