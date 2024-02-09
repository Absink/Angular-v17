import { Routes } from '@angular/router';
import { PageHomeComponent } from './core/components/page-home/page-home.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { controlGuard } from './core/control.guard';
import { PageLoginComponent } from './core/components/page-login/page-login.component';

export const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: PageLoginComponent },
  { path: 'orders', canActivate:[controlGuard], loadChildren:() => import('./features/order/order.module').then(m => m.OrderModule) },
  { path: 'clients', canActivate:[controlGuard], loadChildren:() => import('./features/client/client.module').then(m => m.ClientModule) },
  { path: '**', component: PageNotFoundComponent }
];
