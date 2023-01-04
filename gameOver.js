const endScreen = document.querySelectorAll('.endScreen') || { innerHTML: '' };


let alien = [230];

let vaisseau = 230; 

alien.forEach(lol => console.log(lol));{
    if (alien > vaisseau){
        console.log('gameOver');
        document.write("gameOver");
    }
    else if (alien == vaisseau)
    {
        console.log('gameOver');
        document.write("gameOver");
        }
      }


const gameOver = () => {
  endScreen.innerHTML = `<div class = 'gameOver'>
  </div>`;
  endScreen.style.visibility = 'visible';
  endScreen.style.opacité = '1';

}