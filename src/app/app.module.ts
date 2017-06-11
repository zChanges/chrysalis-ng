import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChrysalisNgModule } from './export';
import { routes } from './app.routing';
import {
  ChSidebarDemoModule,
  ChNavMenuDemoModule
} from './demo-app';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    ChrysalisNgModule,
    ChSidebarDemoModule,
    ChNavMenuDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
