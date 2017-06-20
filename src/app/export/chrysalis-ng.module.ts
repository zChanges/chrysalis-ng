import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChSidebarModule } from './ch-sidebar';
import { ChNavMenuModule } from './ch-navMenu';
import { ChPagerModule } from './ch-pager';
import { ChPaginationModule } from './ch-pagination';


@NgModule({
  imports: [
    CommonModule,
    ChSidebarModule,
    ChNavMenuModule,
    ChPagerModule,
    ChPaginationModule
  ],
  exports: [
    ChSidebarModule,
    ChNavMenuModule,
    ChPagerModule,
    ChPaginationModule
  ],
  declarations: []
})
export class ChrysalisNgModule { }
