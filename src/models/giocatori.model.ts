export class Giocatori {
  //attributi della classe
  nome:string;
  cognome:string;
  ruolo:string;
  squadra:string;


  //funzione che ti permette di costruire un oggetto di tipo Animale
  constructor (no:string,co:string,datnas:string,ru:string,) {
  this.nome=no;
  this.cognome=co;
  this.ruolo=datnas;
  this.squadra=ru;

  }
  infoGiocatori() {
      return 'Nome: '+ this.nome +' Cognome: ' + this.cognome + ' Ruolo: ' + this.ruolo +
      'Squadra:'+ this.squadra +'';
    }
}
