import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Router} from '@angular/router';
import {AuthService} from './services/auth';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/debounceTime';
import {of} from 'rxjs/observable/of';
import * as authActions from './auth.actions';
import * as authModels from './auth.models';

@Injectable()
export class AuthEffects {
  @Effect()
  checkLoginState$ = this.actions$
    .ofType(authActions.CHECK_LOGIN_STATE)
    .switchMap(() => this.authService.userData$
      .first()
      .map(userData => {
        if (userData) {
          return new authActions.InitLoginState(userData);
        }
        return new authActions.InitLoginState(null);
      }));

  @Effect({dispatch: false})
  initLoginState = this.actions$
    .ofType(authActions.INIT_LOGIN_STATE)
    .map((action: authActions.InitLoginState) => action.payload)
    .do((userData: authModels.UserData) => {
      if (userData) {
        this.router.navigate(['/']);
      }
    });

  @Effect()
  login$ = this.actions$
    .ofType(authActions.LOGIN)
    .debounceTime(800)
    .map((action: authActions.Login) => action.payload)
    .exhaustMap((payload: authModels.LoginData) => this.authService.login(payload)
      .map(() => new authActions.LoginSuccess())
      .catch(error => of(new authActions.LoginFailure(error.message))));

  @Effect()
  loginSuccess$ = this.actions$
    .ofType(authActions.LOGIN_SUCCESS)
    .map(() => new authActions.CheckLoginState());

  @Effect()
  logout$ = this.actions$
    .ofType(authActions.LOGOUT)
    .exhaustMap(() => this.authService.logout()
      .map(() => new authActions.LoginRedirect()));

  @Effect({dispatch: false})
  loginRedirect$ = this.actions$
    .ofType(authActions.LOGIN_REDIRECT)
    .do(() => this.router.navigate(['/login']));

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {
  }
}
