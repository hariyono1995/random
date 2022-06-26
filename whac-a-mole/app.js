const mole = document.querySelector('.mole'
);
const squares = document.querySelectorAll('.square');

const score = document.getElementById('score');
const timeLeft = document.getElementById('time-left');

let result = 0;
let hitPosition;
let currentTime = 60;
let timeId = null;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomPositionSquare = squares[Math.floor(Math.random() * squares.length)]

    randomPositionSquare.classList.add('mole')
    hitPosition = randomPositionSquare.id;

   
}  

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
    if(square.id == hitPosition) {
        result ++;
        score.textContent = hitPosition;
        hitPosition = null;
    }
})

})

function moveMole() {
    timeId = setInterval(randomSquare, 500);
}

function coundDown() {
    currentTime--
    timeLeft.textContent = currentTime;
    
    if(currentTime == 0) {
        clearInterval(timeIntervalId);
        clearInterval(timeId)
        alert(`GAME OVER, YOUR SCORE IS ${result}`)
    }
}

let timeIntervalId = setInterval(coundDown, 1000);

moveMole();
