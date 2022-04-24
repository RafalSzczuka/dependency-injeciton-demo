import { Component, OnInit } from '@angular/core';
import { CounterLoggerService } from 'src/app/services/counter-logger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private counterService: CounterLoggerService) { }

  ngOnInit(): void {
  }

  public get counter(): number {
    return this.counterService.counter;
  }

}
