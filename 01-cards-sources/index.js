const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        cleareActiveClases()
        slide.classList.add ('active')
    })
}

let cleareActiveClases = () => {
     slides.forEach((slide) =>{slide.classList.remove ('active')})
}
