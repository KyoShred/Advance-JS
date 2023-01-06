
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
let compteur = 0;
let positionV = 229;

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
        positionV++;
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
        positionV--;
    }
}
function moveUp() {
    if (compteur < 2) {
        cells[playerPosition].classList.remove('player');
        playerPosition -= 20; 
        cells[playerPosition].classList.add('player');
        compteur += 1;
        positionV+=21;
    }else{
        return;
    }
}
function moveDown() {
    if (compteur > 0) {
        cells[playerPosition].classList.remove('player');
        playerPosition += 20; 
        cells[playerPosition].classList.add('player');
        compteur -= 1;
        positionV+=20;
    }else{
        return;
    }
}

// tir du playerPosition---------------------------------------------------------------

let bulletList = [0];
document.addEventListener('keydown', bullet_shot);

if (compteur === 0){
  positionV +=1
}
if (compteur === 1){
  positionV +=1
}
if (compteur === 2){
  positionV -=1
}

function bullet_shot(e) {
    if (e.key === " " && !bulletList.includes(positionV-20)) {
        bulletList.shift();
        bulletList.push(positionV-20);
        const divList = document.querySelectorAll("div");
        console.log(bulletList);
        let i = 0;
        divList.forEach((div) => {
            if (bulletList.includes(i)){
                div.classList.add("bullet");
            }
        i++;
        });
    }
}

function mooveBullet() {
  
  const divList = document.querySelectorAll("div");
  const bullList = document.querySelectorAll("bull");
  
    for(i=0;i<divList.length;i++) 
    {
      
      if (divList[i].classList.contains("bullet")){
          console.log("moove");
          divList[i].classList.remove("bullet");
          nouvellePosition=i-20; 
          divList[nouvellePosition].classList.add("bullet");
      }
    };

}
const intervalBullet = setInterval(mooveBullet, 40);


//score and game over
function addScore(value) {
    score += value;
    scoreDisplay.innerHTML = "Score: " + score;
  }
  
  let score;
  const scoreDisplay = document.querySelector(".score")
  alien.forEach(lol => {
      if (lol > 219){
        console.log('gameOver');
        document.getElementById('score').innerHTML = 'GAME OVER';
        //location.reload();
        
      }
      else if (lol == playerPosition)
      {
          console.log('gameOver');
          let text = document.querySelector("h3");
          Text.innerHTML = "Game Over";  
          //location.reload();
          }
        })
        
        
        const button = document.getElementById('restart-button');
        button.addEventListener('click', function() {
          if (confirm('Voulez-vous vraiment recommencer la partie ?')) {
            location.reload();
          }
        });
  
  function playSound() {
    var audio = new Audio("site/ressources/surprise.mp3");
    audio.play();
  }