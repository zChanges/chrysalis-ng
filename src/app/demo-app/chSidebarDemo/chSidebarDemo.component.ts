import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ch-SidebarDemo',
  templateUrl: './chSidebarDemo.component.html',
  styleUrls: ['./chSidebarDemo.component.scss']
})
export class ChSidebarDemoComponent implements OnInit {
  menuList = [];
  isFixed = false;
  constructor() { }
  ngOnInit() {
    this.menuList = [
      {
        title: '导航', icon: 'fa fa-navicon',
        children: [
          { title: '头部导航', route: 'component/NavMenu' },
          { title: '侧边导航', route: 'component/Sidebar' },
          { title: '标签页', route: 'component/Tabs' }
        ]
      },
      {
        title: '数据', icon: 'fa fa-table',
        children: [
          { title: 'Pager分页', route: 'component/Pager' },
          { title: 'Pagination分页', route: 'component/Pagination' }
        ]
      }
    ];
  }

};
