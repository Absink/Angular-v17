import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-generic',
  templateUrl: './table-generic.component.html',
  styleUrl: './table-generic.component.scss'
})
export class TableGenericComponent {

  @Input() headers!: string[];
  @Input() colorHeaders: string = 'basic';

}
