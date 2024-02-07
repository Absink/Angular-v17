import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListClientsComponent } from './page-list-clients/page-list-clients.component';

const routes: Routes = [
  { path: '', component: PageListClientsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
