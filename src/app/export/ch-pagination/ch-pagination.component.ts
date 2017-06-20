import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'ch-pagination',
  templateUrl: './ch-pagination.component.html',
  styleUrls: ['./ch-pagination.component.scss']
})
export class ChPaginationComponent {
  @Input() totalNumber = 100;
  @Input() pageIndex = 1;
  @Input() preLink = '«';
  @Input() nextLink = '»';
  @Input() showPages = [];
  @Input() pageSize: number = 10;
  count = 5;
  totalPage: number;
  constructor() {
    this.createPageArray();
    this.totalPage = this.getPageTotal();
  }

  ngOnChanges() {
    this.totalPage = this.getPageTotal();
  }

  skipPre() {
    if (this.hasPre) {
      this.pageIndex = this.pageIndex - 1;
    }
  }

  skipNext() {
    if (this.hasNext) {
      this.pageIndex = this.pageIndex + 1;
      this.createPageArray();
    }
  }

  createPageArray() {
    const index = this.pageIndex;
    if (index < this.count) {
      this.showPages = new Array<number>(this.count).fill(index).map((_a, i) => i + 1);
      return;
    }
    this.showPages = this.getPagesRange();
  }

  getPagesRange() {
    const index = this.pageIndex - 2;
    return new Array<number>(this.count).fill(index).map((_a, i) => _a + i);
  }




  getPageTotal() {
    return Math.ceil(this.totalNumber / this.pageSize);
  }

  hasPre() {
    return this.pageIndex > 1;
  }

  hasNext() {
    return this.pageIndex < this.totalPage;
  }

}
