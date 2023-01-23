const openBtn = document.getElementById('open-btn')
const closeBtn = document.getElementById('close-btn')
const navbar = document.querySelector('.header .navbar')

openBtn.addEventListener('click', () => {
    navbar.style.display = 'flex'
    openBtn.style.display = 'none'
    closeBtn.style.display = 'inline-block'
})

const closeMenu = () => {
    navbar.style.display = 'none'
    openBtn.style.display = 'inline-block'
    closeBtn.style.display = 'none'
}

closeBtn.addEventListener('click', closeMenu)

if(window.innerWidth < 1024) {
    document.querySelectorAll('.navbar li').forEach(navMenu => {
        navMenu.addEventListener('click', () => {
            closeMenu()
        })
    })
}

window.onscroll = () => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('scrollPage')
    } else {
        document.querySelector('.header').classList.remove('scrollPage')
    }
}
