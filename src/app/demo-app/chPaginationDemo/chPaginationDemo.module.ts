import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChPaginationDemoComponent } from './chPaginationDemo.component';
import { ChrysalisNgModule } from './../../export';
@NgModule({
  imports: [
    CommonModule,
    ChrysalisNgModule
  ],
  exports: [ChPaginationDemoComponent],
  declarations: [ChPaginationDemoComponent]
})
export class ChPaginationDemoModule { }
