/*const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
  ]
*/


if (squares[currentShooterIndex].classlist.contains('invader','shooter')) {
    resultDisplay.innerHTML = 'game over'
    clearInterval(invadersId)

}

for (let i = 0; 1 < alienInvaders.length; i++) {
    if (alienInvaders[i] > squares.length){
        resultDisplay.innerHTML = 'game over'
        clearInterval(invadersId)
    }
}

invadersId = setInterval(moveInvaders, 200);




/*let playerDiv = document.getElementById("player");
let enemyDiv = document.getElementById("enemy");


let playerX = playerDiv
let playerY = playerDiv
let enemyX = enemyDiv
let enemyY = enemyDiv


function checkCollision() {


if (playerX == enemyX && playerY == enemyY){
    console.log("game over !");
    }
}

setInterval(checkCollision,200);


 
if (playerX === enemyX && playerY === enemyY) {}
  
if (playerX === enemyX && playerY === enemyY) {}
     
if (playerX === enemyX && playerY === enemyY) {}
    
if (playerX === enemyX && playerY === enemyY) {}*/