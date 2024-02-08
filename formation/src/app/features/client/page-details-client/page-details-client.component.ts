import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../../shared/services/client.service';
import { Client } from '../../../shared/models/client.model';

@Component({
  selector: 'app-page-details-client',
  templateUrl: './page-details-client.component.html',
  styleUrl: './page-details-client.component.scss'
})
export class PageDetailsClientComponent implements OnInit {

  public client!: Client;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService) { }
  
  ngOnInit(): void {
    const idClient = this.route.snapshot.paramMap.get("id");
    this.clientService.getById(Number(idClient)).subscribe(x => this.client = x);
  }

  public redirect(): void {
    this.router.navigateByUrl('clients');
  }

}
