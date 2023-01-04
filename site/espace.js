var game = document.getElementsByClassName('grille');

class Espace {
  constructor(nb_lignes, nb_vais, pvs) {
    this.nb_lignes = nb_lignes;
    this.nb_vais = nb_vais;
    this.pvs = pvs;
    this.table = [];
    this.gauche;
    this.droite;
    this.game_over;
  }

  crea_grid() {
    for (let i = 0; i < 240; i++){
        var T = document.createElement('div');
        T.classList.add('grid-cell');
        document.getElementById('grid-container').appendChild(T);
    }
  }
}