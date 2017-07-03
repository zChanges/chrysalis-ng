import { Component, Input, ContentChild, AfterContentInit } from '@angular/core';
import { TabContentDirective } from './tab-content.directive';
import { TabTitleDirective } from './tab-title.directive';

@Component({
  selector: 'ch-tab',
  template: '',
})
export class ChTabComponent implements AfterContentInit {
  @Input() id: string;
  @Input() title: string;
  @Input() disable = false;
  @ContentChild(TabContentDirective) contentTpl: TabContentDirective;
  @ContentChild(TabTitleDirective) titleTpl: TabTitleDirective;
  constructor() {
    
  }

  ngAfterContentInit() {
    console.log(this.contentTpl)
     console.log(this.titleTpl)
  }
}
