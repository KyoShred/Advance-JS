/*class Espace {
    constructor(nb_lignes, nb_vais, pvs) {
      this.nb_lignes = nb_lignes;
      this.nb_vais = nb_vais;
      this.pvs = pvs;
    }
  
    crea_grid() {
      let table = [];
      for (let i = 0; i < this.nb_lignes; i++) {
        let table2 = []
        for (let j = 0; j < this.nb_vais; j++) {
          table2.push(this.pvs);
        }
        table.push(table2);
      }
      return table;
    }

    crea_ennemi() {
      if (this.table != undefined){
        let first_placement = Math.floor((this.nb_vais - 12) / 2); // utiliser Math.floor pour arrondir à l'entier inférieur
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 12; j++) {
            this.table[i][j + first_placement] = 10 // remplacer les valeurs de l'objet "table" directement          }
          }
        }
      }
    }
    
    aff_tab() {
      for (let i = 0; i < this.nb_lignes; i++) {
        document.write(this.crea_grid()[i] + "<br>"); // Mise à la ligne de toutes les lignes du tableau à l'affichage
      }
    }
  }
  
  let espace = new Espace(20, 14, 0); // Initialisation de la grille d'espace

espace.crea_ennemi();
espace.aff_tab();
*/