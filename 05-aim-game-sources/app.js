const startButton = document.querySelector('#start')

const screens = document.querySelectorAll('.screen')

const timeList = document.querySelector('#time-list')

const timeL = document.querySelector('#time')

const board = document.querySelector('.board')

const colors = ['rgb(199, 22, 140)','rgb(11, 161, 161)','rgb(184, 65, 65)','rgb(77, 209, 37)','rgb(219, 155, 16)','rgb(110, 0, 0)','rgb(22, 25, 199)']


let time = 0
let score = 0

let getRandomNumber = (min, max) => {
  return Math.round(Math.random()*(max - min) + min)
}

let randomColour = () => {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

startButton.addEventListener('click', (e) => {
    e.preventDefault()
    screens[0].classList.add('up')
})

let setTime = (v) => {
    timeL.innerHTML =`00:${v}`
}

let creatrRandomCircle = () => {
    const size = getRandomNumber(5, 40)
    const circle = document.createElement('div')
    const {width , height} = board.getBoundingClientRect()
    const x = getRandomNumber(size, width -size)
    const y = getRandomNumber(size, width -size)
    circle.classList.add('circle')
    circle.style.background = `linear-gradient(90deg, ${randomColour()} 0%, ${randomColour()} 47%, ${randomColour()} 100%)`
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    board.append(circle)
}

let startGame = () => {
    creatrRandomCircle()
    setInterval(() => {
        if (time === 0) {
            finishGame()
        } else {
            let current = --time
            if (current < 10) {
                current = `0${current}`
            }
            setTime(current)
        }
    }, 1000);
    setTime(time)
}

let finishGame = () => {
    timeL.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Your score: <span class = 'primary'>${score}</span></h1>`
}

timeList.addEventListener('click', (e) => {
    if (e.target.classList.contains('time-btn')) {
        console.log('ye')
        time = parseInt(e.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }

})

board.addEventListener('click', (e) => {
    if (e.target.classList.contains('circle')) {
        score++
        e.target.remove()
        creatrRandomCircle()
    }
})
