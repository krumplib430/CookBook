import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm, FormControl, FormGroupDirective} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Store} from '@ngrx/store';
import {State} from '../../../app.state';
import * as authActions from '../auth.actions';
import * as authSelectors from '../auth.selectors';

@Component({
  selector: 'cb-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit{
  pending$: Store<boolean>;
  error$: Store<string>;

  form: FormGroup;

  constructor(private store: Store<State>, private formBuilder: FormBuilder) {
    this.pending$ = store.select(authSelectors.getAuthPending);
    this.error$ = store.select(authSelectors.getAuthError);

    this.createForm();
  }

  ngOnInit(): void {
    this.store.dispatch(new authActions.InitLoginForm());
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
