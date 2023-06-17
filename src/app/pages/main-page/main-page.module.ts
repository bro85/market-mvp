import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { ProductsPreviewSliderModule } from '../../components/products-preview-slider/products-preview-slider.module';
import { AboutUsModule } from '../../components/about-us/about-us.module';
import { PartnerLogoModule } from '../../components/partner-logo/partner-logo.module';
import { OurAddressModule } from '../../components/our-address/our-address.module';
import { MainPageRoutingModule } from './main-page-routing.module';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    ProductsPreviewSliderModule,
    AboutUsModule,
    PartnerLogoModule,
    OurAddressModule,
    MainPageRoutingModule,
  ]
})
export class MainPageModule {}
