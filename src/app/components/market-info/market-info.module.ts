import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketInfoComponent } from './market-info.component';

@NgModule({
  declarations: [
    MarketInfoComponent
  ],
  exports: [
    MarketInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MarketInfoModule { }
