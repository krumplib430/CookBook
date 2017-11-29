import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {AuthService} from './auth';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import * as authState from '../state/auth';
import * as authActions from '../actions/auth';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<authState.State>, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.authenticated$
      .first()
      .map(authenticated => {
        if (!authenticated) {
          this.store.dispatch(new authActions.LoginRedirect());
          return false;
        }
        return true;
      });
  }
}
