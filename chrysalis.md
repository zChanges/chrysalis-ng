# Chrysalis/tabs
```typescript
思路

```

```typescript
知识点
1.ng-template && ng-container(NgTemplateOutlet ) 区别及作用
2.ContentChild && ContentChildren 区别及作用（QueryList作用）
3.selector: '[ng-template[chTabTitle]]' 作用
```
## ng-template && ng-container 及 NgTemplateOutlet
> ng-template 定义模板，通过*语法糖的结构指令，可以转换位模板指令，模板内的内容不做处理是不会生成DOM的。

### ng-template
```html
<ng-template>
    <p>
        In template, no attributes.
    </p>
</ng-template>
<ng-container>
    <p>
        In ng-container, no attributes.
    </p>
</ng-container>

ng-template 不做处理，只显示 In ng-container, no attributes.的内容

如添加[ngIf]='true'可显示
<ng-template [ngIf]="true">
    <p>
        In template, no attributes.
    </p>
</ng-template>
```
### ng-container
> ng-container 是个容器，不会生成有额外的DOM节点，可用于避免添加额外的元素来使用结构指令

```html
<ng-container *ngIf="true">
    <p>
        In template, no attributes.
    </p>
</ng-container>
上面采用ng-template是可以解决显示的问题，但是[ngIf]格式不太统一，就可以用ng-container
ng-container不会产生多余的DOM节点。可用于*ngIf *ngFor等结构指令
```

### NgTemplateOutlet
> NgTemplateOutlet 指令是基于TemplateRef 对象的，插入对应的内嵌视图


### [ng-template[chTabTitle]]
> 个人理解:在directive中,基于ng-template的chTabTitle名的指令，并注入TemplateRef，可通过TemplateRef实例来创建ng-template模板元素

>TemplateRef

```typescript
import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ng-template[chTabContent]]'
})
export class TabContentDirective {

  constructor(private templateRef: TemplateRef<any>) { }
}
```



## 具体实现(思路)
```html
<ul class="nav nav-tabs ">  
    <li *ngFor="let tab of tabs" [ngClass]="{active: tab.id == activeTab}" [class.disabled]="tab.disable">
      <a (click)="onSelect(tab.id)">
        <ng-template *ngIf="!tab.title" [ngTemplateOutlet]="tab.titleTpl?.templateRef"> </ng-template>
        <span *ngIf="tab.title">{{tab.title}}</span>
      </a>  
    </li>  
</ul>  
<div class="tab-content">   
  <ng-container *ngFor="let tab of tabs">
    <div class="tab-pane active" *ngIf="tab.id == activeTab">  
       <ng-template [ngTemplateOutlet]="tab?.contentTpl?.templateRef"> </ng-template>
    </div> 
  </ng-container>
</div>  


```