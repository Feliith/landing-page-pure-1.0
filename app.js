
const Burger = () => {
    const navBurger = document.querySelector('.nav-burger')
    const navLinks = document.querySelector('.nav-links')
    const navLink = document.querySelectorAll('.nav-link')
    const burgerLines = document.querySelectorAll('.burger-line')

    navBurger.addEventListener("click", () => {
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

    })
}
Burger()