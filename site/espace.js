function crea_grid(){
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
      T.classList.add('vaisseau'); // Ajout de la classe Vaisseau à la 409è incrémentation
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

// de 5 a 17
// de 26 a 38
// de 41 a 53