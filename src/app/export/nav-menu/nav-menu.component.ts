import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ch-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  menuList: any[];
  constructor() { }

  ngOnInit() {
    this.menuList = [
      {
        icon: 'glyphicon glyphicon-home', title: 'navMenu', route: 'navMenu',
        children: [
          {  title: 'child', route: 'child' }
        ]
      },
      {
        icon: 'glyphicon glyphicon-home', title: 'btn', route: 'btn'
      },
      {
        icon: 'glyphicon glyphicon-home', title: 'navMenu', route: 'navMenu',
        children: [
          {  title: 'child', route: 'child' }
        ]
      },
      {
        icon: 'glyphicon glyphicon-home', title: 'btn', route: 'btn'
      }
    ];
  }

}
