import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChLoadingComponent } from './ch-loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChLoadingComponent],
  exports: [ChLoadingComponent]
})
export class ChLoadingModule { }