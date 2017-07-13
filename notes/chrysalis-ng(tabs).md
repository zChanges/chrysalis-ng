# chrysalis-ng(badge) 
[预览效果][1]

# ch-tabs
`import { ChTabsModule } from 'chrysalis-ng';`

## Directives
`Selector: ch-tabs`
`Selector: ch-tab`

## Properties
**ch-tab:**
| Name | Description |
| ------ | ------ |
| @Input() id | 匹配选中tab页状态值 (any) |
| @Input() title | tab标题 (string) |
| @Input() disabled | 是否可切换tab页 (boolean) 默认值:false|
| @ContentChild() contentTpl | 获取视图中的匹配元素；如Component中的属性|
| @ContentChild() titleTpl | 获取视图中的匹配元素；如Component中的属性|

contentTpl
## knowledge point
> 以标签形式`<></>`为`ContentChildren`； 在组件以内容或组件的一部分为`ViewChildren`
  `ContentChildren`是通过内容投射获取匹配元素的；`ViewChildren`是从模板视图中获取匹配元素的
### ng-content: `ng-content`和ng1中的`ng-transclude`一致；通过内容投射方式，嵌入模板代码。
### @ContentChild()
 - `@ContentChild()` 属性装饰器，通过内容投射方式(content Projection)的视图中获取匹配的元素
```typescript
//child
import { Component } from '@angular/core';
@Component({
    selector: 'app-child',
    template: `
      <p>Child Component</p>  
    `
})
export class ChildComponent {
    name: string = 'app-child';
}

//app-contentChild
import { Component, ContentChild, AfterContentInit } from '@angular/core';
import { ChildComponent } from './../child/child.component';
@Component({
  selector: 'app-contentChild',
  template: `
  <p> contentChild works! <ng-content></ng-content> </p>
  `
})
export class ContentChildComponent implements AfterContentInit {
  @ContentChild(ChildComponent)
  child: ChildComponent;
  ngAfterContentInit() {
    console.dir(this.child); //ChildComponent { name: 'app-child' }
  }
}
```

### @ContentChildren()
 - @ContentChildren()属性装饰器，通过内容投射方式(content Projection)的视图中获取匹配多个元素，返回一个`QueryList`集合
```typescript
import { Component,AfterContentInit, ContentChildren,QueryList } from '@angular/core';
import { ChildComponent } from './../child/child.component';

@Component({
  selector: 'app-contentChild',
  templateUrl: './contentChild.component.html',
  styleUrls: ['./contentChild.component.css']
})
export class ContentChildComponent implements AfterContentInit {
  @ContentChildren(ChildComponent)
  childDren: QueryList<ChildComponent>;

  ngAfterContentInit() {
    console.dir(this.childDren);
    //QueryList{_results:Array(2)[ChildComponent][ChildComponent]}
  }
}
```
### ng-template
`ng-template`:用来定义模板，如果不进行处理，不会生成DOM
```html
//不显示
<ng-template>
   template
</ng-template>

//显示
<ng-template [ngIf]="true">
   template
</ng-template>
```
### ng-container
`ng-container`:逻辑容器，不会生成有额外的DOM节点，可用于避免添加额外的元素来使用结构指令；如：`<ng-container *ngFor='let item of list'>`
```html
//ng-template采用[ngIf]="true";风格不统一；可以采用ng-container
<ng-container *ngIf="true">
    In template, no attributes.
</ng-container>
```

### ngTemplateOutlet
`NgTemplateOutlet `:指令是基于TemplateRef 对象的，插入对应的内嵌视图





  [1]: https://zchanges.github.io/chrysalis-ng/#/component/Tabs