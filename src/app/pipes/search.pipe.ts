import { Pipe, PipeTransform } from '@angular/core';
import { ProductInterface } from '../interfaces/product.interface';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  transform(products: ProductInterface[], productName: string): ProductInterface[] {

    if (productName.trim() === ''){
      return products;
    }

    // Creating array of products with title match
    return products.filter( product => {
      return product.title?.trim().toLowerCase().includes( productName.trim().toLowerCase() );
    } );

  }

}
