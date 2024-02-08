import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListClientsComponent } from './page-list-clients/page-list-clients.component';
import { PageDetailsClientComponent } from './page-details-client/page-details-client.component';
import { PageAddClientComponent } from './page-add-client/page-add-client.component';

const routes: Routes = [
  { path: '', component: PageListClientsComponent },
  { path: ':id', component: PageDetailsClientComponent },
  { path: 'add/new', component: PageAddClientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
