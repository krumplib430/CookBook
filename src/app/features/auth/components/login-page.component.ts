import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm, FormControl, FormGroupDirective} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Store} from '@ngrx/store';
import {FormErrorStateMatcher} from '../../../shared/form-error-state-matcher';
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

  form: FormGroup;
  errorStateMatcher = new FormErrorStateMatcher();

  constructor(private store: Store<authState.State>, private formBuilder: FormBuilder) {
    this.pending$ = store.select(authSelectors.getAuthPending);
    this.error$ = store.select(authSelectors.getAuthError);

    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submit() {
    if (this.form.valid) {
      this.store.dispatch(new authActions.Login(this.form.value));
    }
  }
}
