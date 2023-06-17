import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveCommaPipe } from './remove-comma.pipe';

@NgModule({
  declarations: [
    RemoveCommaPipe
  ],
  exports: [
    RemoveCommaPipe
  ],
  imports: [
    CommonModule,
  ]
})

export class RemoveCommaModule {}
