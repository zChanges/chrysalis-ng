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

/************************************************************************************
 ****************************** 优 化 ***********************************************
 ***1.可以通过ElementRef获取child元素，在实现slideToggle的一个指令          ************
 ***2.通过ngrx来保存sidbar的状态                                          ************
 ***3.切换主题                                                           ************
 ***********************************************************************************/
