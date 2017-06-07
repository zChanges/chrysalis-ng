import { NavMenuComponent } from './nav-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NavMenuComponent],
  declarations: [NavMenuComponent]
})
export class NavMenuModule { }
