import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class RegistrationService {
  constructor(private afAuth: AngularFireAuth, private authService: AuthService, private router: Router) {
  }

  register(email: string, password: string) {

    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(x => {
        console.log('Created user.', x);
        this.authService.login(email, password);
      })
      .catch(x => console.log('Unable to create user.', x));
  }

}
