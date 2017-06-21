import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chPaginationDemo',
  templateUrl: './chPaginationDemo.component.html',
  styleUrls: ['./chPaginationDemo.component.scss']
})
export class ChPaginationDemoComponent implements OnInit {
  pageIndex = 1;
  total = 100;
  pageSize = 25;
  constructor() { }

  ngOnInit() { }

  onChangePageIndex(event) {
    this.pageIndex = event;
  }
}
