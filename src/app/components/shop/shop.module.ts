import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop.routing.module';
import { CommonUiModule } from '../common/common-ui.module';
import { CounterLoggerService } from 'src/app/services/counter-logger.service';
import { LOGGER_SOURCE } from 'src/app/constants/injection-tokens';


@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    CommonUiModule
  ],
  providers: [
    // CounterLoggerService,
    // {
    //   provide: CounterLoggerService,
    //   useClass: CounterLoggerService // new CounterLogger...
    // }
    // {
    //   provide: LOGGER_SOURCE,
    //   useValue: "SHOP"
    // }
  ]
})
export class ShopModule { }
