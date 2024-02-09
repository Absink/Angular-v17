import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { PageDetailsClientComponent } from './page-details-client/page-details-client.component';
import { PageListClientsComponent } from './page-list-clients/page-list-clients.component';
import { SharedModule } from '../../shared/shared.module';
import { PageAddClientComponent } from './page-add-client/page-add-client.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PageDetailsClientComponent, PageListClientsComponent, PageAddClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
