import { Component, OnInit, HostListener, Input } from '@angular/core';
import { layoutSize } from './../../global.config';
import { Store } from '@ngrx/store';
import { NORMAL, COLLAPSED } from '../../reducers/re-sidebar';
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
  isCollapse: any;
  lockState = false;
  resizeSub: Subject<any> = new Subject<any>();

  constructor(private Store: Store<any>) { }

  @HostListener('window:resize')
  onwindwoResize(): void {
    this.resizeSub.next();
  }




  ngOnInit() {
    this.sidebarCollapse();
    this.isCollapse = this.Store.select('sidebar');
    this.resizeSub.throttleTime(500).subscribe(() => {
      // console.log(1)
      this.sidebarCollapse();
    })
  }

  private sidebarCollapse() {
    window.innerWidth <= layoutSize.widthCollapseSidebar ? this.Store.dispatch({ type: COLLAPSED }) : this.Store.dispatch({ type: NORMAL });
  }

  onToggleCollapse(event) {
    // this.lockState = !event;
  }


}

