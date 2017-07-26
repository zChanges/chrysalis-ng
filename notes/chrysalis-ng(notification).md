# chrysalis-ng(notification) 
[预览效果][1]

# ch-notification
`import { ChNotificationModule } from 'chrysalis-ng';`
## Directives
`Selector: ch-notification`
## 说明API
| Name | Description |
| ------ | ------ |
| @Input() messages | [{type:'string',titel:'string',text:'string',remain?:boolean}] |

```typescript
type: 'success' | 'info' | 'warn' | 'error'; 通知类型
titel: string; 标题
text: string; 通知内容
remain?: boolean; 是否停留， 默认false
```


## 知识点
…………
 
## 实现:
### ch-notification.ts
```typescript
import { Component, Input, AfterViewInit, OnDestroy, OnChanges } from '@angular/core';
@Component({
  selector: 'ch-notification',
  templateUrl: './ch-notification.component.html',
  styleUrls: ['./ch-notification.component.scss']
})
export class ChNotificationComponent implements AfterViewInit, OnDestroy, OnChanges {

  time = 1000;
  @Input() messages = [];
  Interval: any;

  ngAfterViewInit() {
    if (this.messages && this.messages.length > 0) {
      this.aotDisappear();
    }
  }

  remove(index: number, msgEl: any) {
    this.messages.splice(index, 1);
  }

  aotDisappear() {
    if (this.Interval) {
      clearInterval(this.Interval);
    }

    this.Interval = setInterval(() => {
      this.messages.forEach((item, index) => { if (!item.remain) { this.messages.splice(index, 1); }; });
      const len = this.messages.filter((item) => { return item.remain === true; });
      if (len.length < 1) { clearInterval(this.Interval); };
    }, this.time);
  }
  
  ngOnDestroy() {
    if (this.Interval) {
      clearInterval(this.Interval);
    }
  }

  ngOnChanges() {
    if (this.messages.length > 0) {
      this.aotDisappear();
    }
  }
}

```
### ch-notification.html
```html
<div class="ch-notice">
    <div #msgEl class="notice-content" *ngFor="let item of messages; let i = index" 
      [ngClass]="{
        'ch-notice-success': item.type == 'success',
        'ch-notice-info': item.type == 'info',
        'ch-notice-warn': item.type == 'warn',
        'ch-notice-error': item.type == 'error'
       }"
    >
      <a class="notice-close" (click)="remove(i,msgEl)"><i class="fa fa-times"></i></a>
      <span class="notice-image fa fa-fw fa-2x"
       [ngClass]="{
         'fa-check': item.type == 'success',
         'fa-info-circle': item.type == 'info',
         'fa-warning': item.type == 'warn',
         'fa-close': item.type == 'error'
        }"
      ></span>
      <div class="notice-message-item">
        <span class="notice-titel">{{item.title}}</span>
        <p>{{item.text}}</p>
      </div>
    </div>
</div>
```


  [1]: https://zchanges.github.io/chrysalis-ng/#/component/Notification