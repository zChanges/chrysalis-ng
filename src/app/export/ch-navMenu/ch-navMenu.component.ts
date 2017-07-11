import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { chrysalisConfig } from '../chrysalis-config';
@Component({
  selector: 'ch-navMenu',
  templateUrl: './ch-navMenu.component.html',
  styleUrls: ['./ch-navMenu.component.scss']
})
export class ChNavMenuComponent {
  @Input() menubarList = [];
  @Input() title: string;
  isColl: boolean;
  sidebarColl: any;
  constructor(private chryConfig: chrysalisConfig, private Store: Store<any>) { }

  changeCollapse() {
    const unSub = this.Store.select('sidebar').subscribe(data => {
      this.isColl = Boolean(data);
    });
    this.isColl ? this.Store.dispatch({ type: this.chryConfig.COLLAPSED }) : this.Store.dispatch({ type: this.chryConfig.NORMAL });
    unSub.unsubscribe();
  }
}
