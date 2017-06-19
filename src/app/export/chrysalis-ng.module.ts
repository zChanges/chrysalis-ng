import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChSidebarModule } from './ch-sidebar';
import { ChNavMenuModule } from './ch-navMenu';
import { ChPagerModule } from './ch-pager';


@NgModule({
  imports: [
    CommonModule,
    ChSidebarModule,
    ChNavMenuModule,
    ChPagerModule
  ],
  exports: [
    ChSidebarModule,
    ChNavMenuModule,
    ChPagerModule
  ],
  declarations: []
})
export class ChrysalisNgModule { }
