import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
  ExampleContentComponent,
  DemoConfigService
} from './shared';

import {
  ChSidebarDemoModule,
  ChNavMenuDemoModule,
  ChPageDemoModule,
  ChPaginationDemoModule,
  ChTabsDemoModule,
  ChBadgeDemoModule
} from './demo-app';



@NgModule({
  declarations: [
    AppComponent,
    SharedCaseComponent,
    ExampleCodeComponent,
    ExampleContentComponent
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
    ChBadgeDemoModule
  ],
  providers: [DemoConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
