import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {AngularFireAuth} from 'angularfire2/auth';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import * as authState from '../state/auth';
import * as authActions from '../actions/auth';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<authState.State>, private afAuth: AngularFireAuth) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.afAuth.authState
      .map(afAuthState => {
        if (!afAuthState) {
          this.store.dispatch(new authActions.LoginRedirect());
          return false;
        }
        return true;
      })
      .take(1);
  }
}
