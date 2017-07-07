import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChBadgeDemoComponent } from './chBadgeDemo.component';
import { ChrysalisNgModule } from './../../export';

@NgModule({
  imports: [
    CommonModule,
    ChrysalisNgModule
  ],
  declarations: [ChBadgeDemoComponent],
  exports: [ChBadgeDemoComponent]
})
export class ChBadgeDemoModule { }
