import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChNotificationComponent } from './ch-notification.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChNotificationComponent],
  exports: [ChNotificationComponent]
})
export class ChNotificationModule { }
