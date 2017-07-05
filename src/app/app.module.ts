import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChrysalisNgModule } from './export';
import { routes } from './app.routing';

import { StoreModule } from '@ngrx/store';
import { sidebarReducer } from './reducers/re-sidebar';
import {
  SharedCaseComponent,
  ExampleCodeComponent,
  DemoConfigService
} from './shared';

import {
  ChSidebarDemoModule,
  ChNavMenuDemoModule,
  ChPageDemoModule,
  ChPaginationDemoModule,
  ChTabsDemoModule
} from './demo-app';



@NgModule({
  declarations: [
    AppComponent,
    SharedCaseComponent,
    ExampleCodeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{useHash: true}),
    StoreModule.provideStore({ sidebar: sidebarReducer }),
    FormsModule,
    HttpModule,
    ChrysalisNgModule,
    ChSidebarDemoModule,
    ChNavMenuDemoModule,
    ChPageDemoModule,
    ChPaginationDemoModule,
    ChTabsDemoModule
  ],
  providers: [DemoConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
