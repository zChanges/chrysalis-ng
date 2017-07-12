import { element } from 'protractor';
import { Directive, HostListener, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[chSlideToggle]'
})
export class ChSlideToggleDirective implements AfterViewInit {
  active = false;
  state = 'overturnSub';
  index = 0;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  ngAfterViewInit() {
    // console.log(this.elementRef.nativeElement.querySelector('.active'))
  }

  @HostListener('click', ['$event'])
  onHostClick($event) {
    const isContainsParent = $event.target.contains(this.elementRef.nativeElement.querySelector('.ch-sidebar-parent'));
    const isContainsI = $event.target.contains(this.elementRef.nativeElement.querySelector('.sid-parent-i'));
    const isContainsSpan = $event.target.contains(this.elementRef.nativeElement.querySelector('.sid-parent-span'));
    const isContainsB = $event.target.contains(this.elementRef.nativeElement.querySelector('.sid-parent-b'));
    if (isContainsParent || isContainsI || isContainsSpan || isContainsB) {
      this.active = !this.active;
      this.getHeight();
      this.toggle();
    }
  }

  getHeight() {
    this.index = 0;
    const child = this.elementRef.nativeElement.querySelector('.sidebar-childlist');
    const array = child.childNodes;
    array.forEach(element => {
      if (element.nodeName === 'SIDEBARITEM') {
        this.index = this.index + 1;
      }
    });
  }



  toggle() {
    if (this.active) {
      this.renderer.addClass(this.elementRef.nativeElement, this.state);
      this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.sidebar-childlist'), 'height', (this.index * 42) + 'px');
      return;
    }
    this.renderer.removeClass(this.elementRef.nativeElement, this.state);
    this.renderer.removeStyle(this.elementRef.nativeElement.querySelector('.sidebar-childlist'), 'height');
  }
}
