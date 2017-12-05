import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State} from '../../../app.state';
import * as registrationActions from '../registration.actions';
import * as registrationSelectors from '../registration.selectors';

@Component({
  selector: 'cb-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnInit {
  pending$: Store<boolean>;
  error$: Store<string>;

  form: FormGroup;

  constructor(private store: Store<State>, private formBuilder: FormBuilder) {
    this.pending$ = store.select(registrationSelectors.getRegistrationPending);
    this.error$ = store.select(registrationSelectors.getRegistrationError);

    this.createForm();
  }

  ngOnInit(): void {
    this.store.dispatch(new registrationActions.InitRegistrationForm());
  }

  createForm() {
    this.form = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submit() {
    if (this.form.valid) {
      this.store.dispatch(new registrationActions.CreateUser(this.form.value));
    }
  }
}
