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
