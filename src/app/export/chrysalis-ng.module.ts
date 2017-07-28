import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChSidebarModule } from './ch-sidebar';
import { ChNavMenuModule } from './ch-navMenu';
import { ChPagerModule } from './ch-pager';
import { ChPaginationModule } from './ch-pagination';
import { ChTabsModule } from './ch-tabs';
import { ChBadgeModule } from './ch-badge';
import { ChNotificationModule } from './ch-notification';
import { ChLoadingModule, ChLoadingService } from './ch-loading';


@NgModule({
  imports: [
    CommonModule,
    ChSidebarModule,
    ChNavMenuModule,
    ChPagerModule,
    ChPaginationModule,
    ChTabsModule,
    ChBadgeModule,
    ChNotificationModule,
    ChLoadingModule
  ],
  exports: [
    ChSidebarModule,
    ChNavMenuModule,
    ChPagerModule,
    ChPaginationModule,
    ChTabsModule,
    ChBadgeModule,
    ChNotificationModule,
    ChLoadingModule
  ],
  declarations: [],
  providers: [ChLoadingService]
})
export class ChrysalisNgModule {
  // static forRoot(): ModuleWithProviders{
  //   return {
  //     ngModule: ChrysalisNgModule,
  //     providers: [
  //        { provide: ChLoadingService, useClass: ChLoadingService },
  //     ]
  //   }
  // }

}
