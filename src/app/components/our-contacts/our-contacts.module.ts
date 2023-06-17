import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurContactsComponent } from './our-contacts.component';

@NgModule({
  declarations: [
    OurContactsComponent
  ],
  exports: [
    OurContactsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OurContactsModule { }
