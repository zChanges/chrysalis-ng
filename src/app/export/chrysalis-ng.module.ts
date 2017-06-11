import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChSidebarModule } from './ch-sidebar';
import { ChNavMenuModule } from './ch-navMenu';

@NgModule({
  imports: [
    CommonModule,
    ChSidebarModule,
    ChNavMenuModule
  ],
  exports: [
    ChSidebarModule,
    ChNavMenuModule
  ],
  declarations: []
})
export class ChrysalisNgModule { }
