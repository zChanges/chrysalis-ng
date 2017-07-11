import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { DemoConfigService } from './../demo/demo-config.service';
import * as hljs from 'highlight.js';

@Component({
  selector: 'ch-metamorphose',
  templateUrl: './metamorphose.component.html',
  styleUrls: ['./metamorphose.component.scss']
})
export class MetamorphoseComponent implements OnInit, AfterViewInit {
  content: any;
  @ViewChild('Use')
  contentEle: ElementRef;
  @ViewChild('install')
  installEle: ElementRef;
  constructor(private demoConfigService: DemoConfigService) { }

  ngOnInit() {
    this.content = this.demoConfigService.components.filter(cmp => {
      return cmp.name === 'Use';
    });
  }

  ngAfterViewInit() {
      hljs.highlightBlock(this.contentEle.nativeElement);
      hljs.highlightBlock(this.installEle.nativeElement);
  }

}