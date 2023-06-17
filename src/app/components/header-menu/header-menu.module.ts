import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './header-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderMenuComponent
  ],
  exports: [
    HeaderMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class HeaderMenuModule { }
