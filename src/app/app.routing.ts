import { ChSidebarDemoComponent, ChNavMenuDemoComponent } from './demo-app';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'navMenu', pathMatch: 'full' },
  { path: 'sidebar', component: ChSidebarDemoComponent },
  { path: 'navMenu', component: ChNavMenuDemoComponent },

];

// export const AppRoutes = RouterModule.forRoot(routes, { useHash: true });
