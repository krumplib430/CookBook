import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import {of} from 'rxjs/observable/of';
import * as authActions from '../actions/auth';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$
    .ofType(authActions.LOGIN)
    .exhaustMap((action: authActions.Login) => this.authService.login(action.payload)
      .map(authResponse => new authActions.LoginSuccess({uid: authResponse.uid, email: authResponse.email}))
      .catch(error => of(new authActions.LoginFailure(error.message))));

  @Effect({dispatch: false})
  loginSuccess$ = this.actions$
    .ofType(authActions.LOGIN_SUCCESS)
    .do(() => this.router.navigate(['/']));

  @Effect()
  logout$ = this.actions$
    .ofType(authActions.LOGOUT)
    .exhaustMap(() => this.authService.logout()
      .map(authResponse => new authActions.LoginRedirect()));

  @Effect({dispatch: false})
  loginRedirect$ = this.actions$
    .ofType(authActions.LOGIN_REDIRECT)
    .do(() => this.router.navigate(['/login']));

  @Effect()
  checkLoginState$ = this.actions$
    .ofType(authActions.CHECK_LOGIN_STATE)
    .exhaustMap(() => this.authService.userData$.take(1)
      .map(userData => {
        if (userData) {
          return new authActions.InitLoginState(userData);
        }
        return new authActions.NoOp();
      }));

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {
  }
}
