
//Grid
const grid = document.querySelector('.grid');
let incr = 0;
for (let i = 0; i < 240 ; i++){
    var squares = document.createElement('div');
    if (incr == 0){
        squares.classList.add("left");
    }if (incr == 19){
        squares.classList.add("right");
    }grid.appendChild(squares);
    incr ++;
    if (incr == 20){
        incr = 0;
    }
    squares.classList.add("cell");
}


let cells = document.querySelectorAll('.grid div');
// Aliens
let alien = [1,2,3,4,5,6,7,8,9,10,11,12,21,22,23,24,25,26,27,28,29,30,31,32,41,42,43,44,45,46,47,48,49,50,51,52];
alien.forEach(el => {
    cells[el].classList.add("alien");
});

//movement aliens
let alien_direction = 1;
let alien_left = true;
let alien_right = true;
const hostile = document.querySelectorAll('.alien')

function move_alien(){
    alien.forEach(el => {
        if (cells[el].classList.contains("right")){
            if(alien_left == true){
            alien_direction = 20;
            alien_left =  false;
            }else{
            alien_direction = -1;
            alien_left = true;
            }
        }
        if (cells[el].classList.contains("left")){
            if(alien_right == true){
            alien_direction = 20;
            alien_right =  false;
            }else{
            alien_direction = 1;
            alien_right = true;
            }
        }
        
    });

    //alien remove
    alien.forEach(el => {
        cells[el].classList.remove("alien");
    });
    //alien movement
    for(let i = 0; i < alien.length; i++){
        alien[i]+= alien_direction;
    }
    
    //alien add
    alien.forEach(el => {
        cells[el].classList.add("alien");
    });
}

setInterval(move_alien, 650);


//move player
let playerPosition;
let limitV = 0;

document.addEventListener('DOMContentLoaded', ()=>{
    playerPosition = 229;
    cells[playerPosition].classList.add('player');
});

document.addEventListener('keydown', function keyDownListener(e) {
    if (e.key === 'ArrowRight') {
        moveRight();
    } else if (e.key === 'ArrowLeft') {
        moveLeft();
    }else if (e.key === 'ArrowUp'){
        moveUp();
    }else if (e.key === 'ArrowDown'){
        moveDown();
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

function moveUp() {
    if (limitV < 2) {
        cells[playerPosition].classList.remove('player');
        playerPosition -= 20; 
        cells[playerPosition].classList.add('player');
        limitV += 1;
    }else{
        return;
    }
}
function moveDown() {
    if (limitV > 0) {
        cells[playerPosition].classList.remove('player');
        playerPosition += 20; 
        cells[playerPosition].classList.add('player');
        limitV -= 1;
    }else{
        return;
    }
}
// // Initialize the hostile character's position
// function initHostile() {
//     hostilePosition = Math.floor(Math.random() * 20);
//     cells[hostilePosition].classList.add('hostile');
// }

// // Move the hostile character down the grid
// function moveHostile() {
//   cells[hostilePosition].classList.remove('hostile');
//   hostilePosition += 20;
//   cells[hostilePosition].classList.add('hostile');
// }

// // Check if the hostile character has reached the bottom of the grid or if it has collided with the player
// function checkCollision() {
//   if (hostilePosition > 239 || hostilePosition === playerPosition) {
//     // End the game
//     clearInterval(hostileInterval);
//   }
// }

// // Initialize the hostile character and start moving it down the grid
// initHostile();
// const hostileInterval = setInterval(function() {
//   moveHostile();
//   checkCollision();
// }, 1000); // Move the hostile character every 1000 milliseconds

// initHostile();
// grid();