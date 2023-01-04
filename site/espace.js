function crea_grid(){
  let incr = 0
  let incrVaiss = 0
  for (let i = 0; i < 441; i++){
    var T = document.createElement('div');
    T.classList.add('grid-cell');
    if (incr === 0) {
      T.classList.add('start'); // Ajout de la classe Start à chaque début de ligne
    }
    if (incr === 20) {
      T.classList.add('end'); // Ajout de la classe End à chaque fin de ligne
    }
    if (incrVaiss === 409) {
      T.classList.add('vaisseau'); // Ajout de la classe Vaisseau à la 409è incrémentation
    }
    document.getElementById('grid-container').appendChild(T);
    incr += 1;
    incrVaiss +=1
    if (incr == 21) {
      var br = document.createElement('br');
      document.getElementById('grid-container').appendChild(br);
      incr = 0
    }
  }
  var button = document.querySelector('button');
  button.parentNode.removeChild(button); // Permettent de retirer le bouton une fois cliqué
}

function aliens(){
  for (let i = 0; i < 53; i++){

  }
}