import { Component, Input } from '@angular/core';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-table-generic',
  templateUrl: './table-generic.component.html',
  styleUrl: './table-generic.component.scss'
})
export class TableGenericComponent {

  @Input() collection!: Order[];
  @Input() headers!: string[];

}
