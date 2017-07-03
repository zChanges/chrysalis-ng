import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChTabsComponent } from './ch-tabs.component';
import { ChTabComponent } from './tab.component';
import { TabTitleDirective } from './tab-title.directive';
import { TabContentDirective } from './tab-content.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChTabsComponent,
    ChTabComponent,
    TabTitleDirective,
    TabContentDirective
  ],
  exports: [
    ChTabsComponent,
    ChTabComponent,
    TabTitleDirective,
    TabContentDirective
  ]
})
export class ChTabsModule { }