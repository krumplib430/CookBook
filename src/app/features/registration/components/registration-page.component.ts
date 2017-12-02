import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State} from '../../../app.state';
import * as registrationActions from '../registration.actions';

@Component({
  selector: 'cb-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent {
  pending$: Store<boolean>;
  error$: Store<string>;

  form: FormGroup;

  constructor(private store: Store<State>, private formBuilder: FormBuilder) {
    this.createForm();
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
      this.store.dispatch(new registrationActions.Register(this.form.value));
    }
  }
}
