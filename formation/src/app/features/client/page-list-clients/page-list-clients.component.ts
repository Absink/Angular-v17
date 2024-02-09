import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../shared/services/client.service';
import { Client } from '../../../shared/models/client.model';
import { BtnI } from '../../../shared/interfaces/btn-i';
import { StateClient } from '../../../shared/enums/state-client';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrl: './page-list-clients.component.scss'
})
export class PageListClientsComponent implements OnInit {

  public clients: Client[] = [];
  public headers: string [] = ['ID', 'Name', 'CA', 'Etat'];
  public btnAdd: BtnI = { label: 'Add', route: 'add/new' };
  public btnFilter: BtnI = { label: 'Filter', action: true };
  public state: StateClient | undefined;

  constructor(private clientService: ClientService) { } 


  ngOnInit(): void {
    this.clientService.getAll().subscribe(x => this.clients = x);
  }

  get clientsFiltred(): Client[] {
    if (!this.state)
      return this.clients;
    return this.clients.filter(x => x.state == this.state);
  }

  public updateState(): void {
    switch(this.state) {
      case StateClient.Active:
        this.state = StateClient.Inactive;
        break;
      case StateClient.Inactive:
        this.state = undefined;
        break;
      default:
        this.state = StateClient.Active;
        break;
    }
  }
}