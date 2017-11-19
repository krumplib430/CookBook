import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {LoginData} from './auth-data';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  loginData = new LoginData();

  constructor(private authService: AuthService) {
  }

  login() {
    console.log(this.loginData);
    this.authService.login(this.loginData.email, this.loginData.password);
  }
}
