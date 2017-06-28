import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NORMAL, COLLAPSED } from '../../reducers/re-sidebar';
@Component({
  selector: 'ch-navMenu',
  templateUrl: './ch-navMenu.component.html',
  styleUrls: ['./ch-navMenu.component.scss']
})
export class ChNavMenuComponent implements OnInit {
  menubarList = [];
  isColl: boolean;
  sidebarColl: any;
  constructor(private Store: Store<any>) { }

  ngOnInit() {
    this.menubarList = [
      { icon: 'fa-bell-o', options: ['Normal', 'Normal', 'Small'], },
      { icon: 'fa-envelope-o', options: ['Normal', 'Normal', 'Small'] },
      { options: ['登录', '退出'], title: 'zChange' }
    ];
  }

  changeCollapse() {
    const unSub = this.Store.select('sidebar').subscribe(data => {
      this.isColl = Boolean(data);
    });
    this.isColl ? this.Store.dispatch({ type: COLLAPSED }) : this.Store.dispatch({ type: NORMAL });
    unSub.unsubscribe();
  }
}
