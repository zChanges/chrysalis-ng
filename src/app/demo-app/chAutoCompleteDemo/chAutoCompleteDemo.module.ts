import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChAutoCompleteDemoComponent } from './chAutoCompleteDemo.component';
import { ChrysalisNgModule } from './../../export';

@NgModule({
  imports: [
    CommonModule,
    ChrysalisNgModule
  ],
  declarations: [ChAutoCompleteDemoComponent],
  exports: [ChAutoCompleteDemoComponent]
})
export class ChAutoCompleteDemoModule { }
