import { Injectable, Type } from '@angular/core';
import {
  ChNavMenuDemoComponent,
  ChPageDemoComponent,
  ChPaginationDemoComponent,
  ChSidebarDemoComponent,
  ChTabsDemoComponent,
  ChBadgeDemoComponent,
  ChNotificationDemoComponent
} from './../../demo-app';
@Injectable()
export class DemoConfigService {
  components: { name: string, cmp?: Type<any>, directory?: string, html?: string, ts?: string, }[] = [
    {
      name: 'NavMenu',
      directory: 'navMenu',
      cmp: ChNavMenuDemoComponent,
      html: require('!raw-loader!../../demo-app/chNavMenuDemo/chNavMenuDemo.component.html'),
      ts: require('!raw-loader!../../demo-app/chNavMenuDemo/chNavMenuDemo.component.ts'),
    },
    {
      name: 'Pager',
      directory: 'pager',
      cmp: ChPageDemoComponent,
      html: require('!raw-loader!../../demo-app/chPageDemo/chPageDemo.component.html'),
      ts: require('!raw-loader!../../demo-app/chPageDemo/chPageDemo.component.ts'),
    },
    {
      name: 'Pagination',
      directory: 'pagination',
      cmp: ChPaginationDemoComponent,
      html: require('!raw-loader!../../demo-app/chPaginationDemo/chPaginationDemo.component.html'),
      ts: require('!raw-loader!../../demo-app/chPaginationDemo/chPaginationDemo.component.ts'),
    },
    {
      name: 'Sidebar',
      directory: 'sidebar',
      cmp: ChSidebarDemoComponent,
      html: require('!raw-loader!../../demo-app/chSidebarDemo/chSidebarDemo.component.html'),
      ts: require('!raw-loader!../../demo-app/chSidebarDemo/chSidebarDemo.component.ts'),
    },
    {
      name: 'Tabs',
      directory: 'tabs',
      cmp: ChTabsDemoComponent,
      html: require('!raw-loader!../../demo-app/chTabsDemo/chTabsDemo.component.html'),
      ts: require('!raw-loader!../../demo-app/chTabsDemo/chTabsDemo.component.ts'),
    },
    {
      name: 'Badge',
      directory: 'badge',
      cmp: ChBadgeDemoComponent,
      html: require('!raw-loader!../../demo-app/chBadgeDemo/chBadgeDemo.component.html'),
      ts: require('!raw-loader!../../demo-app/chBadgeDemo/chBadgeDemo.component.ts'),
    },
    {
      name: 'Notification',
      directory: 'notification',
      cmp: ChNotificationDemoComponent,
      html: require('!raw-loader!../../demo-app/chNotificationDemo/chNotificationDemo.component.html'),
      ts: require('!raw-loader!../../demo-app/chNotificationDemo/chNotificationDemo.component.ts'),
    },
    {
      name: 'Use',
      directory: 'use',
      html: require('!raw-loader!../metamorphose/config.use.html')
    },

  ];
}
