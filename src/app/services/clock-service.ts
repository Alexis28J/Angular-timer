//Spiegazione Copilot (03.02.2026) - https://copilot.microsoft.com/shares/r5f8zPCHaNNzvU2RA2Nm3

import { computed, inject, Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClockService {

  time: WritableSignal<Date> = signal(new Date());


  secondsToMidnight = computed(() => {

    const todayAtMidnight = new Date();
    todayAtMidnight.setHours(24, 0, 0, 0);
    const todayAtMidnightInSeconds = Math.round(todayAtMidnight.getTime() / 1000);

    const timeInSeconds = Math.round(this.time().getTime() / 1000);

    const secondsleft = todayAtMidnightInSeconds - timeInSeconds;

    return secondsleft;
  })



//   formattedTime = computed(() =>
//   this.time().toLocaleTimeString('it-IT', {
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit'
//   })
// );

formattedTime = computed(() => {
  const clock = this.time();
  return clock.toLocaleDateString('it-IT', {
    // weekday: 'long',
    day: '2-digit',
    month: 'short',   //long = febbraio, short = feb
    year: 'numeric'
  }) + '  -  ' + clock.toLocaleTimeString('it-IT', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
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
