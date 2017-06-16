import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'ch-navMenu',
  templateUrl: './ch-navMenu.component.html',
  styleUrls: ['./ch-navMenu.component.scss']
})
export class ChNavMenuComponent implements OnInit {
  menubarList = [];
  constructor() { }

  ngOnInit() {
    this.menubarList = [
        {icon: 'fa-bell-o', options: ['Normal', 'Normal', 'Small'], },
        {icon: 'fa-envelope-o', options: ['Normal', 'Normal', 'Small'] },
        { options: ['登录', '退出'], title: 'zChange' }
      ];
  }
}
