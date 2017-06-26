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
  ChSidebarDemoModule,
  ChNavMenuDemoModule,
  ChPageDemoModule,
  ChPaginationDemoModule
} from './demo-app';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore({ sidebar: sidebarReducer }),
    FormsModule,
    HttpModule,
    ChrysalisNgModule,
    ChSidebarDemoModule,
    ChNavMenuDemoModule,
    ChPageDemoModule,
    ChPaginationDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
