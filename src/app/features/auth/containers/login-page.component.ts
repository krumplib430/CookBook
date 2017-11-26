import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import * as authModels from '../models/auth';
import * as authState from '../state/auth';
import * as authActions from '../actions/auth';
import * as authSelectors from '../selectors/auth';

@Component({
  selector: 'cb-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  pending$: Store<boolean>;
  error$: Store<string>;

  constructor(private store: Store<authState.State>) {
    this.pending$ = store.select(authSelectors.getAuthPending);
    this.error$ = store.select(authSelectors.getAuthError);
  }

  onSubmit($event: authModels.LoginData) {
    console.log($event);
    this.store.dispatch(new authActions.Login($event));
  }
}
