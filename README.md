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

## Build
* Run serve: `npm start`