import { Component } from '@angular/core';

@Component({
  selector: 'chBadgeDemo',
  templateUrl: './chBadgeDemo.component.html',
  styleUrls: ['./chBadgeDemo.component.scss']
})
export class ChBadgeDemoComponent {
  number= 10;
  maxText = 8;
  add() {
    this.number++;
  }

  maxTextAdd() {
    this.maxText++;
  }
}
