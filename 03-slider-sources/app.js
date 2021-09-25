const upButton = document.querySelector('.up-button')

const downButton = document.querySelector('.down-button')

const first = document.querySelector('.first')

const second = document.querySelector('.second')

const third = document.querySelector('.third')


const container = document.querySelector('.container')

const height = container.clientHeight

const slideCount = first.querySelectorAll('div').length

let activeSliedIndex = 0


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

first.style.transform = `translateY(
    -${activeSliedIndex * height}px)`

second.style.transform = `translateY(
        ${activeSliedIndex * height}px)`

third.style.transform = `translateY(
            -${activeSliedIndex * height}px)`
    }


upButton.addEventListener('click', () => {
    changeSlied('up');
})

downButton.addEventListener('click', () => {
    changeSlied('down');

})
