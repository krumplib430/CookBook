import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import * as authModels from '../models/auth';


@Component({
  selector: 'cb-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  @Output() submitted = new EventEmitter<authModels.LoginData>();
  @Input() pending: boolean;

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
    }
  }
}
