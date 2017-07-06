import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChNavMenuComponent } from './ch-navMenu.component';
import { NavMenuItemComponent } from './commponent/navMenuItem/navMenuItem.component';
import { DropdownDirective } from './dropdown.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ChNavMenuComponent, NavMenuItemComponent,DropdownDirective],
  declarations: [
    ChNavMenuComponent,
    NavMenuItemComponent,
    DropdownDirective
  ]
})
export class ChNavMenuModule { }
