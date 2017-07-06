import { Component, ViewChild, ElementRef, HostListener, Input } from '@angular/core';
import * as $ from 'jquery';
// import * as bootstrap from 'bootstrap';
@Component({
  selector: 'ch-navMenuItem',
  templateUrl: './navMenuItem.component.html',
  styleUrls: ['./navMenuItem.component.scss']
})
export class NavMenuItemComponent {
  // @ViewChild('dropdownMenu') menu: ElementRef;
  @Input() menubarList: any[];
  constructor(private elementRef: ElementRef) { };

  // @HostListener('document:click', ['$event.target'])
  // domClick(targetElement) {
  //   const isfocusDoc = this.elementRef.nativeElement.contains(targetElement);
  //   if (!isfocusDoc) {
  //     $('.ch-dropdown-toggle').addClass('hide');
  //   }
  // }

  // toggleMenu(event) {
  //   const childBar = $(event.currentTarget).find('.ch-dropdown-toggle');
  //   $(event.currentTarget).siblings().find('.ch-dropdown-toggle').addClass('hide');
  //   $(childBar).toggleClass('hide');
  // }

}
