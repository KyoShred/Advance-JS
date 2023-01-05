let cells = document.querySelectorAll('.grid .cell');
let playerPosition;

const grid = document.querySelector('.grid');

for (let i = 0; i < 240 ; i++){
    var squares = document.createElement('div')
    grid.appendChild(squares)
    squares.classList.add("cell")
}

document.addEventListener('DOMContentLoaded', ()=>{
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

// Initialize the hostile character's position
function initHostile() {
    hostilePosition = Math.floor(Math.random() * 20);
    cells[hostilePosition].classList.add('hostile');
}

// Move the hostile character down the grid
function moveHostile() {
  cells[hostilePosition].classList.remove('hostile');
  hostilePosition += 20;
  cells[hostilePosition].classList.add('hostile');
}

// Check if the hostile character has reached the bottom of the grid or if it has collided with the player
function checkCollision() {
  if (hostilePosition > 239 || hostilePosition === playerPosition) {
    // End the game
    clearInterval(hostileInterval);
  }
}

// Initialize the hostile character and start moving it down the grid
initHostile();
const hostileInterval = setInterval(function() {
  moveHostile();
  checkCollision();
}, 1000); // Move the hostile character every 1000 milliseconds

initHostile();
grid();