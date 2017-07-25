import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChNotificationDemoComponent } from './chNotificationDemo.component';
import { ChrysalisNgModule } from './../../export';

@NgModule({
  imports: [
    CommonModule,
    ChrysalisNgModule
  ],
  declarations: [ChNotificationDemoComponent],
  exports: [ChNotificationDemoComponent]
})
export class ChNotificationDemoModule { }