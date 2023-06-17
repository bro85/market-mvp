import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PopupConfirmComponent } from './popup-confirm.component';

@NgModule({
  declarations: [
    PopupConfirmComponent
  ],
  exports: [
    PopupConfirmComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class PopupConfirmModule { }
