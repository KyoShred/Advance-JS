import { cells, playerPosition } from './espace.js';


  
  document.addEventListener('keydown', function keyDownListener(e) {
    console.log('test')
    if (e.key === 'ArrowRight') {
      console.log('right')
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
  