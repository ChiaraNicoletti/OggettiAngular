export class Impiegati {
  //attributi della classe
  nome:string;
  cognome:string;
  datadinascita:string;
  domicilio:string;
  mansione:string;
  stipulacontratto:string;
  anzianita:string;
  stipendiolordomens:number;
  stipendiolordoann:number;

  //funzione che ti permette di costruire un oggetto di tipo Animale
  constructor (no:string,co:string,datnas:string,dom:string,mans:string,cont:string,anz:string,stmens:number,stann:number,) {
  this.nome=no;
  this.cognome=co;
  this.datadinascita=datnas;
  this.domicilio=dom;
  this.mansione=mans;
  this.stipulacontratto=cont;
  this.anzianita=anz;
  this.stipendiolordomens=stmens;
  this.stipendiolordoann=stann;

  }
  info() {
      return 'Nome: '+ this.nome +' Cognome: ' + this.cognome + ' data di nascita: ' + this.datadinascita +
      'domicilio:'+ this.domicilio + 'mansione:'+ this.mansione +'contratto:'+ this.stipulacontratto +'Anni di anzianità:'+
      this.anzianita+'Lordo mensile:'+ this.stipendiolordomens+'Lordo annuale:'+ this.stipendiolordoann+'';
    }
}
