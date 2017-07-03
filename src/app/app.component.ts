import { Component , OnInit} from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ch-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'chrysalis/ng';
  isCollapse: any;
  menuList = [];
  constructor (private Store: Store<any>) {

  }
  ngOnInit() {
    this.isCollapse = this.Store.select('sidebar');
  }
}
