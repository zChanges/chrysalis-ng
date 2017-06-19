import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chPageDemo',
  templateUrl: './chPageDemo.component.html',
  styleUrls: ['./chPageDemo.component.scss']
})
export class ChPageDemoComponent implements OnInit {
  total = 1001;
  pageSize = 10;
  pageIndex = 1;
  constructor() { }

  ngOnInit() {
  }
  onPageIndexChange(event) {
    this.pageIndex = event;
  }

}