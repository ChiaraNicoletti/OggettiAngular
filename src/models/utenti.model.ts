export class Utente {
  //attributi della classe
  nome:string;
  cognome:string;
  residenza:string;
  domicilio:string;
  telefono:number;
  contratto:string;
  stipulatonel:string;
  ultimabolletta:string;
  //funzione che ti permette di costruire un oggetto di tipo Animale
  constructor (no:string,co:string,res:string,dom:string,tel:number,cont:string,stip:string,boll:string) {
  this.nome=no;
  this.cognome=co;
  this.residenza=res;
  this.domicilio=dom;
  this.telefono=tel;
  this.contratto=cont;
  this.stipulatonel=stip;
  this.ultimabolletta=boll;
  }
  info() {
      return 'Nome: '+ this.nome +' Cognome: ' + this.cognome + ' residenza: ' + this.residenza +
      'domicilio:'+ this.domicilio + 'telefono:'+ this.telefono +'contratto:'+ this.contratto +'Stipulato nel:'+
      this.stipulatonel+'Ultima Bolletta:'+ this.ultimabolletta+'';
    }
}
