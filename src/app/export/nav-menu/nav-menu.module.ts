import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChMenuItemComponent } from './component/chMenuItem/chMenuItem.component';
import { NavMenuComponent } from './nav-menu.component';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NavMenuComponent, ChMenuItemComponent],
  declarations: [
    NavMenuComponent,
    ChMenuItemComponent
  ]
})
export class NavMenuModule { }
