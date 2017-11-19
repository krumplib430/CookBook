import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthData} from './auth-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent{
  authData = new AuthData();


  constructor(private afAuth: AngularFireAuth) {
  }

  login() {
    console.log(this.authData);
    // this.afAuth.auth.createUserWithEmailAndPassword(this.authData.email, this.authData.password);

    this.afAuth.auth.signInWithEmailAndPassword(this.authData.email, this.authData.password)
      .then(x => {
        console.log('sending email verification', x);
        // this.afAuth.auth.currentUser.sendEmailVerification();
      })
      .catch(x => console.log('Unable to login', x));
  }
}
