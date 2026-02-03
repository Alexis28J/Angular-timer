import { inject, Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
time: WritableSignal<Date> = signal(new Date());

constructor(){
  setInterval(() => {
     
    this.time.set(new Date());
    
  }, 1000);
}
}
