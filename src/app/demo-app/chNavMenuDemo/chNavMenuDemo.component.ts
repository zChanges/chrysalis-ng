import { Component, OnInit,  ViewChild} from '@angular/core';

@Component({
  selector: 'ch-navMenuDemo',
  templateUrl: './chNavMenuDemo.component.html',
  styleUrls: ['./chNavMenuDemo.component.css']
})
export class ChNavMenuDemoComponent implements OnInit {
  menubarList = [];
  num = 0;

  @ViewChild('msgView') msgView;

  constructor() { }

  ngOnInit() {
    this.menubarList = [
      { icon: 'fa-bell-o', template: this.msgView, router: 'component/Tabs',
        downChild: [
          { title: 'navMenu'},
          { title: 'sidebar' },
          { title: 'tabs' }
        ]
      },
      { icon: 'fa-envelope-o', options: [{ text: 'Normal' }, { text: 'Normal' }, { text: 'Normal' }] },
      { options: [{ router: '/tabs', text: '个人资料' }, { router: '/tabs', text: '退出登录' }], title: 'zChange' }
    ];
  }

}
