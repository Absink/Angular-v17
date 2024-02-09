import { Component } from '@angular/core';
import { Order } from '../../../shared/models/order.model';
import { StateOrder } from '../../../shared/enums/state-order';
import { OrderService } from '../../../shared/services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrl: './page-add-order.component.scss'
})
export class PageAddOrderComponent {

  public order: Order = new Order();
  public states = Object.values(StateOrder);

  constructor(private orderService: OrderService, private router: Router) { }

  public add(): void {
    console.log(this.order);
    this.orderService.add(this.order).subscribe(x => {
      if (x.id)
        this.router.navigateByUrl('/orders');
    })
  }

}
