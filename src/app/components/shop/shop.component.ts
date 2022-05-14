import { Component } from '@angular/core';
import { CounterLoggerService } from 'src/app/services/counter-logger.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

  constructor(private counterService: CounterLoggerService) { }

  public get counter(): number {
    return this.counterService.counter;
  }

}
