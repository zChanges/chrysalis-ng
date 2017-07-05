import {
  Component,
  Input,
  ViewChildren,
  AfterViewInit,
  QueryList,
  ElementRef,
  ViewContainerRef
} from '@angular/core';

import * as hljs from 'highlight.js';

@Component({
  selector: 'ch-exampleCode',
  templateUrl: './exampleCode.component.html',
  styleUrls: ['./exampleCode.component.scss']
})
export class ExampleCodeComponent implements AfterViewInit {
  @Input() content: any;
  @ViewChildren('html') html: QueryList<ElementRef>;
  @ViewChildren('typescript') typescript: QueryList<ElementRef>;
  constructor() { }

  ngAfterViewInit() {

    if (this.html.last) {
      hljs.highlightBlock(this.html.last.nativeElement);
    }
    this.html.changes.subscribe((html) => {
      if (html.last) {
        hljs.highlightBlock(html.last.nativeElement);
      }
    });

    this.typescript.changes.subscribe((typescript) => {
      if (typescript.last) {
        hljs.highlightBlock(typescript.last.nativeElement);
      }
    });
  }

}