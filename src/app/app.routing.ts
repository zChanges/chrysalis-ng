import { ChSidebarDemoComponent, ChNavMenuDemoComponent, ChPageDemoComponent, ChPaginationDemoComponent } from './demo-app';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'pagination', pathMatch: 'full' },
  { path: 'sidebar', component: ChSidebarDemoComponent },
  { path: 'navMenu', component: ChNavMenuDemoComponent },
  { path: 'pager', component: ChPageDemoComponent },
  { path: 'pagination', component: ChPaginationDemoComponent }
];

// export const AppRoutes = RouterModule.forRoot(routes, { useHash: true });
