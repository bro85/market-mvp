import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialComponent } from './social.component';

@NgModule({
  declarations: [
    SocialComponent
  ],
  exports: [
    SocialComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SocialModule { }
