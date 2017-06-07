import { NavMenudemoComponent } from './demo-app/navMenudemo/navMenudemo.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'navMenu', pathMatch: 'full' },
  { path: 'navMenu', component: NavMenudemoComponent },
];

// export const AppRoutes = RouterModule.forRoot(routes, { useHash: true });
