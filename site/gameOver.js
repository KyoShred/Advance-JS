const endScreen = document.querySelectorAll('.endScreen') || { innerHTML: '' };
/*const gameOverr = document.querySelector('.gameOver');



function endgame(){
gameOverr.style.left = '50%';
gameOverr.style.right = '50%';
gameOverr.style.display = 'block';
}

function startGame() {
  gameOverr.style.display = 'none';
}

let gameO = false;

function egame(){
  gameO = true;
  endgame();
}

function restartGame(){
  gameO = false; 
  startGame();
}

const gameloop = setInterval(() =>{
  if (gameO){
    clearInterval(gameloop);
  }
},20);*/
 function addScore(value) {
  score += value;
  scoreDisplay.innerHTML = "Score: " + score;
}

let score;
const scoreDisplay = document.querySelector(".score")

const alien = [
 240

]

let vaisseau = 230; 

alien.forEach(lol => {
    if (alien > 219){
      console.log('gameOver');
      document.getElementById('score').innerHTML = 'GAME OVER';
      
    }
    else if (alien == vaisseau)
    {
        console.log('gameOver');
        let text = document.querySelector("h3");
        Text.innerHTML = "Game Over";  
        //alert("gameOverbtrd");
        }
      })


/*const gameOver = () => {
  endScreen.innerHTML = `<div class = 'gameOver'>Game over <br/>score
  </div>`;
  endScreen.style.visibility = 'visible';
  endScreen.style.opacité = '1';

}*/
