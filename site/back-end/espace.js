class Espace {
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

    aff_tab(){
      for (let i = 0; i < this.nb_lignes; i++){
        document.write(this.crea_grid()[i] + "<br>");
      }
    }
  }
  
  let espace = new Espace(20, 14, 0);

espace.aff_tab();