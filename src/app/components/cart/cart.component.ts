import { Component } from '@angular/core';
import { CounterLoggerService } from 'src/app/services/counter-logger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(private counterService: CounterLoggerService) { }

  public get counter(): number {
    return this.counterService.counter;
  }

}
