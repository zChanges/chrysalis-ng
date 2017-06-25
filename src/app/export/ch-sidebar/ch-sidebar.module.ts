import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarItemComponent } from './commponent/sidebarItem/sidebarItem.component';
import { ChSidebarComponent } from './ch-sidebar.component';
// import { SidebarItemComponent, ChSidebarComponent} from './index';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ChSidebarComponent, SidebarItemComponent],
  declarations: [ChSidebarComponent, SidebarItemComponent]
})
export class ChSidebarModule { }
