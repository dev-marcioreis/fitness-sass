const openBtn = document.getElementById('open-btn')
const closeBtn = document.getElementById('close-btn')
const navbar = document.querySelector('.navbar')

openBtn.addEventListener('click', () => {
    navbar.style.display = 'flex'
    openBtn.style.display = 'none'
    closeBtn.style.display = 'inline-block'
})

const closeMenu = () => {
    closeBtn.addEventListener('click', () => {
        navbar.style.display = 'none'
        openBtn.style.display = 'inline-block'
        closeBtn.style.display = 'none'
    })
}

closeMenu()

