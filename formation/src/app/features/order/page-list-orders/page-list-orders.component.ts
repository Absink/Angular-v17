import { Component, OnInit } from '@angular/core';
import { Order } from '../../../shared/models/order.model';
import { OrderService } from '../../../shared/services/order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-list-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-list-orders.component.html',
  styleUrl: './page-list-orders.component.scss'
})
export class PageListOrdersComponent implements OnInit {

  public listOrder!: Order[];

  constructor(private orderService: OrderService) { }


  ngOnInit(): void {
    this.orderService.collection.subscribe(datas => {
      this.listOrder = datas;
    });
    console.log(this.listOrder)
  }

}
