import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ch-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chrysalis/ng';
  isCollapse: any;
  isFixed = false;
  menuList = [];
  sidebarList = [];
  num = 0;
  @ViewChild('msgView') msgView;

  constructor(private Store: Store<any>) {
  }
  ngOnInit() {
    this.isCollapse = this.Store.select('sidebar');
    this.menuList = [
      { icon: 'fa-bell-o', template: this.msgView, router: 'component/Tabs',
        downChild: [
          { title: 'navMenu'},
          { title: 'sidebar' },
          { title: 'tabs' }
        ]
      },
      // { icon: 'fa-bell-o', template: this.msgView, router: 'component/Tabs'},
      { icon: 'fa-envelope-o', options: [{ text: 'Normal' }, { text: 'Normal' }, { text: 'Normal' }] },
      { options: [{ router: '/tabs', text: '个人资料' }, { router: '/tabs', text: '退出登录' }], title: 'zChange' }
    ];

    this.sidebarList = [
      {
        title: 'Navigation', icon: 'fa fa-navicon',
        children: [
          { title: 'navMenu', route: 'component/NavMenu' },
          { title: 'sidebar', route: 'component/Sidebar' },
          { title: 'tabs', route: 'component/Tabs' },
          { title: 'badge', route: 'component/Badge' }
        ]
      },
      {
        title: 'Data', icon: 'fa fa-table',
        children: [
          { title: 'pager', route: 'component/Pager' },
          { title: 'pagination', route: 'component/Pagination' }
        ]
      }
    ];
  }
}
