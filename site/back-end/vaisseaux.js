let cells;
let playerPosition;

const grid = document.querySelector('.grid');

for (let i = 0; i < 240 ; i++){
    var squares = document.createElement('div')
    grid.appendChild(squares)
    squares.classList.add("cell")
}

document.addEventListener('DOMContentLoaded', ()=>{
    cells = document.querySelectorAll('.grid .cell')
    playerPosition = 229;
    cells[playerPosition].classList.add('player');
});

document.addEventListener('keydown', function keyDownListener(e) {
    if (e.key === 'ArrowRight') {
        moveRight();
    } else if (e.key === 'ArrowLeft') {
        moveLeft();
    }
});

function touchingRightEdge() {
    return playerPosition % 20 === 19;
}

function moveRight() {
    if (!touchingRightEdge()) {
        cells[playerPosition].classList.remove('player');
        playerPosition += 1; 
        cells[playerPosition].classList.add('player');
    }
}

function touchingLeftEdge() {
    return playerPosition % 20 === 0;
}

function moveLeft() {
    if (!touchingLeftEdge()) {
        cells[playerPosition].classList.remove('player');
        playerPosition -= 1; 
        cells[playerPosition].classList.add('player');
    }
}
