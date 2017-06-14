import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChNavMenuComponent } from './ch-navMenu.component';
import { NavMenuItemComponent } from './commponent/navMenuItem/navMenuItem.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ChNavMenuComponent, NavMenuItemComponent],
  declarations: [ChNavMenuComponent, NavMenuItemComponent]
})
export class ChNavMenuModule { }
