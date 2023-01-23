const openBtn = document.getElementById('open-btn')
const closeBtn = document.getElementById('close-btn')
const navbar = document.querySelector('.header .navbar')

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

window.onscroll = () => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('scrollPage')
    } else {
        document.querySelector('.header').classList.remove('scrollPage')
    }
}
