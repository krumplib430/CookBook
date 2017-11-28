import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as authState from '../state/auth';
import * as authActions from '../actions/auth';
import * as authSelectors from '../selectors/auth';

@Component({
  selector: 'cb-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  pending$: Store<boolean>;
  error$: Store<string>;

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private store: Store<authState.State>) {
    this.pending$ = store.select(authSelectors.getAuthPending);
    this.error$ = store.select(authSelectors.getAuthError);
  }

  submit() {
    if (this.form.valid) {
      this.store.dispatch(new authActions.Login(this.form.value));
    }
  }
}
