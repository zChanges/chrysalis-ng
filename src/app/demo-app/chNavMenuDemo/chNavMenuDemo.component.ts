import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ch-navMenuDemo',
  templateUrl: './chNavMenuDemo.component.html',
  styleUrls: ['./chNavMenuDemo.component.css']
})
export class ChNavMenuDemoComponent implements OnInit {
  menubarList = [];
  constructor() { }

  ngOnInit() {
    this.menubarList = [
      { icon: 'fa-bell-o', options: ['Normal', 'Normal', 'Small'], },
      { icon: 'fa-envelope-o', options: ['Normal', 'Normal', 'Small'] },
      { options: ['登录', '退出'], title: 'zChange' }
    ];
  }

}
