import { ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Observable, Subscription } from 'rxjs';
import { ProductInterface } from '../../interfaces/product.interface';
import { switchMap } from 'rxjs/operators';
import SwiperCore, { SwiperOptions } from 'swiper';
import { SwiperComponent } from "swiper/angular";
import { PreviewInterface } from '../../interfaces/preview.interface';
import { ProductImageInterface } from '../../interfaces/product-image.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductPageComponent implements OnInit, OnDestroy {

  @Input() isPopupAddProduct: boolean;
  @Input() popupConfig: {typeID: string, productID: string};
  @Output() addProductToOrder: EventEmitter<{ typeID: string, productID: string }> = new EventEmitter();
  @ViewChild('sliderRef') sliderRef: SwiperComponent;
  public product$: Observable<ProductInterface>;
  public preview: PreviewInterface[];
  public config: SwiperOptions = {
    slidesPerView: 1,
    pagination: {
      clickable: true
    }
  };
  private _productSubscription: Subscription;
  private _typeID = '';
  private _productID = '';

  constructor(private _cartService: CartService,
              private _changeDetectorRef: ChangeDetectorRef,
              private _productService: ProductService,
              private _route: ActivatedRoute) {}

  addToCart() {
    this._cartService.addProduct(this._typeID, this._productID, 1);
  }

  addToOrder() {
    this.addProductToOrder.emit({typeID: this._typeID, productID: this._productID});
  }

  changeActivePreview(index: number): void {
    this.preview.forEach( (item, i) => {
      item.isActive = index === i;
    } );
    this._changeDetectorRef.detectChanges();
  }

  changeSlide(i: number): void {
    this.sliderRef.swiperRef.slideTo(i);
  }

  // Create an array of objects (PreviewInterface)
  getPreview(index: number = 0): void {
    // index - index of active preview.
    this._productSubscription = this.product$.pipe().subscribe( val => {
      this.preview = this.getPreviewArr(val.images!, index);
    } );
  }

  getPreviewArr(arr: ProductImageInterface[], activeIndex: number): PreviewInterface[] {
    if (arr){
      // If product has images
      return arr.map( (item, i) => {
        return {
          src: item.original,
          isActive: activeIndex === i
        }
      } );
    } else {
      return [];
    }
  }

  getProduct(): void {

    if (this.isPopupAddProduct){
      // If current component views in PopupAddProductComponent
      this._typeID = this.popupConfig.typeID;
      this._productID = this.popupConfig.productID;
      this.product$ = this._productService.getByTypeAndID( this._typeID, this._productID );
    } else {
      // If current component views on the page catalog/:typeID/:productID
      this.product$ = this._route.params.pipe(
        switchMap( res => {
          this._typeID = res.typeID;
          this._productID = res.productID;
          return this._productService.getByTypeAndID( this._typeID, this._productID );
        } )
      );
    }

  }

  isEmptyObject(obj: Object): boolean {
    return Object.keys(obj).length === 0;
  }

  ngOnDestroy(): void {
    if (this._productSubscription){
      this._productSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.getProduct();
    this.getPreview();
  }

  onSlideChange(): void {
    this.changeActivePreview(this.sliderRef.swiperRef.activeIndex);
  }

  onSwiper($event: any): void {
    // console.log('is onSwiper', $event);
  }

}
