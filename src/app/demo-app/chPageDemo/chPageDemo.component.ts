import { Component } from '@angular/core';

@Component({
  selector: 'chPageDemo',
  templateUrl: './chPageDemo.component.html',
  styleUrls: ['./chPageDemo.component.scss']
})
export class ChPageDemoComponent {
  total = 50;
  pageSize = 10;
  pageIndex = 1;
  onPageIndexChange(event) {
    this.pageIndex = event;
  }
}