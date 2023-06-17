import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ProductInterface } from '../interfaces/product.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient,
              private _angularFireDatabase: AngularFireDatabase) {}

  create(product: ProductInterface): any {
    return this._angularFireDatabase.list(`/products/${product.type}`).push(product);
  }

  getAll(): Observable<ProductInterface[]> {
    return this._http.get(`${environment.firebaseConfig.databaseURL}/products.json`)
      .pipe(
        map( res => {
          let productsObj = {};
          const typesArr = Object.values(res);
          for (let i = 0; i < typesArr.length; i++){
            productsObj = Object.assign(productsObj, typesArr[i]);
          }
          return Object.keys(productsObj)
            .map( key => ({
              // @ts-ignore
              ...productsObj[key],
              id: key
            }))
        } )
      );
  }

  getByTypeAndID(typeID: string, productID: string): Observable<ProductInterface> {
    return this._http.get(`${environment.firebaseConfig.databaseURL}/products/${typeID}/${productID}.json`)
      .pipe(
        map( (res: ProductInterface) => {
          if (res === null) {
            return {}
          }
          return {
            // @ts-ignore
            ...res,
            id: productID
          }
        })
      );
  }

  getProductsByType(typeID: string): Observable<ProductInterface[]> {
    return this._http.get(`${environment.firebaseConfig.databaseURL}/products/${typeID}.json`)
      .pipe(
        map( res => {
          if (!res){
            return [];
          }
          return Object.keys(res)
            .map( key => ({
              // @ts-ignore
              ...res[key],
              id: key
            }))
        } )
      );
  }

  remove(product: ProductInterface) {
    return this._angularFireDatabase.object(`/products/${product.type}/${product.id}`).remove();
  }

  update(product: ProductInterface): any {
    return this._angularFireDatabase.list(`/products/${product.type}`).set(product.id!, product);
  }

}
