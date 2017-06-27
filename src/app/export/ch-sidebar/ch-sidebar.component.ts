import { Component, OnInit, HostListener, Input } from '@angular/core';
import { layoutSize } from './../../global.config';
import { Store } from '@ngrx/store';
import {NORMAL, COLLAPSED} from '../../reducers/re-sidebar';


@Component({
  selector: 'ch-sidebar',
  templateUrl: './ch-sidebar.component.html',
  styleUrls: ['./ch-sidebar.component.scss']
})
export class ChSidebarComponent implements OnInit {

  @Input() menuList: any[];
  isCollapse: any;
  lockState = false;

  constructor(private Store: Store<any>) { }

  @HostListener('window:resize')
  onwindwoResize(): void {
    // if (this.lockState) { return; };
    this.sidebarCollapse();
    this.Store.select('sidebar').subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
    this.sidebarCollapse();
    this.isCollapse = this.Store.select('sidebar');
  }

  private sidebarCollapse() {
    window.innerWidth <= layoutSize.widthCollapseSidebar ? this.Store.dispatch({ type: COLLAPSED }) : this.Store.dispatch({ type: NORMAL });
    // return window.innerWidth <= layoutSize.widthCollapseSidebar;
  }

  onToggleCollapse(event) {
    // this.lockState = !event;
  }

}

