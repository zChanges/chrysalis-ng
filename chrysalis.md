# Chrysalis/tabs

```typescript
知识点
1.ng-template && ng-container(NgTemplateOutlet )
2.ContentChild && ContentChildren && ng-content
3.'[ng-template[chTabTitle]]'
4.templateRef和ViewContainerRef
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



## 具体实现
> ch-tabs主要难点是如何实现插入内容。可以通过ng-template来实现

>1.通过ngTemplateOutlet可以插入对应的内嵌视图，这里创建一个子组件tab.

>2.子组件中可以传入id，title，disable等属性，title可以直接通过直接传入也可以通过ng-template传入，在子组件中通过@ContentChild()装饰器来投影TabContentDirective和TabTitleDirective指令，而TabContentDirective和TabTitleDirective指令可以通过ng-template获取到templateRef的实例，

>3.在父组件tabs中通过@ContentChildren()装饰器获取到子组件的所有属性及templateRef。

>总流程：ng-tab子组件传入id、title、disable，也可以通过ng-template contentTpl和titleTpl指令投影对象的模板，ng-tabs中通过@ContentChildren()获取到所有模板后遍历显示出来。

>需要注意的是在TabContentDirective和TabTitleDirective指令中必须注入templateRef，不然会获取不到templateRef的实例



```html
<ch-tabs>
  <ch-tab id="html">
    <ng-template chTabTitle>
      html
    </ng-template>
    <ng-template chTabContent>
      HTML---
    </ng-template>
  </ch-tab>

  <ch-tab id="typescript" title="typescript">
    <ng-template chTabContent>
      typescript---
    </ng-template>
  </ch-tab>

  <ch-tab id="scss" title="scss" disable="false">
    <ng-template chTabContent>
      scss---
    </ng-template>
  </ch-tab>
</ch-tabs>
```
```html
（ch-tabs 父）
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

```typescript
（ch-tabs 父）
import { Component, TemplateRef, QueryList, ContentChildren, AfterContentInit } from '@angular/core';
import { ChTabComponent } from './tab.component';
@Component({
  selector: 'ch-tabs',
  templateUrl: './ch-tabs.component.html',
  styleUrls: ['./ch-tabs.component.scss']
})
export class ChTabsComponent implements AfterContentInit {
  activeTab: string;
  @ContentChildren(ChTabComponent) tabs: QueryList<ChTabComponent>;
  constructor() { }
  ngAfterContentInit() {
    this.activeTab = this.tabs.first.id;
  }

  onSelect(id: string) {
    const tab = this.tabs.find(item => item.id === id);
    if (tab && !tab.disable) {
      this.activeTab = id;
    }
  }
}
```

```typescript
(ch-tab 子)
import { Component, Input, ContentChild, AfterContentInit } from '@angular/core';
import { TabContentDirective } from './tab-content.directive';
import { TabTitleDirective } from './tab-title.directive';

@Component({
  selector: 'ch-tab',
  template: '',
})
export class ChTabComponent implements AfterContentInit {
  @Input() id: string;
  @Input() title: string;
  @Input() disable = false;
  @ContentChild(TabContentDirective) contentTpl: TabContentDirective;
  @ContentChild(TabTitleDirective) titleTpl: TabTitleDirective;
  constructor() {
  }
  ngAfterContentInit() {
  }
}
```

```typescript
(TabContentDirective指令)
import { Directive, TemplateRef } from '@angular/core';
@Directive({
  selector: '[ng-template[chTabContent]]'
})
export class TabContentDirective {
  constructor(private templateRef: TemplateRef<any>) { }
}
```
