function crea_grid(){
  for (let i = 0; i < 240; i++){
      var T = document.createElement('div');
      T.classList.add('grid-cell');
      document.getElementById('grid-container').appendChild(T);
      if ((i + 1) % 10 === 0) {
        var br = document.createElement('br');
        br.classList.add('no-margin');  // add class to remove margin
        document.getElementById('grid-container').appendChild(br);
      }
  }
}

function aliens(){
  for (let i = 0; i < 53; i++){
    
  }
}