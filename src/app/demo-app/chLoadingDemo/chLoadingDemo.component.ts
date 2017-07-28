import { Component, OnInit } from '@angular/core';
import { ChLoadingService } from './../../export';

@Component({
  selector: 'chLoadingDemo',
  templateUrl: './chLoadingDemo.component.html',
  styleUrls: ['./chLoadingDemo.component.scss']
})
export class ChLoadingDemoComponent implements OnInit {

  constructor(private chLoadingService: ChLoadingService) {

  }

  ngOnInit() {
  }

  close() {
    this.chLoadingService.close();
  }

}
