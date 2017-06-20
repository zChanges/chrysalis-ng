import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'ch-pagination',
  templateUrl: './ch-pagination.component.html',
  styleUrls: ['./ch-pagination.component.scss']
})
export class ChPaginationComponent implements OnInit {
  @Input() total = 0;
  @Input() pageIndex = 1;
  @Input() preLink = '«';
  @Input() nextLink = '»';
  @Input() showPages = [];
  constructor() { }

  ngOnInit() {
  }

  createPageArray() {
    // if (!this.totalPage) {
    //   this.showPages = [];
    //   return;
    // }

    // if (this.totalPage <= this.maxItems) {
    //   this.showPages = new Array<number>(this.totalPage).fill(0).map((_, i) => i + 1);
    //   return;
    // }
    // this.showPages = this.extractRange();
    this.showPages = new Array<number>()
  }

  getPageTotal() {

  }

}
