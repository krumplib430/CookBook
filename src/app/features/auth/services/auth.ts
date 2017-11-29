import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as authModels from '../models/auth';


@Injectable()
export class AuthService {
  private _userData$: Observable<authModels.UserData>;

  constructor(private afAuth: AngularFireAuth) {
    this._userData$ = afAuth.authState.map(authState => {
      if (authState) {
        return {
          uid: authState.uid,
          email: authState.email,
        };
      }
      return null;
    });
  }

  get userData$(): Observable<authModels.UserData> {
    return this._userData$;
  }

  get authenticated$(): Observable<boolean> {
    return this._userData$
      .map(userData => !!userData);
  }

  login(loginData: authModels.LoginData) {
    return Observable.fromPromise(this.afAuth.auth.signInWithEmailAndPassword(loginData.email, loginData.password));
  }

  logout() {
    return Observable.fromPromise(this.afAuth.auth.signOut());
  }
}
