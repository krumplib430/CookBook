import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as authModels from '../models/auth';


@Injectable()
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {
    this._userData$ = afAuth.authState.map(authState => {
      if (authState) {
        return {
          uid: authState.uid,
          email: authState.email,
        };
      }
      return undefined;
    });
  }

  private _userData$: Observable<authModels.UserData>;

  get userData$(): Observable<authModels.UserData> {
    return this._userData$;
  }

  login(loginData: authModels.LoginData) {
    return Observable.fromPromise(this.afAuth.auth.signInWithEmailAndPassword(loginData.email, loginData.password));
  }

  logout() {
    return Observable.fromPromise(this.afAuth.auth.signOut());
  }

  getAuthState() {
    return this.afAuth.authState;
  }
}
