export class Auto {
  //attributi della classe
  auto:string;
  marca:string;
  modello:string;
  cavalli:number;
  porte:number;
  cilindrata:string;
  annoimmatricolazione:string;
  numerotelaio:number;
  //funzione che ti permette di costruire un oggetto di tipo Animale
  constructor (a:string,ma:string,mod:string,cav:number,po:number,cil:string,annoimm:string,numtel:number) {
  this.auto=a;
  this.marca=ma;
  this.modello=mod;
  this.cavalli=cav;
  this.porte=po;
  this.cilindrata=cil;
  this.annoimmatricolazione=annoimm;
  this.numerotelaio=numtel;
  }
  info() {
      return 'Auto: '+ this.auto +' Marca: ' + this.marca + ' Modello: ' + this.modello +
      'cavalli:'+ this.cavalli + 'porte:'+ this.porte +'cilindrata:'+ this.cilindrata +'anno immatricolazione:'+
      this.annoimmatricolazione+'numero telaio:'+ this.numerotelaio+'';
    }
}
