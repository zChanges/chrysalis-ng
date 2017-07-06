import { Routes, RouterModule } from '@angular/router';
import {
  ChSidebarDemoComponent,
  ChNavMenuDemoComponent,
  ChPageDemoComponent,
  ChPaginationDemoComponent,
  ChTabsDemoComponent
} from './demo-app';
import { SharedCaseComponent } from './shared/shared-case/shared-case.component';


export const routes: Routes = [
  { path: '', redirectTo: 'component', pathMatch: 'full' },
  { path: 'sidebar', component: ChSidebarDemoComponent },
  { path: 'navMenu', component: ChNavMenuDemoComponent },
  { path: 'pager', component: ChPageDemoComponent },
  { path: 'pagination', component: ChPaginationDemoComponent },
  { path: 'tabs', component: ChTabsDemoComponent },
  { path: 'component/:name', component: SharedCaseComponent, data: { reusable: true } },
];

// export const AppRoutes = RouterModule.forRoot(routes, { useHash: true });
