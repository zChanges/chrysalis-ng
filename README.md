# Chrysalis/NG

> Chrysalis-ng 用来学习angular4的UI框架。

在线例子link:[https://zchanges.github.io/chrysalis-ng/](https://zchanges.github.io/chrysalis-ng/)

## Installation
```node
 npm install chrysalis-ng --save
```

## Use
```typescript
// AppModule
import { NgModule } from '@angular/core';
import { ChrysalisNgModule } from 'chrysalis-ng';

@NgModule({
  declarations: [AppComponent],
  imports: [ 
      BrowserModule, 
      ChrysalisNgModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Components

- [x] sidebar
- [x] navMenu
- [x] pager
- [x] pagination
- [x] tabs 
- [x] badge 

| Name | Docs |
| ------ | ------ |
| sidebar | [Docs](./notes/chrysalis-ng(sidebar).md) |
| navMenu | [Docs](./notes/chrysalis-ng(navMenu).md) |
| pager | none |
| pagination | [Docs](./notes/chrysalis-ng(pagination).md) |
| tabs | [Docs](./notes/chrysalis-ng(tabs).md) |
| badge | [Docs](./notes/chrysalis-ng(badge).md) |




## Build
* Run serve: `npm start`