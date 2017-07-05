import { Injectable, Type } from '@angular/core';
import {
  ChPageDemoComponent,
  ChTabsDemoComponent
} from './../../demo-app';
@Injectable()
export class DemoConfigService {

  components: { name: string, cmp?: Type<any>, directory?: string, html?: string, ts?: string, data?: any }[] = [
    {
      name: 'Pager',
      directory: 'pager',
      cmp: ChPageDemoComponent,
      html: require('!raw-loader!../../demo-app/chPageDemo/chPageDemo.component.html'),
      ts: require('!raw-loader!../../demo-app/chPageDemo/chPageDemo.component.ts'),
    },
    {
      name: 'Tabs',
      directory: 'tabs',
      cmp: ChTabsDemoComponent,
      html: require('!raw-loader!../../demo-app/chTabsDemo/chTabsDemo.component.html'),
      ts: require('!raw-loader!../../demo-app/chTabsDemo/chTabsDemo.component.ts'),
    }
  ];
}
