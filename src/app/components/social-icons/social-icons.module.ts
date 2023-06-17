import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialIconsComponent } from './social-icons.component';

@NgModule({
  declarations: [
    SocialIconsComponent
  ],
  exports: [
    SocialIconsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SocialIconsModule { }
