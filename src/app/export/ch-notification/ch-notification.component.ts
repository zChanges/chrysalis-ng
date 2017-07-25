import { Component, Input, AfterViewInit, OnDestroy, OnChanges } from '@angular/core';
// import { chNotice } from '../../dataInterface';
@Component({
  selector: 'ch-notification',
  templateUrl: './ch-notification.component.html',
  styleUrls: ['./ch-notification.component.scss']
})
export class ChNotificationComponent implements AfterViewInit, OnDestroy, OnChanges {

  _messages = [];
  @Input() set messages(mes) {
    this._messages = mes;
  };

  get messages() {
    return this._messages;
  }

  Interval: any;
  constructor() { }

  ngAfterViewInit() {
    if (this.messages && this.messages.length > 0) {
      this.aotDisappear();
    }
  }

  remove(index: number, msgEl: any) {
    this._messages.splice(index, 1);
  }

  aotDisappear() {
    if (this.Interval) {
      clearInterval(this.Interval);
    }

    this.Interval = setInterval(() => {
    if (this._messages.length < 1) { clearInterval(this.Interval); return; };
      console.log(this._messages.filter((item) => { return item.isAotDis == false; }).splice(0, this._messages.length - 1))
      this._messages = this._messages.filter((item) => { return item.isAotDis == false; }).splice(0, this._messages.length - 1)
    }, 1000);
  }


  ngOnDestroy() {
    if (this.Interval) {
      clearInterval(this.Interval);
    }
  }

  ngOnChanges() {
    if (this._messages.length > 0) {
      this.aotDisappear();
    }
  }

}
