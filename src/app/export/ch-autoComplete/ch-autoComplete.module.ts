import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChAutoCompleteComponent } from './ch-autoComplete.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ChAutoCompleteComponent],
  exports: [ChAutoCompleteComponent]
})
export class ChAutoCompleteModule { }
