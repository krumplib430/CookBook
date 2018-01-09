import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import * as authModels from '../auth.models';


@Injectable()
export class AuthService {
  private _userData: authModels.UserData
  private _userData$: Observable<authModels.UserData>;

  constructor(private afAuth: AngularFireAuth) {
    this._userData$ = afAuth.authState.map(authState => {
      if (authState) {
        return {
          uid: authState.uid,
          fullName: authState.displayName,
          email: authState.email,
        };
      }
      return null;
    });
  }

  get userData(): authModels.UserData {
    return this._userData;
  }

  get userData$(): Observable<authModels.UserData> {
    return this._userData$.do(userData => this._userData = userData);
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
