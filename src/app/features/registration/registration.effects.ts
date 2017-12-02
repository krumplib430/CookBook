import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Router} from '@angular/router';
import {RegistrationService} from './services/registration';
import {of} from 'rxjs/observable/of';
import * as registrationActions from './registration.actions';

@Injectable()
export class RegistrationEffects {
  @Effect()
  login$ = this.actions$
    .ofType(registrationActions.REGISTER)
    .debounceTime(800)
    .exhaustMap((action: registrationActions.Register) => this.registrationService.register(action.payload)
      .map(regResponse => new registrationActions.RegisterSuccess())
      .catch(error => of(new registrationActions.RegisterFailure(error.message))));

  constructor(private actions$: Actions, private registrationService: RegistrationService, private router: Router) {
  }
}
