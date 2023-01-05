

  
document.addEventListener('keydown', move);// {
  //   console.log('test')
  //   if (e.key === 'ArrowRight') {
  //     console.log('right')
  //     moveRight();
  //   } else if (e.key === 'ArrowLeft') {
  //     moveLeft();
  //   }
  // });
function touchingRightEdge() {
  return playerPosition % 20 === 19;
}
function touchingLeftEdge() {
  return playerPosition % 20 === 0;
}
function move(e){
  if(e.keyCode = 39){
    console.log("truc")
    if (!touchingRightEdge()) {
      cells[playerPosition].classList.remove('player');
      playerPosition += 1;
      cells[playerPosition].classList.add('player');
    }
  }
  else if (e.keyCode = 37){
    if (!touchingLeftEdge()) {
      cells[playerPosition].classList.remove('player');
      playerPosition -= 1;
      cells[playerPosition].classList.add('player');
    }
  }
}
  
