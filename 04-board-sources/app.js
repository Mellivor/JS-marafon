const board = document.querySelector('#board')

const charList ='DmitroisthebestprograisteverX'

const colors = ['rgb(199, 22, 140)','rgb(11, 161, 161)','rgb(184, 65, 65)','rgb(77, 209, 37)','rgb(219, 155, 16)','rgb(110, 0, 0)','rgb(22, 25, 199)']

let randomColour = () => {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

let randomChar = () => {
    const index = Math.floor(Math.random() * charList.length)
    return charList[index]

}

const squeresNumb = 500

let setColour = (e) => {
    const color = randomColour()
    e.style.backgroundColor = `${color}`
    e.style.color = `${randomColour()}`
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

let removeColor = (e) => {
    e.style.backgroundColor = '#1d1d1d'
    e.style.color = '#1d1d1d'
    e.style.boxShadow = '0 0 2px #000'
}

for (let i = 0; i < squeresNumb; i++) {
    const square = document.createElement('div')
    square.innerHTML = `<span>${randomChar()}</span>`//which chance to get correct string?
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        setColour(square)
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    board.append(square)
}
