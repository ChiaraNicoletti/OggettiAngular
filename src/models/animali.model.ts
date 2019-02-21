export class Animale {
  //attributi della classe
  animale:string;
  numeroZampe:number;
  habitat:string;
  tipoAlimentazione:string;
  vitaMedia:string;
  //funzione che ti permette di costruire un oggetto di tipo Animale
  constructor (an:string,nzam:number,h:string,tal:string,vm:string) {
  this.animale=an;
  this.numeroZampe=nzam;
  this.habitat=h;
  this.tipoAlimentazione=tal;
  this.vitaMedia=vm;
  }
  info() {
      return 'Tipo animale:' + this.animale + 'le zampe sono: ' + this.numeroZampe + ' vive: ' + this.habitat +
      'si nutre:'+ this.tipoAlimentazione + 'vive in media:'+ this.vitaMedia;
    }
}
