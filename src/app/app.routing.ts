import { ChSidebarDemoComponent, ChNavMenuDemoComponent, ChPageDemoComponent } from './demo-app';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'pager', pathMatch: 'full' },
  // { path: 'sidebar', component: ChSidebarDemoComponent },
  // { path: 'navMenu', component: ChNavMenuDemoComponent },
  { path: 'pager', component: ChPageDemoComponent }
];

// export const AppRoutes = RouterModule.forRoot(routes, { useHash: true });
