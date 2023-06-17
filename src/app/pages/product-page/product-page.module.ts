import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageRoutingModule } from './product-page-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SwiperModule } from 'swiper/angular';
import { RemoveCommaModule } from '../../pipes/remove-comma.module';
import { EmptyPreviewModule } from '../../components/empty-preview/empty-preview.module';
import { ProductPageComponent } from './product-page.component';

@NgModule({
  declarations: [
    ProductPageComponent
  ],
  exports: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    RemoveCommaModule,
    SwiperModule,
    MatProgressSpinnerModule,
    EmptyPreviewModule,
  ]
})

export class ProductPageModule {}
