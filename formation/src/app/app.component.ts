import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './core/components/header/header.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { SharedService } from './shared/services/shared.service';
import { FooterComponent } from './core/components/footer/footer.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SharedModule, HeaderComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public open: boolean = false;
  public msgConnexion: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.open = false;
    this.msgConnexion = "Non connecté";

    /*const sub = new Subject<number>();
    sub.subscribe((x) => {
      console.log(x)
    });

    sub.next(1);
    sub.next(2);
    sub.next(70000);
    sub.complete();*/

  }

  public login(): void {
    SharedService.isConnected = !SharedService.isConnected;
    SharedService.isConnected ? this.msgConnexion = "Bienvenue" : this.msgConnexion = "Non connecté";
  }

  public switch(): void {
    this.open = !this.open;
  }
}
