import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Router} from '@angular/router';
import {RegistrationService} from './services/registration';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/catch';
import {of} from 'rxjs/observable/of';
import * as registrationActions from './registration.actions';
import * as registrationModels from './registration.models';
import * as authActions from '../auth/auth.actions';

@Injectable()
export class RegistrationEffects {
  @Effect()
  register$ = this.actions$
    .ofType(registrationActions.REGISTER)
    .debounceTime(800)
    .map((action: registrationActions.Register) => action.payload)
    .exhaustMap((payload: registrationModels.RegistrationData) => this.registrationService.register(payload)
      .map(() => {
        return new registrationActions.SetProfile({fullName: payload.fullName});
      })
      .catch(error => of(new registrationActions.RegisterFailure(error.message))));

  @Effect()
  setProfile$ = this.actions$
    .ofType(registrationActions.SET_PROFILE)
    .map((action: registrationActions.Register) => action.payload)
    .exhaustMap((payload: registrationModels.ProfileData) => this.registrationService.setProfile(payload)
      .map(() => new registrationActions.RegisterSuccess())
      .catch(error => of(new registrationActions.RegisterFailure(error.message))));

  @Effect()
  registerSuccess$ = this.actions$
    .ofType(registrationActions.REGISTER_SUCCESS)
    .map(() => new authActions.CheckLoginState());

  constructor(private actions$: Actions, private registrationService: RegistrationService) {
  }
}
