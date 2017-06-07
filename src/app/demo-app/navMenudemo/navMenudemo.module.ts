import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavMenudemoComponent } from './navMenudemo.component';
import { ChrysalisNgModule } from './../../export';

@NgModule({
  imports: [
    CommonModule,
    ChrysalisNgModule
  ],
  declarations: [NavMenudemoComponent]
})
export class NavMenudemoModule { }

