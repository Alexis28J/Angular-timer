//Spiegazione Copilot (03.02.2026) - https://copilot.microsoft.com/shares/r5f8zPCHaNNzvU2RA2Nm3

import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClockService {

  time: WritableSignal<Date> = signal(new Date());


  secondsToMidnight = computed(() => {

    const todayAtMidnight = new Date();  //new Date() in JavaScript viene utilizzato per creare un nuovo oggetto che memorizza data e ora correnti, o una specifica data e ora.
    todayAtMidnight.setHours(24, 0, 0, 0);  //Il metodo setHours() in JavaScript viene utilizzato per impostare l'ora di un oggetto Date. In questo caso, viene impostata a mezzanotte del giorno successivo (24:00:00.000).
    const todayAtMidnightInSeconds = Math.round(todayAtMidnight.getTime() / 1000);
    //Il metodo getTime() in JavaScript serve a ottenere il valore numerico della data specificata, rappresentato dal numero di millisecondi trascorsi dall'epoca Unix (1 gennaio 1970, 00:00:00 UTC).

    const timeInSeconds = Math.round(this.time().getTime() / 1000);

    const secondsleft = todayAtMidnightInSeconds - timeInSeconds;

    return secondsleft;
  })

  minutesToMidnight = computed(() => {
    const todayAtMidnight = new Date();   //SCRIVO UNA NUOVA DATA
    todayAtMidnight.setHours(24, 0, 0, 0);  //E LO 'SETTO' A MEZZANOTTE
    const todayAtMidnightInMinutes = Math.round(todayAtMidnight.getTime() / 60000);

    const timeInMinutes = Math.round(this.time().getTime() / 60000);

    const minutesLeft = todayAtMidnightInMinutes - timeInMinutes;

    return minutesLeft;
  })

  hoursToMidnigth = computed(() => {
    const todayAtMidnight = new Date();
    todayAtMidnight.setHours(24, 0, 0, 0);
    const todayAtMidnightInHours = Math.round(todayAtMidnight.getTime() / 3600000);

    const timeInHours = Math.round(this.time().getTime() / 3600000)

    const hoursLeft = todayAtMidnightInHours - timeInHours;

    return hoursLeft;
  })


  // SECONDTOWEEKEND - SUPPONIAMO CHE IL WEEKEND INIZI VENERDì ALLE 18:00 
  // Il metodo getDay() in JavaScript serve a ottenere il numero del giorno della settimana da un oggetto Date, restituendo un intero da 0 (Domenica) a 6 (Sabato)
  // Il metodo getMonth() in JavaScript serve a estrarre il mese da un oggetto Date, restituendo un numero intero compreso tra 0 (Gennaio) e 11 (Dicembre). 
  // È fondamentale notare che la numerazione parte da zero, quindi va aggiunto 1 per ottenere il mese solare corretto


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //   formattedTime = computed(() =>
  //   this.time().toLocaleTimeString('it-IT', {
  //     hour: '2-digit',
  //     minute: '2-digit',
  //     second: '2-digit'
  //   })
  // );

  // formattedTime = computed(() => {
  //   const clock = this.time();
  //   return clock.toLocaleDateString('it-IT', {
  //     // weekday: 'long',
  //     day: '2-digit',
  //     month: 'short',   //long = febbraio, short = feb
  //     year: 'numeric'
  //   }) + '  -  ' + clock.toLocaleTimeString('it-IT', {
  //     hour: '2-digit',
  //     minute: '2-digit',
  //     second: '2-digit'
  //   });
  // });

    formattedTime = computed(() => {
    const clock = this.time();
    return clock.toLocaleDateString('it-IT', {
      // weekday: 'long',
      day: '2-digit',
      month: 'short',   //long = febbraio, short = feb
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).replace(',', ' - ')
  });


  constructor() {
    setInterval(() => {

      this.time.set(new Date());

      //metodo senza usare set - è più lungo e macchinoso - non consigliato
      // this.time.update(oldTime => {
      //   console.log(oldTime);
      //   oldTime.setSeconds(oldTime.getSeconds() + 1);
      //   console.log(oldTime);
      //   return new Date(oldTime);
      // });

    }, 1000);

  }
}
