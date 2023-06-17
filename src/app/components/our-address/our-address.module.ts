import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurAddressComponent } from './our-address.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OurAddressComponent
  ],
  exports: [
    OurAddressComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class OurAddressModule { }
