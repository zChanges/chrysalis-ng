import { Component, Input, AfterViewInit, OnDestroy, OnChanges } from '@angular/core';
@Component({
  selector: 'ch-notification',
  templateUrl: './ch-notification.component.html',
  styleUrls: ['./ch-notification.component.scss']
})
export class ChNotificationComponent implements AfterViewInit, OnDestroy, OnChanges {

  time = 1000;
  @Input() messages = [];
  Interval: any;
  // @Input() set messages(mes) {
  //   this.messages = mes;
  // };

  // get messages() {
  //   return this.messages;
  // }

  constructor() { }

  ngAfterViewInit() {
    if (this.messages && this.messages.length > 0) {
      this.aotDisappear();
    }
  }

  remove(index: number, msgEl: any) {
    this.messages.splice(index, 1);
  }

  aotDisappear() {
    if (this.Interval) {
      clearInterval(this.Interval);
    }

    this.Interval = setInterval(() => {
      this.messages.forEach((item, index) => { if (!item.remain) { this.messages.splice(index, 1); }; });
      const len = this.messages.filter((item) => { return item.remain === true; });
      if (len.length < 1) { clearInterval(this.Interval); };
    }, this.time);
  }


  ngOnDestroy() {
    if (this.Interval) {
      clearInterval(this.Interval);
    }
  }

  ngOnChanges() {
    if (this.messages.length > 0) {
      this.aotDisappear();
    }
  }

}
