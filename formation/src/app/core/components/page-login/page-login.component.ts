import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../shared/models/user.model';
import { UserService } from '../../../shared/services/user.service';
import { Router } from '@angular/router';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.scss'
})
export class PageLoginComponent {

  public user: User = new User();

  constructor(
    private userService: UserService,
    private router: Router) { }

  public login(): void {
    this.userService.authenficate(this.user).subscribe({
      next: datas => {
        if (datas[0] && datas[0].id) {
          SharedService.isConnected = true;
          this.router.navigateByUrl('home');
        } else {
          this.user = new User();
        }
      },
      error: () => console.log("ERROR")
    })
  }

}
