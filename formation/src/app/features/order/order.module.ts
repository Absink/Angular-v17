import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PageListOrdersComponent } from './page-list-orders/page-list-orders.component';
import { PageDetailsOrderComponent } from './page-details-order/page-details-order.component';
import { PageAddOrderComponent } from './page-add-order/page-add-order.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PageListOrdersComponent, PageDetailsOrderComponent, PageAddOrderComponent],
  imports: [
    CommonModule,
    SharedModule,
    OrderRoutingModule,
    FormsModule
  ]
})
export class OrderModule { }
