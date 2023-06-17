import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterMenuComponent } from './footer-menu.component';

@NgModule({
  declarations: [
    FooterMenuComponent
  ],
  exports: [
    FooterMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FooterMenuModule {}
