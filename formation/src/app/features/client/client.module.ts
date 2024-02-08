import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { PageDetailsClientComponent } from './page-details-client/page-details-client.component';
import { PageListClientsComponent } from './page-list-clients/page-list-clients.component';
import { SharedModule } from '../../shared/shared.module';
import { PageAddClientComponent } from './page-add-client/page-add-client.component';


@NgModule({
  declarations: [PageDetailsClientComponent, PageListClientsComponent, PageAddClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
