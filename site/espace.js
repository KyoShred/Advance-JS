function crea_grid(){
  let incr = 0
  for (let i = 0; i < 240; i++){
    var T = document.createElement('div');
    T.classList.add('grid-cell');
    if (incr === 0) {
      T.classList.add('start');
    }
    if (incr === 19) {
      T.classList.add('end');
    }
    document.getElementById('grid-container').appendChild(T);
    incr += 1;
    if (incr == 20) {
      var br = document.createElement('br');
      document.getElementById('grid-container').appendChild(br);
      incr = 0
    }
  }
}

function aliens(){
  for (let i = 0; i < 53; i++){

  }
}