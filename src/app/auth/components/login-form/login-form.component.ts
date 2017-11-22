import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromAuth from '../../reducers/auth';
import * as auth from '../../actions/auth';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'cb-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  pending$ = this.store.select('auth', 'pending');

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private store: Store<fromAuth.State>) {
  }

  submit() {
    console.log(this.form.value);
    this.store.dispatch(new auth.Login(this.form.value));
  }
}
