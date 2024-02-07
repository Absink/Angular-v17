import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-details-order',
  standalone: true,
  imports: [],
  templateUrl: './page-details-order.component.html',
  styleUrl: './page-details-order.component.scss'
})
export class PageDetailsOrderComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    const idClient: string | null = this.route.snapshot.paramMap.get("id");
    console.log(idClient);

    if (idClient == "48")
      this.router.navigateByUrl('/home');
  }

}
