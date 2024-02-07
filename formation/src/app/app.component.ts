import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './core/components/header/header.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SharedModule, HeaderComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public open: boolean = false;
  public msgConnexion: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.open = false;
    this.msgConnexion = "Non conencté";
  }

  public login(): void {
    if (this.msgConnexion == "Non conencté")
      this.msgConnexion = "Bienvenue";
    else
      this.msgConnexion = "Non conencté"
  }

  public switch(): void {
    this.open = !this.open;
  }
}
