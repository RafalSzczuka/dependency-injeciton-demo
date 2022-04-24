import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop.routing.module';
import { CommonUiModule } from '../common/common-ui.module';


@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    CommonUiModule
  ]
})
export class ShopModule { }
