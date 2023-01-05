
var ok = false;
function crea_grid() {
  const grid = document.querySelector('.grid-container');
  let incr = 0;
  let incrEntite = 0;
  let playerPosition;
  for (let i = 0; i < 441; i++) {
    var T = document.createElement('div');
    grid.appendChild(T);
    T.classList.add('cell');
    if (incr === 0) {
      T.classList.add('start');
    }
    if (incr === 20) {
      T.classList.add('end');
    }
    if (incrEntite === 409){;
      cells = document.querySelectorAll('.grid-container .cell')
      playerPosition = 409;
      T.classList.add('player');
    }
    if (incrEntite > 25 && incrEntite < 37) {
      T.classList.add('alien');
    }
    if (incrEntite > 46 && incrEntite < 58) {
      T.classList.add('alien');
    }
    if (incrEntite > 67 && incrEntite < 79) {
      T.classList.add('alien');
    }
    incr += 1;
    incrEntite += 1;
    if (incr === 21) {
      var br = document.createElement('br');
      document.querySelector('.grid-container').appendChild(br);
      incr = 0;
    }
  }
  var button = document.querySelector('button');
  button.parentNode.removeChild(button);
  
}
