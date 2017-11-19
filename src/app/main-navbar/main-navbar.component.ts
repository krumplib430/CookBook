import {Component, ViewEncapsulation} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainNavbarComponent {
  constructor(public authService: AuthService) {
  }

  logout() {
    this.authService.logout();
  }
}
