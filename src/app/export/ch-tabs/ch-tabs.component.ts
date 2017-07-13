import { Component, QueryList, ContentChildren, AfterContentInit } from '@angular/core';
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
    this.activeTab = this.tabs.first.id;
  }

  onSelect(id: string) {
    const tab = this.tabs.find(item => item.id === id);
    if (tab && !(tab.disabled === 'true')) {
      this.activeTab = id;
    }
  }



}