import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'ch-pagination',
  templateUrl: './ch-pagination.component.html',
  styleUrls: ['./ch-pagination.component.scss']
})
export class ChPaginationComponent {
  @Input() total = 0;
  @Input() pageIndex = 1;
  @Input() preLink = '«';
  @Input() nextLink = '»';
  @Input() pageSize = 10;
  @Input() size: string;
  @Output() changePageIndex = new EventEmitter<any>();
  count = 5;
  showPages = [];
  totalPage: number;

  ngOnChanges() {
    this.pageIndex = Number(this.pageIndex);
    this.totalPage = this.getPageTotal();
    this.createPageArray();
  }

  skipPre() {
    if (this.hasPre) {
      this.pageIndex = this.pageIndex - 1;
      this.createPageArray();
      this.onChangePageIndex(this.pageIndex);
    }
  }

  skipNext() {
    if (this.hasNext) {
      this.pageIndex = this.pageIndex + 1;
      this.createPageArray();
      this.onChangePageIndex(this.pageIndex);
    }
  }

  selectPage(page) {
    if (this.pageIndex !== page) {
      this.pageIndex = page;
      this.createPageArray();
      this.onChangePageIndex(this.pageIndex);
    }

  }

  onChangePageIndex(page) {
      this.changePageIndex.emit(page);
  }

  createPageArray() {
    const index = this.pageIndex;
    if (this.totalPage < this.count) {
      this.showPages = new Array<number>(this.totalPage).fill(0).map((_a, i) => i + 1);
      return;
    }
    this.showPages = this.getPagesRange();
  }

  getPagesRange() {
    const showPages = [this.pageIndex];
    let star = this.pageIndex - 1;
    let ent = this.pageIndex + 1;

    const leftRange = index => index < 1;
    const rightRange = index => index > this.totalPage;
    const pagesLengthRange = len => len.length >= this.count;

    while (!pagesLengthRange(showPages)) {
      if (!leftRange(star)) {
        showPages.unshift(star--);
      }

      if (!rightRange(ent)) {
        showPages.push(ent++);
      }
    }

    return showPages;
  }

  getPageTotal() {
    return Math.ceil(this.total / this.pageSize);
  }

  hasPre() {
    return this.pageIndex > 1;
  }

  hasNext() {
    return this.pageIndex < this.totalPage;
  }

}
