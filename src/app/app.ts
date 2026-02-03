import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClockComponent } from "./component/clock-component/clock-component/clock-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClockComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular-timer');
}
