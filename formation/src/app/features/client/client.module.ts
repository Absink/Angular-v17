import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { PageDetailsClientComponent } from './page-details-client/page-details-client.component';
import { PageListClientsComponent } from './page-list-clients/page-list-clients.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [PageDetailsClientComponent, PageListClientsComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
