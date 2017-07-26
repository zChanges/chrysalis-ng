import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChrysalisNgModule, chrysalisConfig } from './export';
import { routes } from './app.routing';

import { StoreModule } from '@ngrx/store';
import { sidebarReducer } from './reducers/re-sidebar';
import {
  SharedCaseComponent,
  ExampleCodeComponent,
  ExampleContentComponent,
  DemoConfigService,
  MetamorphoseComponent,
} from './shared';


import {
  ChSidebarDemoModule,
  ChNavMenuDemoModule,
  ChPageDemoModule,
  ChPaginationDemoModule,
  ChTabsDemoModule,
  ChBadgeDemoModule,
  ChNotificationDemoModule,
  ChLoadingDemoModule
} from './demo-app';




@NgModule({
  declarations: [
    AppComponent,
    SharedCaseComponent,
    ExampleCodeComponent,
    ExampleContentComponent,
    MetamorphoseComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.provideStore({ sidebar: sidebarReducer }),
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ChrysalisNgModule,
    ChSidebarDemoModule,
    ChNavMenuDemoModule,
    ChPageDemoModule,
    ChPaginationDemoModule,
    ChTabsDemoModule,
    ChBadgeDemoModule,
    ChNotificationDemoModule,
    ChLoadingDemoModule
  ],
  providers: [DemoConfigService, chrysalisConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
