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
          { title: 'navMenu', route: '/navMenu' },
          { title: 'sidebar', route: '/sidebar' },
          { title: 'tabs', route: '/tabs' }
        ]
      },
      {
        title: 'Data', icon: 'fa fa-table',
        children: [
          { title: 'pager', route: '/pager' },
          { title: 'pagination', route: '/pagination' }
        ]
      }
    ];
  }

};
