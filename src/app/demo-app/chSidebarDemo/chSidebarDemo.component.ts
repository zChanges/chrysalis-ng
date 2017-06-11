import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ch-SidebarDemo',
  templateUrl: './chSidebarDemo.component.html',
  styleUrls: ['./chSidebarDemo.component.scss']
})
export class ChSidebarDemoComponent implements OnInit {
  menuList= [];
  constructor() { }

  ngOnInit() {
    this.menuList = [
      {
        icon: 'glyphicon glyphicon-home', title: 'navMenu', route: 'navMenu',
        children: [
          {  title: 'child1', route: 'child' ,
          children: [
            {  title: 'child1-1', route: 'child' },
            {  title: 'child1-2', route: 'child' }
          ]
        },
          {  title: 'child', route: 'child' }
        ]
      },
      {
        icon: 'glyphicon glyphicon-home', title: 'btn', route: 'btn'
      },
      {
        icon: 'glyphicon glyphicon-home', title: 'navMenu', route: 'navMenu',
        children: [
          {  title: 'child', route: 'child' },
          {  title: 'child', route: 'child' }
        ]
      },
      {
        icon: 'glyphicon glyphicon-home', title: 'btn', route: 'btn'
      }
    ];
  }

}