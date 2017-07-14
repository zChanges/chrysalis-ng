# chrysalis-ng(pagination) 
[预览效果][1]

# ch-pagination
`import { ChPaginationModule } from 'chrysalis-ng';`
## Directives
`Selector: ch-pagination`
## 说明API
| Name | Description |
| ------ | ------ |
| @Input() total | 总条数 |
| @Input() pageIndex | 当前页码 |
| @Input() preLink | 上一页按钮 默认 '«' |
| @Input() nextLink | 上一页按钮 默认 '»' |
| @Input() pageSize | 一页多少条 默认10 |
| @Input() size | 分页显示的大小样式 'sm'和'lg' 不设置则为默认大小 |
| @Output() changePageIndex | 点击按钮触发的事件 |

## 知识点
### @Input()
>`Input`属性装饰器，用来定义组件内的输入属性；主要是用来实现父组件向子组件传递数据的；

### ngOnChanges
> `ngOnChanges`主要用来监听组件输入属性的变化；当绑定数据的值发生变化，angular会自动调取`ngOnChanges`方法，并会获取到`SimpleChanges`对象，它包括属性的新旧值；

### @OutPut() 
> `Output`属性装饰器，用来定义组件内的输出属性，主要是用来实现子组件将信息通过事件发送到父组件中；

### EventEmitter 
> `EventEmitter`用来触发自定义事件；可以通过`emit(value)`向父组件发送值；
 
## 实现:

> 上一页、下一页和选中页码数都很简单,只要改变`this.pageIndex`值再重新排列下页码数组`showPages[]`;
>触发点击后通过`EventEmitter`去`emit(vlue)`值给父组件；当输入属性Input改变后通过`ngOnChanges`去重新计算`totalPage`和重排页码数组`createPageArray()`;

> 重排页码`createPageArray()`

```typescript 

this.totalPage:通过total/pageSiez值算出来的页码；
this.count:默认页面数为5；最多只显示5个页码；
1.如果 `totalPage < count` 就只显示`totalPage`为最大的页码；
这里可以用es6的`Array.fill(value)`可以为数组填充成员，填充长度为数组长度；
填充长度为totalPage；填充的成员为不重要可以为任何值；主要后面会采用map遍历数组，重新赋值，从1开始直至map结束；
2.否则就调用getPagesRange()
这里会设置开始值star、末尾值end；每次会自增或自减；
范围值leftRange、rightRange和pagesLengthRange，最小不能小于1，最大不能大于totalPage值；
pagesLengthRange页码不能超过count为5;
通过while循环只要pagesLengthRange范围不超过5就进入循环；
循环体内star不小于1就star--自减后在数组的前面插入值
继续ent值不大于totalPage就自增，随后在数组最后插入值；
当满足条件就会一直循环直至pagesLengthRange页码超过count停止循环。
```




### ch-pagination.html
```html
<ul class="pagination {{size? 'pagination-' + size : '' }}">
  <li *ngIf="pageIndex > 1" (click)="skipPre()"><a><span>{{preLink}}</span></a></li>
  <li *ngIf="showPages[showPages.length - 1] > count" (click)="selectPage(1)"><a>1</a></li>
  <li class="disabled" *ngIf="showPages[showPages.length - 1] > count"><a>...</a></li>
  <li *ngFor="let item of showPages" [ngClass]="{'active': item == pageIndex}" (click)="selectPage(item)"><a >{{item}}</a></li>
  <li class="disabled" *ngIf="showPages[showPages.length - 1] < totalPage"><a>...</a></li>
  <li  *ngIf="pageIndex < totalPage" (click)="skipNext()"><a><span>{{nextLink}}</span></a></li>
</ul>
```

### ch-pagination.ts
```typescript
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
```


[1]: https://zchanges.github.io/chrysalis-ng/#/component/Pagination



