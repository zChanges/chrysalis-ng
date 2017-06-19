import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChPageDemoComponent } from './chPageDemo.component';
import { ChrysalisNgModule } from './../../export';
@NgModule({
  imports: [
    CommonModule,
    ChrysalisNgModule
  ],
  exports: [ ChPageDemoComponent ],
  declarations: [ ChPageDemoComponent ]
})
export class ChPageDemoModule { }