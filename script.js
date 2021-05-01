const screens = document.querySelectorAll('.screen')
const choose_insect_btns =document.querySelectorAll('.choose-insect-btn')
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let seconds = 0
let score = 0
let selected_insect = {}

// Move past the start screen when user clicks on start btn
start_btn.addEventListener('click', () => screens[0].classList.add('up'))

// Allow a user to select an insect
choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', ()=> {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')

        selected_insect = { src, alt }

        // move screen up to game area
        screens[1].classList.add('up')

        // Call create insect
        setTimeout(createInsect, 1000)
        //startGame()
        
    })
})

function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const { x, y } = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src = "${selected_insect.src}" alt = "${selected_insect.alt}"
                        style = "transform: rotate(${Math.random() * 360}deg)"/>`
    
    insect.addEventListener('click', catchInsect)                    
    game_container.appendChild(insect)
}

function catchInsect() {
    console.log(123)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight

    const x = Math.random() * (width -200) + 100
    const y = Math.random() * (height - 200) + 100

    return { x, y }
}