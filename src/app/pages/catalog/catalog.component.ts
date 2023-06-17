import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { ProductTypeInterface } from '../../interfaces/product-type.interface';
import { ProductTypeService } from '../../services/product-type.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CatalogComponent implements OnInit {

  public types: ProductTypeInterface[];
  private _getTypesSubscription: Subscription;

  constructor(private _productService: ProductService,
              private _productTypeService: ProductTypeService) { }

  ngOnInit(): void {
    this.getTypesList();
  }

  getTypesList() {
    this._getTypesSubscription = this._productTypeService.getTypes().subscribe( (res: ProductTypeInterface[]) => {
      this.types = res;
      this.types.sort( (a,b) => {
        if (a.title < b.title){
          return -1;
        } else if (a.title > b.title){
          return 1;
        } else {
          return 0
        }
      } );
    } );
  }

}
