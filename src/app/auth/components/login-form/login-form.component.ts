import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as authState from '../../state/auth';
import * as authActions from '../../actions/auth';

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

  constructor(private store: Store<authState.State>) {
  }

  submit() {
    console.log(this.form.value);
    this.store.dispatch(new authActions.Login(this.form.value));
  }
}
