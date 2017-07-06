import { Component, ViewChild, ElementRef, HostListener, Input } from '@angular/core';
@Component({
  selector: 'ch-navMenuItem',
  templateUrl: './navMenuItem.component.html',
  styleUrls: ['./navMenuItem.component.scss']
})
export class NavMenuItemComponent {
  @Input() menubarList: any[];
  constructor(private elementRef: ElementRef) { };
}
