import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChPaginationComponent } from './ch-pagination.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ChPaginationComponent],
  declarations: [ChPaginationComponent]
})
export class ChPaginationModule { }
