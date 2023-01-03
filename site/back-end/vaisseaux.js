class Vaisseaux {
    constructor(nb_lignes, nb_vais, pvs) {
      this.nb_lignes = nb_lignes;
      this.nb_vais = nb_vais;
      this.pvs = pvs;
    }
  
    crea_grid() {
      let grid = [];
      for (let i = 0; i < this.nb_lignes - 1; i++) {
        for (let i = 0; i < this.nb_vais - 1; i++) {
          grid.push(this.pvs);
        }
      }
    }
  }
  
  let vaisseaux = new Vaisseaux(5, 5, 10);
  
  console.log(vaisseaux.crea_grid());