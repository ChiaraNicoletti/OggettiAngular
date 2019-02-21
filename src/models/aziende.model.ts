import {Impiegati} from './impiegati.model'

export class Aziende{
  //attributi della classe
  nome:string;
  sedelegale:string;
  sedeoperativa:string;
  annodifondazione:string;
  impiegati:Array<Impiegati>;
  //funzione che ti permette di costruire un oggetto di tipo Animale
  constructor (no:string,leg:string,op:string,fon:string,li:Array<Impiegati>,) {
  this.nome=no;
  this.sedelegale=leg;
  this.sedeoperativa=op;
  this.annodifondazione=fon;
  this.impiegati=li;
  }
  infoAzienda() {
    var ris='';
    for (var i=0; i<this.impiegati.length; i++){
      ris= ris+this.impiegati[i].nome+'';
    }
      return 'Nome Azienda : '+ this.nome +' Sede legale: ' + this.sedelegale + ' sede operativa: ' + this.sedeoperativa +
      'anno di fondazione:'+ this.annodifondazione+'Tutti gli impegati'+ ris;
    }
}
