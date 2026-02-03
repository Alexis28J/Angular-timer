import { Component, inject } from '@angular/core';
import { ClockService } from '../../../services/clock-service';

@Component({
  selector: 'app-clock-component',
  imports: [],
  templateUrl: './clock-component.html',
  styleUrl: './clock-component.scss',
})
export class ClockComponent {

  //devo mostrare l'orario
currentTime = inject(ClockService);
}

