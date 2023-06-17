import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteFooterComponent } from './site-footer.component';
import { LogoModule } from "../logo/logo.module";
import { FooterMenuModule } from '../footer-menu/footer-menu.module';

@NgModule({
  declarations: [
    SiteFooterComponent
  ],
  exports: [
    SiteFooterComponent
  ],
  imports: [
    CommonModule,
    LogoModule,
    FooterMenuModule,
  ]
})
export class SiteFooterModule { }
