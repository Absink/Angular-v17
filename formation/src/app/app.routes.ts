import { Routes } from '@angular/router';
import { PageHomeComponent } from './core/components/page-home/page-home.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'orders', loadChildren:() => import('./features/order/order.module').then(m => m.OrderModule) },
  { path: 'clients', loadChildren:() => import('./features/client/client.module').then(m => m.ClientModule) },
  { path: '**', component: PageNotFoundComponent }
];
