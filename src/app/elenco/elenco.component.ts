import { Component } from '@angular/core';
import { Animale } from '../../models/animali.model';
import { Utente } from '../../models/utenti.model';
import { Auto } from '../../models/auto.model';
import { Apparecchio } from '../../models/apparecchio.model';
import { Impiegati } from '../../models/impiegati.model';
import { Aziende } from '../../models/aziende.model';
import { Giocatori } from '../../models/giocatori.model';
import { Squadre } from '../../models/squadre.model';



@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.scss']
})
export class ElencoComponent{
  lista: Array<Animale>=
  [new Animale("cane",4,"domestico","croccantini","20 anni"),
   new Animale ("gatto",4,"domestico","croccantini","20 anni"),
 new Animale ("tartaruga",4,"domestico","verdura","100 anni")];

 Utente: Array<Utente>=[
  new Utente("Mario","Rossi","via marconi","roma",9999,"mercato libero","anno 2019","anno 2019"),
  new Utente ("Alfredo","Alferi","via marconi","roma",5555,"mercato libero","anno 2019","anno 2019")];

  Auto: Array<Auto>=[
   new Auto("Fiat","Fiat 500","pop",12,2,"1200","anno 2016",222),
   new Auto ("Mito","Alfa mito","alfa",16,3,"1600","anno 2013",333)];

   Apparecchio: Array<Apparecchio>=[
    new Apparecchio ("Samsung","Samsung Edge",2018,22111,271219),
    new Apparecchio ("Lg","Lg hhs",2017,88213,22218)];

    Impiegati: Array<Impiegati>=[
     new Impiegati ("Pluto","Plutonis","19900522","Roma","Impiegato","2016","3 anni",12,15),
     new Impiegati ("Paperino","Paperinis","19880522","Roma","Segretario","2015","5 anni",15,2),
     new Impiegati ("Franca","Franconi","19551222","Roma","Quadro","1975","20 anni",2,3)];

     Aziende: Array<Aziende>=[
      new Aziende ("Prisma","Milano","Roma","2006", this.Impiegati),
      new Aziende ("Softlab","Roma","Milano","2008", this.Impiegati)];

      Giocatori: Array<Giocatori>=[
       new Giocatori ("Niccolò","Zaniolo","Centrocampista","Roma"),
       new Giocatori ("Lorenzo","Insigne","Attaccante","Napoli")];

       Squadre: Array<Squadre>=[
        new Squadre ("Roma ","Roma","Roma","1975", this.Giocatori),
        new Squadre ("Napoli","Napoli","Napoli","1966", this.Giocatori)];

}
