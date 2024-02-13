import { Component, OnInit } from '@angular/core';
import { Client } from '../../../shared/models/client.model';
import { StateClient } from '../../../shared/enums/state-client';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../../shared/services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrl: './page-add-client.component.scss'
})
export class PageAddClientComponent implements OnInit {

  public client = new Client();
  public states = Object.values(StateClient);
  public form!: FormGroup;
  public btnName: string = 'Ajouter';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private clisentService: ClientService
  ) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get("id");
    console.log(param)
    if (param != null) {
      this.clisentService.getById(Number(param)).subscribe(cl => {
        this.client = cl;
        this.btnName = 'Sauvegarder';
        this.buildFormGroup();
      });
    } else {
      this.buildFormGroup();
    }
  }

  public buildFormGroup(): void {
    this.form = this.formBuilder.group({
      name: [this.client.name, Validators.required],
      state: [this.client.state],
      ca: [this.client.ca],
      tva: [this.client.tva],
    });
  }

  public save(): void {
    if (this.client.id) {
      this.clisentService.update(this.form.value).subscribe(x => {
        if (x.id) {
          SharedService.isErrorNotif = false;
          SharedService.textNotif = `Client ${x.name} bien mis à jour`;
          this.router.navigateByUrl('clients');
        }

      });
    } else {
      this.clisentService.add(this.form.value).subscribe(x => {
        if (x.id)
          this.router.navigateByUrl('clients')
      });
    }
  }

}
