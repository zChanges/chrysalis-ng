import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChNavMenuComponent } from './ch-navMenu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ChNavMenuComponent],
  declarations: [ChNavMenuComponent]
})
export class ChNavMenuModule { }