import { Component, inject, signal } from '@angular/core';
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
console.log(this.currentTime.minutesToMidnight());
return this.currentTime.minutesToMidnight();
}

timeInHours() {
console.log('Ore');
console.log(this.currentTime.hoursToMidnigth());
return this.currentTime.hoursToMidnigth();
}

currentTime = inject(ClockService);
}
