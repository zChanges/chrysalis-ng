import { Component, Input } from '@angular/core';
import * as $ from 'jquery';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'ch-MenuItem',
  templateUrl: './chMenuItem.component.html',
  styleUrls: ['./chMenuItem.component.scss']
})
export class ChMenuItemComponent {
  arrows = false;
  toggleSub: Subject<any> = new Subject<any>();

  @Input() menuItem: any;

  onToggleSub(event) {
    const sildebar = $(event.currentTarget.nextSibling).next();
    this.arrows = !this.arrows;
    sildebar.slideToggle();
    this.toggleSub.next();
  }

}


/************************************************************************************
 ****************************** 优 化 ***********************************************
 ***1.可以通过ElementRef获取child元素，在实现slideToggle的一个指令          ************
 ***********************************************************************************/
