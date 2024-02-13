import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrl: './notif.component.scss'
})
export class NotifComponent {

  @Input() text: string = "";
  @Input() isError: boolean = false;

}
