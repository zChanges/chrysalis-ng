import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { chrysalisConfig } from '../../../chrysalis-config';


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
  constructor(private chryConfig: chrysalisConfig, private Store: Store<any>) { }

  onToggleSub(event) {
    if (this.sidebarCollapse()) {
      this.Store.dispatch({ type: this.chryConfig.NORMAL });
      this.toggleCollapse.emit(false);
    }
  }

  private sidebarCollapse() {
    return window.innerWidth <= this.chryConfig.layoutSize.widthCollapseSidebar;
  }
}
