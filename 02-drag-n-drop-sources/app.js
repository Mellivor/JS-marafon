const item = document.querySelector('.item')
const bugaga = document.querySelector('.bugaga')
const placeholders = document.querySelectorAll('.placeholder')

let dragstart = (e) => {
    e.target.classList.add('hold')
    setTimeout(() => {e.target.classList.add('hide')
    }, 0);

}

let dragend = (e) => {
    e.target.classList.remove('hold')
    e.target.classList.remove('hide')

}

let dragover = (e) => {
    e.preventDefault()

}

let dragenter = (e) => {
    e.target.classList.add('hovered')
}

let dragleave = (e) => {
    e.target.classList.remove('hovered')
}

let drop = (e) => {
    e.target.classList.remove('hovered')
    if (item.classList != 'item') {
       e.target.append(item)
    }
    else if (bugaga.classList != 'bugaga') {
        e.target.append(bugaga)
    }
}

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', drop)

}

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)
bugaga.addEventListener('dragstart', dragstart)
bugaga.addEventListener('dragend', dragend)
