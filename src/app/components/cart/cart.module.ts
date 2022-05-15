import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart.routing.module';
import { CommonUiModule } from '../common/common-ui.module';
import { CounterLoggerService } from 'src/app/services/counter-logger.service';
import { TrololoCounterService } from 'src/app/services/trololo-counter.service';
import { ChildComponent } from '../child/child.component';
import { LOGGER_SOURCE } from 'src/app/constants/injection-tokens';



@NgModule({
  declarations: [
    CartComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    CommonUiModule
  ],
  providers: [
    // CounterLoggerService,
    // TrololoCounterService,
    // {
    //   provide: CounterLoggerService,
    //   useExisting: TrololoCounterService
    // },
    // {
    //   provide: LOGGER_SOURCE,
    //   useValue: "CART"
    // }
  ]
})
export class CartModule { }
