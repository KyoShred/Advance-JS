let game_over = false;
let direction = 'gauche';

var aliens = [25,26,27,28,29,30,31,32,33,34,35,36,37,
46,47,48,49,50,51,52,53,54,55,56,57,58,
67,68,69,70,71,72,73,74,75,76,77,78,79];

function crea_grid() {
  let incr = 0
  let incrEntite = 0
  for (let i = 0; i < 441; i++){
    var T = document.createElement('div');
    T.classList.add('grid-cell');
    if (incr === 0) {
      T.classList.add('start'); // Ajout de la classe Start à chaque début de ligne
    }
    if (incr === 20) {
      T.classList.add('end'); // Ajout de la classe End à chaque fin de ligne
    }
    if (incrEntite === 409) {
      T.classList.add('vaisseau'); // Ajout de la classe Vaisseau à la 409e incrémentation
    }
    if (incrEntite > 25 && incrEntite < 37) {
      T.classList.add('alien'); // Ajout de la classe Alien de la 25e à la 37e incrémentation
    }
    if (incrEntite > 46 && incrEntite < 58) {
      T.classList.add('alien'); // Ajout de la classe Alien de la 46e à la 58e incrémentation
    }
    if (incrEntite > 67 && incrEntite < 79) {
      T.classList.add('alien'); // Ajout de la classe Alien de la 67e à la 79e incrémentation
    }
    document.getElementById('grid-container').appendChild(T);
    incr += 1;
    incrEntite +=1
    if (incr == 21) {
      var br = document.createElement('br');
      document.getElementById('grid-container').appendChild(br);
      incr = 0
    }
  }
  var button = document.querySelector('button');
  button.parentNode.removeChild(button); // Permettent de retirer le bouton une fois cliqué
}

// Mouvement des aliens -----------------------------------------------------------------------------------------------------------------------------

function alien_movement() {
  const aliens = document.querySelectorAll(".alien"); // Récupérer toutes les cellules avec la classe "alien"
  aliens.forEach(aliens => {
    if (aliens.classList.contains("start") & !aliens.classList.contains("end")) { // Si la cellule "alien" possède la classe "start"
      direction = 'droite';
    }
    else if (aliens.classList.contains("end") & !aliens.classList.contains("start")) { // Si la cellule "alien" possède la classe "start"
      direction = 'gauche';
    }
    if (direction == 'gauche') {
      aliens.previousElementSibling.classList.add("alien");
      aliens.classList.remove("alien");
    }
    else if (direction == 'droite') {
      aliens.nextElementSibling.classList.add("alien");
      aliens.classList.remove("alien");
    }
  });
}

 // Mouvement du vaisseau ---------------------------------------------------------------------------------------------------------------------------

document.addEventListener('keydown', move);
let compteur = 0;

function move(e) {
  let vaisseau = document.querySelector(".vaisseau");
  let vaisseau_backup;
  if (e.key === "ArrowRight") {
    if (vaisseau.classList.contains("end")) { // Si la cellule "alien" possède la classe "start"
      return;
    }
    else {
      vaisseau.nextElementSibling.classList.add("vaisseau");
      vaisseau.classList.remove("vaisseau");
      positionV++;
    }
  }

  if (e.key === "ArrowLeft") {
    if (vaisseau.classList.contains("start")) { // Si la cellule "alien" possède la classe "start"
      return;
    }
    else {
      vaisseau.previousElementSibling.classList.add("vaisseau");
      vaisseau.classList.remove("vaisseau");
      positionV--;
    }
  }

  if (e.key === "ArrowUp") {
    if (compteur === 2) { // Si la cellule "alien" possède la classe "start"
      return;
    }
    else {
      vaisseau_backup = vaisseau.previousElementSibling;
      vaisseau_backup = vaisseau_backup.nextElementSibling;
      for (let i = 0; i < 22 && vaisseau.previousElementSibling !== null; i++) {
        vaisseau = vaisseau.previousElementSibling;
      }
      vaisseau.classList.add("vaisseau");
      vaisseau_backup.classList.remove("vaisseau");
      compteur += 1;
      positionV-=21;
    } 
  }

  if (e.key === "ArrowDown") {
    if (compteur === 0) { // Si la cellule "alien" possède la classe "start"
      return;
    }
    else {
      vaisseau_backup = vaisseau.previousElementSibling;
      vaisseau_backup = vaisseau_backup.nextElementSibling;
      for (let i = 0; i < 22 && vaisseau.previousElementSibling !== null; i++) {
        vaisseau = vaisseau.nextElementSibling;
      }
      vaisseau.classList.add("vaisseau");
      vaisseau_backup.classList.remove("vaisseau");
      compteur -= 1;
      positionV+=20;
    }
  }
}
// tir du vaisseau---------------------------------------------------------------

let positionV = 409;
let bulletList = [];
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
  console.log(e.key);
  if (e.key === " " && !bulletList.includes(positionV-20)) {
    bulletList.push(positionV-20);
    const divList = document.querySelectorAll("div");

    
    /*for (let i = 0; i < 441; i++){
        if (bulletList.includes(i)){
          divList[i].classList.add("bullet")
        }
      }*/
      console.log(bulletList);
      let i = 0;
      divList.forEach((div) => {
        if (div.classList.contains("bullet")){
            div.classList.remove("bullet");
        }
        
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
  /*divList.forEach((div) => {
    if (div.classList.contains("bullet")){
      div.classList.remove("bullet");
    }
    
    if (bulletList.includes(i)){
      setInterval(mooveBullet,1000);
      positionV -=21;
      div.classList.add("bullet");
    }*/
    for(i=0;i<divList.length;i++) 
    {
      //console.log(divList.length);
      
      if (divList[i].classList.contains("bullet")){
          console.log("moove");
          divList[i].classList.remove("bullet");
          nouvellePosition=i-21; 
          divList[nouvellePosition].classList.add("bullet");
          }
    };
    /*let positionB = 
bulletList.forEach((positionB) => {
  console.log(positionB);
  positionB -= 20;
  console.log(positionB);
});*/

}

const intervalBullet = setInterval(mooveBullet, 500);
const intervalId = setInterval(alien_movement, 650);
// clearInterval(intervalId); // stop the interval

function addScore(value) {
  score += value;
  scoreDisplay.innerHTML = "Score: " + score;
}

let score;
const scoreDisplay = document.querySelector(".score")


let vaisseau = 230; 

aliens.forEach(lol => {
    if (lol > 219){
      console.log('gameOver');
      document.getElementById('score').innerHTML = 'GAME OVER';
      location.reload();
      
    }
    else if (lol == vaisseau)
    {
        console.log('gameOver');
        let text = document.querySelector("h3");
        Text.innerHTML = "Game Over";  
        location.reload();
        }
      })
      
      
      /*const button = document.getElementById('restart-button');
      button.addEventListener('click', function() {
        if (confirm('Voulez-vous vraiment recommencer la partie ?')) {
          location.reload();
        }
      });
*/
function playSound() {
  var audio = new Audio("ressources/surprise.mp3");
  audio.play();
}
      
     