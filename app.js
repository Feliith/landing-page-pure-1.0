
const Burger = () => {
    const navBurger = document.querySelector('.nav-burger')
    const navLinks = document.querySelector('.nav-links')
    const navLink = document.querySelectorAll('.nav-link')
    const burgerLines = document.querySelectorAll('.burger-line')

    navBurger.onclick = () => {
        navLinks.classList.toggle('on')
        const navLinksOn = document.querySelector('.nav-links.on')

        if (navLinksOn) {
            for (let c = 0 ; c < navLink.length ; c++) {
                navLink[c].style.animation = `navLinkFade .5s forwards ${(c + 1.5) / 7}s`
            }
        } else {
            for (let c = 0 ; c < navLink.length ; c++) {
                navLink[c].style.animation = ''
            }
    }
        
        burgerLines[0].classList.toggle('on')
        burgerLines[1].classList.toggle('on')
        burgerLines[2].classList.toggle('on')

    }
}
Burger()

const machineAnimation = () => {

    const machineOn = document.querySelector('#machine-on')

    setTimeout(() => {
        machineOn.style.opacity = '1'
        setTimeout(() => {
            machineOn.style.opacity = ''
            machineAnimation()
        }, 3000)
    }, 3000)

}
machineAnimation()

const navScroll = () => {
    const nav = document.querySelector('.nav')
    const navLine = document.querySelector('.nav-line')

    window.onscroll = onScroll

    function onScroll() {
        if (window.scrollY < 200) {
            nav.classList.remove('scroll')
            navLine.classList.remove('scroll')
            nav.style.animation = ''
        } else {
            nav.classList.add('scroll')
            navLine.classList.add('scroll')
            nav.style.animation = 'navMove .5s'
        }
    }
}
navScroll()