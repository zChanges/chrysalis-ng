import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ch-pager',
  templateUrl: './ch-pager.component.html',
  styleUrls: ['./ch-pager.component.scss']
})
export class ChPagerComponent {

  @Input() total = 0;
  @Input() pageSize = 0;
  @Output() pageIndexChange = new EventEmitter<number>();
  pageIndex = 1;
  totalPage = 1;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.total = this.getTotalPage();
    this.pageIndex = Math.max(Math.min(this.pageIndex, this.total), 1);
  }

  skipPrev() {
    if (this.isPrev()) {
      this.pageIndex = Number(this.pageIndex) - 1;
      this.onChangePageIndex(this.pageIndex);
    }
  }

  skipNext() {
    if (this.isNext()) {
      this.pageIndex = Number(this.pageIndex) + 1;
      this.onChangePageIndex(this.pageIndex);
    }
  }

  isPrev() {
    return this.pageIndex > 1;
  }

  isNext() {
    return this.pageIndex < this.getTotalPage();
  }

  private getTotalPage() {
    this.totalPage = Math.ceil(this.total / this.pageSize)
    return this.totalPage;
  }

  onChangePageIndex(pageIndex) {
    this.pageIndexChange.emit(pageIndex);
  }



}
