import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { chrysalisConfig } from '../chrysalis-config';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/throttleTime';


@Component({
  selector: 'ch-sidebar',
  templateUrl: './ch-sidebar.component.html',
  styleUrls: ['./ch-sidebar.component.scss']
})
export class ChSidebarComponent implements OnInit {

  @Input() menuList: any[];
  @Input() isFixed = true;
  isCollapse: any;
  lockState = true;
  resizeSub: Subject<any> = new Subject<any>();

  constructor(private chryConfig: chrysalisConfig, private Store: Store<any>) { }

  @HostListener('window:resize')
  onwindwoResize(): void {
    if (this.lockState) {
      this.resizeSub.next();
    } else {
      if (!this.isSidebarCollapse()) {
        this.lockState = true;
      }
    }
  }

  ngOnInit() {
    this.sidebarCollapse();
    this.isCollapse = this.Store.select('sidebar');
    this.resizeSub.throttleTime(200).subscribe(() => {
      this.sidebarCollapse();
    });
  }

  private sidebarCollapse() {
    window.innerWidth <= this.chryConfig.layoutSize.widthCollapseSidebar ? this.Store.dispatch({ type: this.chryConfig.COLLAPSED }) : this.Store.dispatch({ type: this.chryConfig.NORMAL });
  }

  private isSidebarCollapse() {
    return window.innerWidth <= this.chryConfig.layoutSize.widthCollapseSidebar;
  }

  onToggleCollapse(event) {
    this.lockState = event;
  }


}

