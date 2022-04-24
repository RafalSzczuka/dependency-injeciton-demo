import { Component } from '@angular/core';
import { CounterLoggerService } from './services/counter-logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'di-demo';

  constructor(private counterService: CounterLoggerService) {}

  public get counter(): number {
    return this.counterService.counter;
  }
}
