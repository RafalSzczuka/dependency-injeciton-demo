import { Component, OnInit } from '@angular/core';
import { LOGGER_SOURCE } from 'src/app/constants/injection-tokens';
import { CounterLoggerService } from 'src/app/services/counter-logger.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private counterService: CounterLoggerService) { }

  ngOnInit(): void {
  }

  public get counter(): number {
    return this.counterService.counter;
  }

}
