import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChTabsDemoComponent } from './chTabsDemo.component';
import { ChrysalisNgModule } from './../../export';

@NgModule({
  imports: [
    CommonModule,
    ChrysalisNgModule
  ],
  declarations: [ChTabsDemoComponent],
  exports: [ChTabsDemoComponent]
})
export class ChTabsDemoModule { }
