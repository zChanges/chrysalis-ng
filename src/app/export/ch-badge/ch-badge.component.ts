import { Component, Input, HostBinding } from '@angular/core';
@Component({
  selector: 'ch-badge',
  template: '',
})
export class ChBadgeComponent {
  css = ' badge badgePosition';
  num: number;

  @Input() max = 99;
  @HostBinding('class') @Input() set cssClass(css) {
    this.css = css + this.css;
  }
  get cssClass() {
    return this.css;
  }

  @HostBinding('innerText') @Input() set text(num) {
    this.num = isNaN(num) ? num : Number(num);
    const surplusText = this.max + '+';
    let number;
    this.num > this.max ? number = surplusText : number = this.num;
    this.num = number;
  }

  get text() {
    return this.num;
  }
  /**
   * 
   */
}
