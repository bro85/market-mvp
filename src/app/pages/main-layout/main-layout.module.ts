import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteFooterModule } from '../../components/site-footer/site-footer.module';
import { SiteHeaderModule } from '../../components/site-header/site-header.module';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  exports: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    SiteFooterModule,
    SiteHeaderModule,
    MainLayoutRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class MainLayoutModule { }
