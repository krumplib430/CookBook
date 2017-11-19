import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from './store/app-state';
import {UserLoggedInAction} from "./store/actions";
import {User} from "./store/user";


@Injectable()
export class AuthService {
  // TODO: create custom type and map firebase object to custom type
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private router: Router, private store: Store<AppState>) {
    this.user$ = afAuth.authState;
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(x => {
        console.log('Logged in.', x);
        this.store.dispatch(new UserLoggedInAction({email: x.email}))
        this.router.navigate(['/']);
      })
      .catch(x => console.log('Unable to login.', x));
  }

  logout() {
    this.afAuth.auth.signOut()
      .then(x => {
        console.log('Logged out.', x);
        this.router.navigate(['/']);
      })
      .catch(x => console.log('Unable to log out.', x));
  }
}
