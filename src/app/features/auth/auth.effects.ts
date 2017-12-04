import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Router, ActivatedRoute} from '@angular/router';
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
  getUserState$ = this.actions$
    .ofType(authActions.GET_USER_STATE)
    .switchMap(() => this.authService.userData$
      .map(userData => new authActions.SetUserState(userData)));

  @Effect({dispatch: false})
  setUserState$ = this.actions$
    .ofType(authActions.SET_USER_STATE)
    .map((action: authActions.SetUserState) => action.payload)
    .do((userData: authModels.UserData) => {
      if (userData && (this.router.url.startsWith('/login') || (this.router.url.startsWith('/register')))) {
        const returnUrl = this.activatedRoute.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || '/']);
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

  @Effect({dispatch: false})
  logout$ = this.actions$
    .ofType(authActions.LOGOUT)
    .exhaustMap(() => this.authService.logout()
      .do(() => this.router.navigate(['/login'])));

  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }
}
