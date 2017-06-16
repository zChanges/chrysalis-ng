import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'ch-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'chrysalis/ng';
  menuList = [];
  ngOnInit() {
  }
}
