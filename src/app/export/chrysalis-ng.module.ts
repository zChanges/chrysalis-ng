import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChSidebarModule } from './ch-sidebar';
import { ChNavMenuModule } from './ch-navMenu';
import { ChPagerModule } from './ch-pager';
import { ChPaginationModule } from './ch-pagination';
import { ChTabsModule } from './ch-tabs';
import { ChBadgeModule } from './ch-badge';



@NgModule({
  imports: [
    CommonModule,
    ChSidebarModule,
    ChNavMenuModule,
    ChPagerModule,
    ChPaginationModule,
    ChTabsModule,
    ChBadgeModule
  ],
  exports: [
    ChSidebarModule,
    ChNavMenuModule,
    ChPagerModule,
    ChPaginationModule,
    ChTabsModule,
    ChBadgeModule
  ],
  declarations: []
})
export class ChrysalisNgModule { }
