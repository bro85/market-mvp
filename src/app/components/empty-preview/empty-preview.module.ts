import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyPreviewComponent } from './empty-preview.component';

@NgModule({
  declarations: [
    EmptyPreviewComponent
  ],
  exports: [
    EmptyPreviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmptyPreviewModule { }
