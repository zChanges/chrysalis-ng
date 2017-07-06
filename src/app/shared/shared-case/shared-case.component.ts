import { Component, OnInit } from '@angular/core';
import { DemoConfigService } from './../../shared';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'ch-shared-case',
  templateUrl: './shared-case.component.html',
  styleUrls: ['./shared-case.component.scss']
})
export class SharedCaseComponent implements OnInit {

  contents: any;
  constructor(
    private demoConfigService: DemoConfigService,
    private activatedRoute: ActivatedRoute
    ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
        this.contents = this.demoConfigService.components.filter(cmp => {
          return cmp.name === params.name;
        }).map(cmp => {
          return cmp;
        });
    });
  }

}
