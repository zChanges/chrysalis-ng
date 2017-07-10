import { Component, TemplateRef, QueryList, ContentChildren, AfterContentInit } from '@angular/core';
import { ChTabComponent } from './tab.component';
// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition,
//   AnimationEvent,
//   keyframes
// } from '@angular/animations';


@Component({
  selector: 'ch-tabs',
  templateUrl: './ch-tabs.component.html',
  styleUrls: ['./ch-tabs.component.scss'],
  // animations: [
  //   trigger('flyInOut', [
  //     state('in', style({transform: 'translateX(0)'})),
  //     transition('void => *', [
  //     style({
  //       opacity: 1,
  //       transform: 'translateX(100%)'
  //     }),
  //     animate('0.5s ease-in')
  //     ]),
  //     transition('* => void', [
  //     animate('0.5s ease-out', style({
  //       opacity: 1,
  //       transform: 'translateX(-100%)'
  //     }))
  //   ])
  //     // transition('void => *', [
  //     //   animate(500, keyframes([
  //     //     style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
  //     //     style({opacity: 1, transform: 'translateX(100%)',  offset: 1.0})
  //     //   ]))
  //     // ]),
  //     // transition('* => void', [
  //     //   animate(300, keyframes([
  //     //     style({opacity: 1, transform: 'translateX(100%)',     offset: 0}),
  //     //     style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
  //     //   ]))
  //     // ])
  //   ])
  // ]
})
export class ChTabsComponent implements AfterContentInit {
  activeTab: string;
  @ContentChildren(ChTabComponent) tabs: QueryList<ChTabComponent>;
  constructor() { }
  ngAfterContentInit() {
    this.activeTab = this.tabs.first.id;
  }

  onSelect(id: string) {
    const tab = this.tabs.find(item => item.id === id);
    if (tab && !tab.disable) {
      this.activeTab = id;
    }
  }



}