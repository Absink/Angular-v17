import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../shared/services/client.service';
import { Client } from '../../../shared/models/client.model';
import { BtnI } from '../../../shared/interfaces/btn-i';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrl: './page-list-clients.component.scss'
})
export class PageListClientsComponent implements OnInit {

  public clients: Client[] = [];
  public headers: string [] = ['ID', 'TVA', 'Etat'];
  public btnAdd: BtnI = { label: 'Add', route: 'add/new' };

  constructor(private clientService: ClientService) {} 


  ngOnInit(): void {
    this.clientService.getAll().subscribe(x => this.clients = x);
  }

}