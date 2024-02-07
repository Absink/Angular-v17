import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-details-client',
  standalone: true,
  imports: [],
  templateUrl: './page-details-client.component.html',
  styleUrl: './page-details-client.component.scss'
})
export class PageDetailsClientComponent implements OnInit {

  public idClient!: string | null;
  
  constructor(private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.idClient = this.route.snapshot.paramMap.get("id");
  }

  public redirect(): void {
    this.router.navigateByUrl('clients');
  }

}
