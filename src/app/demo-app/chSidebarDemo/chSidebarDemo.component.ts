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
          { title: '头部导航', route: '' },
          { title: '侧边导航', route: '' },
          { title: '标签页', route: '' }
        ]
      },
      {
        title: '数据', icon: 'fa fa-table',
        children: [
          { title: 'Pager分页', route: '' },
          { title: 'Pagination分页', route: '' }
        ]
      }
    ];
  }

};
