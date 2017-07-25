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
  @ViewChild('github') github;

  constructor(private Store: Store<any>) {
  }
  ngOnInit() {
    this.isCollapse = this.Store.select('sidebar');
    this.menuList = [
      { icon: 'fa-star', url: 'https://github.com/zChanges/chrysalis-ng', template: this.github, },
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
      },
      {
        title: 'Message', icon: 'fa fa-comments-o',
        children: [
          { title: 'notification', route: 'component/Notification' }
        ]
      },
    ];
  }
}
