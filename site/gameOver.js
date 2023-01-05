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

let aliens = [25,26,27,28,29,30,31,32,33,34,35,36,37,
  46,47,48,49,50,51,52,53,54,55,56,57,58,
  67,68,69,70,71,72,73,74,75,76,77,78,79];

let vaisseau = 230; 

alien.forEach(lol => {
    if (aliens > 219){
      console.log('gameOver');
      document.getElementById('score').innerHTML = 'GAME OVER';
      
    }
    else if (aliens == vaisseau)
    {
        console.log('gameOver');
        let text = document.querySelector("h3");
        Text.innerHTML = "Game Over";  
        }
      })


/*const gameOver = () => {
  endScreen.innerHTML = `<div class = 'gameOver'>Game over <br/>score
  </div>`;
  endScreen.style.visibility = 'visible';
  endScreen.style.opacité = '1';

}*/
