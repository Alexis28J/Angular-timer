import { Component, inject } from '@angular/core';
import { ClockService } from '../../services/clock-service';

@Component({
  selector: 'app-first-dial-component',
  imports: [],
  templateUrl: './first-dial-component.html',
  styleUrl: './first-dial-component.scss',
})
export class FirstDialComponent {

timeInSeconds() {
console.log('Secondi');
return this.currentTime.secondsToMidnight();

}

timeInMinutes() {
console.log('Minuti');

}
timeInHours() {
console.log('Ore');
}

currentTime = inject(ClockService);
}
