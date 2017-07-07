import { Component, Input, HostBinding } from '@angular/core';
@Component({
  selector: 'ch-badge',
  template: '',
})
export class ChBadgeComponent {
  css = ' badge badgePosition';
  num: number;
  @HostBinding('class') @Input() set cssClass(css) {
    this.css = css + this.css;
  }
  get cssClass() {
    return this.css;
  }
  @HostBinding('innerText') @Input() set text(num) {
    this.num = Number(num);
  }

  get text() {
    let number;
    this.num > 99 ? number = '..' : number = this.num;
    return number;
  }

}
