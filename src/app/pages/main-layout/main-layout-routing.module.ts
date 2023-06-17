import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./../main-page/main-page.module').then(m => m.MainPageModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('./../contact-us/contact-us.module').then(m => m.ContactUsModule)
      },
      {
        path: 'catalog',
        loadChildren: () => import('./../catalog/catalog.module').then(m => m.CatalogModule)
      },
      {
        path: 'catalog/brand/:brandName',
        loadChildren: () => import('./../catalog-brand/catalog-brand.module').then(m => m.CatalogBrandModule)
      },
      {
        path: 'catalog/:id',
        loadChildren: () => import('./../catalog-type/catalog-type.module').then(m => m.CatalogTypeModule)
      },
      {
        path: 'catalog/:typeID/:productID',
        loadChildren: () => import('./../product-page/product-page.module').then(m => m.ProductPageModule)
      },
      {
        path: 'checkout',
        loadChildren: () => import('./../checkout/checkout.module').then(m => m.CheckoutModule)
      },
      {
        path: 'error',
        loadChildren: () => import('./../error-page/error-page.module').then(m => m.ErrorPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainLayoutRoutingModule {}
