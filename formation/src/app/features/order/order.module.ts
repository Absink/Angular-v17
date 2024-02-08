import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PageListOrdersComponent } from './page-list-orders/page-list-orders.component';
import { PageDetailsOrderComponent } from './page-details-order/page-details-order.component';


@NgModule({
  declarations: [PageListOrdersComponent, PageDetailsOrderComponent],
  imports: [
    CommonModule,
    SharedModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
