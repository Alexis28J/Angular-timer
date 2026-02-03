import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClockComponent } from "./component/clock-component/clock-component/clock-component";
import { FirstDialComponent } from "./component/first-dial-component/first-dial-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClockComponent, FirstDialComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular-timer');
}
