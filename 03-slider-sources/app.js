const upButton = document.querySelector('.up-button')

const downButton = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')

const mainSlide = document.querySelector('.main-slide')

const container = document.querySelector('.container')

const height = container.clientHeight

const slideCount = mainSlide.querySelectorAll('div').length

let activeSliedIndex = 0

sidebar.style.top = `-${(slideCount - 1) * 100}vh`

let changeSlied = (dir) => {
    if (dir === 'up') {
        activeSliedIndex++
        if (activeSliedIndex === slideCount) {
            activeSliedIndex = 0
        }
    } else if (dir === 'down') {
        activeSliedIndex--
        if (activeSliedIndex < 0) {
            activeSliedIndex = slideCount -1
        }
    }

mainSlide.style.transform = `translateY(
    -${activeSliedIndex * height}px)`

sidebar.style.transform = `translateY(
    ${activeSliedIndex * height}px)`

}


upButton.addEventListener('click', () => {
    changeSlied('up');
})

downButton.addEventListener('click', () => {
    changeSlied('down');

})
