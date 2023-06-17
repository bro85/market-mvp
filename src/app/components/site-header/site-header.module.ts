import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteHeaderComponent } from './site-header.component';
import { MarketInfoModule } from '../market-info/market-info.module';
import { SocialModule } from '../social/social.module';
import { LogoModule } from '../logo/logo.module';
import { HeaderMenuModule } from '../header-menu/header-menu.module';
import { GoodsTrolleyModule } from '../goods-trolley/goods-trolley.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SiteHeaderComponent,
  ],
  exports: [
    SiteHeaderComponent,
  ],
  imports: [
    CommonModule,
    GoodsTrolleyModule,
    HeaderMenuModule,
    LogoModule,
    MarketInfoModule,
    RouterModule,
    SocialModule
  ]
})
export class SiteHeaderModule { }
