import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { SocialModule } from '../../components/social/social.module';
import { BrandCardModule } from '../../components/brand-card/brand-card.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    CatalogComponent,
  ],
  exports: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    SocialModule,
    BrandCardModule,
    MatProgressSpinnerModule
  ]
})
export class CatalogModule { }
