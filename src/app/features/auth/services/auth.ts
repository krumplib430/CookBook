import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as authModels from '../models/auth';

@Injectable()
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {
  }

  login(loginData: authModels.LoginData) {
    return Observable.fromPromise(this.afAuth.auth.signInWithEmailAndPassword(loginData.email, loginData.password));
  }

  logout() {
    return Observable.fromPromise(this.afAuth.auth.signOut());
  }
}
