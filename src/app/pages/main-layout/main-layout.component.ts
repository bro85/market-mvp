import { AfterContentChecked, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy, AfterContentChecked {

  public isAdmin = false;
  private _isAdminSubscription: Subscription;

  public showPreloader = false;
  private _showPreloaderSubscription: Subscription;

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              private _storeService: StoreService) {}

  ngAfterContentChecked(): void {
    this._changeDetectorRef.detectChanges(); // For the fixing Error: NG0100
  }

  ngOnDestroy(): void {
    this._showPreloaderSubscription.unsubscribe();
    this._isAdminSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this._showPreloaderSubscription = this._storeService.showPreloader.subscribe( val => {
      this.showPreloader = val;
    } );
    this._isAdminSubscription = this._storeService.isAdmin.subscribe( val => {
      this.isAdmin = val;
    } );
    this._changeDetectorRef.detectChanges(); // For the fixing Error: NG0100
  }

}
