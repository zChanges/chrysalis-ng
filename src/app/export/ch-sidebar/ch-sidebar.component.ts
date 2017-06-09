import { Component, OnInit, HostListener, Input } from '@angular/core';
import { layoutSize } from './../../global.config';

@Component({
  selector: 'ch-sidebar',
  templateUrl: './ch-sidebar.component.html',
  styleUrls: ['./ch-sidebar.component.scss']
})
export class ChSidebarComponent implements OnInit {

  @Input() menuList: any[];
  isCollapse = false;
  lockState = false;

  @HostListener('window:resize')
  onwindwoResize(): void {
    if (this.lockState) { return; };
    const isSidebarCollapse = this.isSidebarCollapse();
    if (this.isCollapse !== isSidebarCollapse) {
      this.isCollapse = isSidebarCollapse;
    }
  }

  ngOnInit() {
    this.isCollapse = this.isSidebarCollapse();
  }

  private isSidebarCollapse(): boolean {
    return window.innerWidth <= layoutSize.widthCollapseSidebar;
  }

  onToggleCollapse (event) {
    this.isCollapse = event;
    this.lockState = !event;
  }

}

