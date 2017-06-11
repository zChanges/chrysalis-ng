import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChNavMenuDemoComponent } from './chNavMenuDemo.component';
import { ChrysalisNgModule } from './../../export';
@NgModule({
  imports: [
    CommonModule,
    ChrysalisNgModule
  ],
  declarations: [ChNavMenuDemoComponent]
})
export class ChNavMenuDemoModule { }