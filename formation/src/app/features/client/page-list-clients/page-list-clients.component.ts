import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../shared/services/client.service';
import { Client } from '../../../shared/models/client.model';

@Component({
  selector: 'app-page-list-clients',
  standalone: true,
  imports: [],
  templateUrl: './page-list-clients.component.html',
  styleUrl: './page-list-clients.component.scss'
})
export class PageListClientsComponent implements OnInit {

  public clients: Client[] = [];

  constructor(private clientService: ClientService) {} 


  ngOnInit(): void {
    this.clientService.getAll().subscribe(x => this.clients = x);
  }

}
