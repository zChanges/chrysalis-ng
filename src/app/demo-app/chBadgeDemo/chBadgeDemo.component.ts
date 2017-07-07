import { Component } from '@angular/core';

@Component({
  selector: 'chBadgeDemo',
  templateUrl: './chBadgeDemo.component.html',
  styleUrls: ['./chBadgeDemo.component.scss']
})
export class ChBadgeDemoComponent {
  number= 0;
  add() {
    this.number++;
  }
}
