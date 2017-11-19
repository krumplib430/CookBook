import {Component, ViewEncapsulation} from '@angular/core';
import {AuthService} from '../auth.service';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app-state';

@Component({
  selector: 'main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainNavbarComponent {
  constructor(public authService: AuthService, private store: Store<AppState>) {
    store.subscribe(console.log);
  }

  logout() {
    this.authService.logout();
  }
}
