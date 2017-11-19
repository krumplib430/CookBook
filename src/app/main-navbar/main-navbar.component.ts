import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainNavbarComponent {
  user: firebase.User;

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => this.user = user);
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
