# chrysalis-ng(badge) 
[预览效果][1]

# ch-badge(徽章)
`import { ChBadgeModule } from 'chrysalis-ng';`
## Directives
`Selector: ch-badge`
## 说明API
| Name | Description |
| ------ | ------ |
| @Input() text | 'string' or 'number' 显示的文字 |
| @Input() max | 最大值，大于max值后显示如99+，默认值99 |
| @Input() cssClass | 添加样式如'red' |

## 知识点

### set() get()
- `set() get()` 访问修饰符 `set`设置不用返回； `get`得到 需要返回；

### @HostBinding()
- `@HostBinding()` 属性装饰器，设置宿主元素的属性值
    ```typescript
    // attr.id （id:属性名,如disabled……）
    @HostBinding('attr.id') role = 'hostId';
    
    // class.active (active:class属性，设置boolean添加或不添加cssClass属性)
    @HostBinding('class.active') isactive: boolean;
    
    ```
### @HostListener()
- `@HostListener()` 属性装饰器，给宿主元素添加事件监听

    ```typescript
    @HostListener('click', ['$event.target']) onClick($event: HTMLElement) {。。。}
    @HostListener('window:resize') onResize(){...}
    @HostListener('mousedown') onDown() {...}
    @HostListener('mouseup') onUp() {...}
    
    ```
 
## 实现:
```typescript
/**
 * 设置默认css、max=99；
 * 通过@HostBinding装饰器添加css， set方法添加默认的css样式。get返回处理过的css
 * 通过@HostBinding装饰器添加innerText，set方法设置max值显示怎样的结果，get方法返回set后的num值。
 */
import { Component, Input, HostBinding } from '@angular/core';
@Component({
  selector: 'ch-badge',
  template: '',
})
export class ChBadgeComponent {
  css = ' badge badgePosition';
  num: number;
  // max
  @Input() max = 99;
  
  // cssClass
  @HostBinding('class') @Input() set cssClass(css) {
    this.css = css + this.css;
  }
  get cssClass() {
    return this.css;
  }
  
  // text
  @HostBinding('innerText') @Input() set text(num) {
    this.num = isNaN(num) ? num : Number(num);
    const surplusText = this.max + '+';
    let number;
    this.num > this.max ? number = surplusText : number = this.num;
    this.num = number;
  }
  get text() {
    return this.num;
  }
}
```


  [1]: https://zchanges.github.io/chrysalis-ng/#/component/Badge