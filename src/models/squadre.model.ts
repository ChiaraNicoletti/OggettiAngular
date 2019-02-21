import {Giocatori} from './giocatori.model'

export class Squadre{
  //attributi della classe
  nome:string;
  sedelegale:string;
  sedeoperativa:string;
  annodifondazione:string;
  giocatori:Array<Giocatori>;
  //funzione che ti permette di costruire un oggetto di tipo Animale
  constructor (no:string,leg:string,op:string,fon:string,li:Array<Giocatori>,) {
  this.nome=no;
  this.sedelegale=leg;
  this.sedeoperativa=op;
  this.annodifondazione=fon;
  this.giocatori=li;
  }
  info() {
    var ris='';
    for (var i=0; i<this.giocatori.length; i++){
      ris= ris+this.giocatori[i].cognome+'';
    }
      return 'Nome Azienda : '+ this.nome +' Sede legale: ' + this.sedelegale + ' sede operativa: ' + this.sedeoperativa +
      'anno di fondazione:'+ this.annodifondazione+'Giocatori'+ ris;
    }
}
