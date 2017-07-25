import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chNotificationDemo',
  templateUrl: './chNotificationDemo.component.html',
  styleUrls: ['./chNotificationDemo.component.scss']
})
export class ChNotificationDemoComponent implements OnInit {
  messages = [];
  constructor() { }

  ngOnInit() {
  }

  emitNotice(type) {
    this.messages = [];
    this.messages.push({ type: type, title: type, text: 'balablabala' })
    this.messages.push({ type: type, title: type, text: 'balablabala' })
    this.messages.push({ type: type, title: type, text: 'balablabala', isAotDis: false })
  }

}
