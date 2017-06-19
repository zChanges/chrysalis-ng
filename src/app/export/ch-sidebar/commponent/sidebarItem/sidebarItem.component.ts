import { Component, Input, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'sidebarItem',
  templateUrl: './sidebarItem.component.html',
  styleUrls: ['./sidebarItem.component.scss']
})
export class SidebarItemComponent {
  arrows = false;
  @Input() isCollapse: boolean;
  @Input() menuItem: any;
  @Output() toggleCollapse= new EventEmitter<any>();

  onToggleSub(event) {
    const sildebar = $(event.currentTarget.nextSibling).next();
    if (!this.isCollapse) {
        this.arrows = !this.arrows;
        sildebar.stop().slideToggle();
    }else {
      this.toggleCollapse.emit(false);
    }
  }
}