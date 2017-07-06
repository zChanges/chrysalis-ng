import { Directive, Renderer2, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[chDropdown]'
})
export class DropdownDirective {
  active = false;
  stateCss = 'open';
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  onDocHostClick($event) {
    console.log(this.elementRef.nativeElement.contains($event.target));
    const isContains = this.elementRef.nativeElement.contains($event.target);
    if (!isContains) {
      this.active = false;
      this.changeHostState();
    }
  }

  @HostListener('click', ['$event'])
  onHostClick() {
   this.toggleClass();
  }

  toggleClass() {
    this.active = !this.active;
    this.changeHostState();
  }

  changeHostState() {
    if (this.active) {
      this.renderer.addClass(this.elementRef.nativeElement, this.stateCss);
      return;
    }
    this.renderer.removeClass(this.elementRef.nativeElement, this.stateCss);
  }

}
