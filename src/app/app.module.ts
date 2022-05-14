import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CommonUiModule } from './components/common/common-ui.module';
import { LOGGER_SOURCE } from './constants/injection-tokens';
import { CounterLoggerService } from './services/counter-logger.service';
import { TrololoCounterService } from './services/trololo-counter.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonUiModule
  ],
  providers: [
    // CounterLoggerService,
    // {
    // provide: LOGGER_SOURCE,
    // useValue: "APP"
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
