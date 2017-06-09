import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChSidebarModule } from './ch-sidebar';

@NgModule({
  imports: [
    CommonModule,
    ChSidebarModule
  ],
  exports: [
    ChSidebarModule
  ],
  declarations: []
})
export class ChrysalisNgModule { }
