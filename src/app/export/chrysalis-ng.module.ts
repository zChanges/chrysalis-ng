import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavMenuModule } from './nav-menu';

@NgModule({
  imports: [
    CommonModule,
    NavMenuModule
  ],
  exports: [
    NavMenuModule
  ],
  declarations: []
})
export class ChrysalisNgModule { }
