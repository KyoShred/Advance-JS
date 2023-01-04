function crea_grid(){
  for (let i = 0; i < 240; i++){
    let incr = 0
      var T = document.createElement('div');
      T.classList.add('grid-cell');
      if (incr === 0) {
        T.classList.add('start');
        incr += 1;
      }
      if (incr === 19) {
        T.classList.add('end');
        incr = 0
      }
      else {
        incr += 1;
      }
      document.getElementById('grid-container').appendChild(T);
      if (T.classList.contains('end')) {
        var br = document.createElement('br');
        document.getElementById('grid-container').appendChild(br);
      }
  }
}

function aliens(){
  for (let i = 0; i < 53; i++){

  }
}