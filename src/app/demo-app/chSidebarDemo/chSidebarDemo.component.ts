import { Component, OnInit } from '@angular/core';
// import { ImenuLeft } from '../../dataInterface';

@Component({
  selector: 'ch-SidebarDemo',
  templateUrl: './chSidebarDemo.component.html',
  styleUrls: ['./chSidebarDemo.component.scss']
})
export class ChSidebarDemoComponent implements OnInit {
  menuList = [];
  constructor() { }

  ngOnInit() {
    this.menuList = [
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

};
