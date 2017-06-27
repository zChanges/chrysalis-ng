import { Component, Input, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';
import { Subject } from 'rxjs/Subject';
import { layoutSize } from '../../../../global.config';

import { Store } from '@ngrx/store';
import { NORMAL, COLLAPSED } from '../../../../reducers/re-sidebar';

@Component({
  selector: 'sidebarItem',
  templateUrl: './sidebarItem.component.html',
  styleUrls: ['./sidebarItem.component.scss']
})
export class SidebarItemComponent {
  arrows = false;
  @Input() isCollapse: boolean;
  @Input() menuItem: any;
  @Output() toggleCollapse = new EventEmitter<any>();
  constructor(private Store: Store<any>) { }

  onToggleSub(event) {


    if (this.sidebarCollapse()) {
      this.Store.dispatch({ type: NORMAL });
    }

    const destroy = this.Store.select('sidebar').subscribe(data => {
      if (data) {
        const sildebar = $(event.currentTarget.nextSibling).next();
        this.arrows = !this.arrows;
        sildebar.stop().slideToggle();
      }
    });
    destroy.unsubscribe();




  }

  private sidebarCollapse() {
    return window.innerWidth <= layoutSize.widthCollapseSidebar;
  }
}
