import { Component , OnInit} from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ch-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'chrysalis/ng';
  isCollapse: any;
  isFixed = false;
  menuList = [];
  sidebarList = [];
  constructor (private Store: Store<any>) {
  }
  ngOnInit() {
    this.isCollapse = this.Store.select('sidebar');
    this.menuList = [
      { icon: 'fa-bell-o', options: ['Normal', 'Normal', 'Small'], },
      { icon: 'fa-envelope-o', options: ['Normal', 'Normal', 'Small'] },
      { options: ['登录', '退出'], title: 'zChange' }
    ];

    this.sidebarList = [
      {
        title: 'Navigation', icon: 'fa fa-navicon',
        children: [
          { title: 'navMenu', route: 'component/NavMenu' },
          { title: 'sidebar', route: 'component/Sidebar' },
          { title: 'tabs', route: 'component/Tabs' }
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
