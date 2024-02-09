import { Component, OnInit } from '@angular/core';
import { Order } from '../../../shared/models/order.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderService } from '../../../shared/services/order.service';
import { StateOrder } from '../../../shared/enums/state-order';

@Component({
  selector: 'app-page-add-order-bis',
  templateUrl: './page-add-order-bis.component.html',
  styleUrl: './page-add-order-bis.component.scss'
})
export class PageAddOrderBisComponent implements OnInit {

  public order = new Order();
  public states = Object.values(StateOrder);
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private orderService: OrderService) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      typePresta: [this.order.typePresta],
      client: [this.order.client],
      nbJours: [this.order.nbJours],
      tjmHT: [this.order.tjmHT],
      tva: [this.order.tva],
      state: [this.order.state],
      comment: [this.order.comment],
    });
  }

  public add(): void {
    this.orderService.add(this.form.value).subscribe();
  }




}
