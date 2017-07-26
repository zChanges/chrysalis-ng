import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChLoadingDemoComponent } from './chLoadingDemo.component';
import { ChrysalisNgModule } from './../../export';

@NgModule({
  imports: [
    CommonModule,
    ChrysalisNgModule
  ],
  declarations: [ChLoadingDemoComponent],
  exports: [ChLoadingDemoComponent]
})
export class ChLoadingDemoModule { }