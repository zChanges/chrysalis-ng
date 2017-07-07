import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChBadgeComponent } from './ch-badge.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChBadgeComponent],
  exports: [ChBadgeComponent]
})
export class ChBadgeModule { }
