import { Routes, RouterModule } from '@angular/router';
import {
  ChSidebarDemoComponent,
  ChNavMenuDemoComponent,
  ChPageDemoComponent,
  ChPaginationDemoComponent,
  ChTabsDemoComponent,
  ChBadgeDemoComponent,
  ChNotificationDemoComponent,
  ChLoadingDemoComponent
} from './demo-app';
import { SharedCaseComponent } from './shared/shared-case/shared-case.component';
import { MetamorphoseComponent } from './shared';


export const routes: Routes = [
  { path: '', redirectTo: 'Metamorphose', pathMatch: 'full' },
  { path: 'sidebar', component: ChSidebarDemoComponent },
  { path: 'navMenu', component: ChNavMenuDemoComponent },
  { path: 'pager', component: ChPageDemoComponent },
  { path: 'pagination', component: ChPaginationDemoComponent },
  { path: 'tabs', component: ChTabsDemoComponent },
  { path: 'Badge', component: ChBadgeDemoComponent },
  { path: 'Metamorphose', component: MetamorphoseComponent },
  { path: 'Notification', component: ChNotificationDemoComponent },
  { path: 'loading', component: ChLoadingDemoComponent },
  { path: 'component/:name', component: SharedCaseComponent, data: { reusable: true } },
];

// export const AppRoutes = RouterModule.forRoot(routes, { useHash: true });
