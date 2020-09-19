import { Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import { AuthGuard } from './public/service/auth-guard.service';

export const AppRoutes: Routes = [
{
  path: '',
  redirectTo: 'admin/login',
  pathMatch: 'full',
},
{
  path: 'forgotpassword',
  redirectTo: 'admin/forgotpassword',
}, 
{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: 'dashboard',
      loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
      // canActivate: [AuthGuard]
    },
    
  ]
}, {
  path: '',
  component: AuthComponent,
  children: [{
    path: 'admin',
    loadChildren: './pages/pages.module#PagesModule'
  }]
}];