import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PageListOrdersComponent } from './page-list-orders/page-list-orders.component';
import { PageDetailsOrderComponent } from './page-details-order/page-details-order.component';
import { PageAddOrderComponent } from './page-add-order/page-add-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageAddOrderBisComponent } from './page-add-order-bis/page-add-order-bis.component';


@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageDetailsOrderComponent,
    PageAddOrderComponent,
    PageAddOrderBisComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OrderModule { }
