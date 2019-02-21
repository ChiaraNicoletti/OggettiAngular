export class Apparecchio {
  //attributi della classe
  marca:string;
  modello:string;
  annodicostruzione:number;
  numeroseriale:number;
  acquistatoil:number;
  //funzione che ti permette di costruire un oggetto di tipo Animale
  constructor (ma:string,mod:string,annocos:number,numser:number,acq:number) {
  this.marca=ma;
  this.modello=mod;
  this.annodicostruzione=annocos;
  this.numeroseriale=numser;
  this.acquistatoil=acq;
  }
  info() {
      return ' Marca: ' + this.marca + ' Modello: ' + this.modello +
      'Anno costruzione:'+ this.annodicostruzione + 'Numero seriale:'+ this.numeroseriale
      +'Acquistato il:'+ this.acquistatoil+'';
    }
}
