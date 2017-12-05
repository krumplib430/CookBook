import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
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
  createUser$ = this.actions$
    .ofType(registrationActions.CREATE_USER)
    .debounceTime(800)
    .map((action: registrationActions.CreateUser) => action.payload)
    .exhaustMap((payload: registrationModels.RegistrationData) => this.registrationService.register(payload)
      .map(() => new registrationActions.SetProfile({fullName: payload.fullName}))
      .catch(error => of(new registrationActions.CreateUserFailure(error.message))));

  @Effect()
  setProfile$ = this.actions$
    .ofType(registrationActions.SET_PROFILE)
    .map((action: registrationActions.CreateUser) => action.payload)
    .exhaustMap((payload: registrationModels.ProfileData) => this.registrationService.setProfile(payload)
      .map(() => new registrationActions.RegistrationSuccess())
      .catch(error => of(new registrationActions.SetProfileFailure(error.message))));

  @Effect()
  registrationSuccess$ = this.actions$
    .ofType(registrationActions.REGISTRATION_SUCCESS)
    .map(() => new authActions.GetUser());

  constructor(private actions$: Actions, private registrationService: RegistrationService) {
  }
}
