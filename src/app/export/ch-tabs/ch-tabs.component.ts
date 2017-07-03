import { Component, TemplateRef, QueryList, ContentChildren, AfterContentInit } from '@angular/core';
import { ChTabComponent } from './tab.component';

@Component({
  selector: 'ch-tabs',
  templateUrl: './ch-tabs.component.html',
  styleUrls: ['./ch-tabs.component.scss']
})
export class ChTabsComponent implements AfterContentInit {
  activeTab: string;
  @ContentChildren(ChTabComponent) tabs: QueryList<ChTabComponent>;
  constructor() { }
  ngAfterContentInit() {
    console.log(this.tabs);
    this.activeTab = this.tabs.first.id;
  }

  onSelect(id: string) {
    const tab = this.tabs.find(item => item.id === id);
    if (tab && !tab.disable) {
      this.activeTab = id;
    }
  }



}