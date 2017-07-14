import { Component, Input, ContentChild } from '@angular/core';
import { TabContentDirective } from './tab-content.directive';
import { TabTitleDirective } from './tab-title.directive';

@Component({
  selector: 'ch-tab',
  template: ''
})
export class ChTabComponent {
  @Input() id: string;
  @Input() title: string;
  @Input() disabled: boolean | string = false;
  @ContentChild(TabContentDirective) contentTpl: TabContentDirective;
  @ContentChild(TabTitleDirective) titleTpl: TabTitleDirective;
  constructor() {}

}
