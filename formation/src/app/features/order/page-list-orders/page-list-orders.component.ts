import { Component, OnInit } from '@angular/core';
import { Order } from '../../../shared/models/order.model';
import { OrderService } from '../../../shared/services/order.service';
import { BtnI } from '../../../shared/interfaces/btn-i';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrl: './page-list-orders.component.scss'
})
export class PageListOrdersComponent implements OnInit {

  public listOrder!: Order[];
  public entetes: string [] = [
    'ID', 'Client', 'Jours', 'TJM', 'HT', 'TTC', 'Date', 'Etat'];

  public btnRoute: BtnI = { label: 'Add V1', route: 'add/new' };
  public btnRoute2: BtnI = { label: 'Add V2', route: 'add/new2' };
  public btnHref: BtnI = { label: 'Go Ecosia', href: 'https://www.ecosia.org' };
  public btnAction: BtnI = { label: 'Open console', action: true, color: 'blue' };

  constructor(private orderService: OrderService) { }


  ngOnInit(): void {
    this.orderService.collection.subscribe(datas => {
      this.listOrder = datas;
      console.log(this.listOrder);
    });

  }

  public openConsole(): void {
    console.log("CLICK");
  }

}
