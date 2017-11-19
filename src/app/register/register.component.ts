import {Component, ViewEncapsulation} from '@angular/core';
import {RegistrationData} from './registration-data';
import {RegistrationService} from '../registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {
  registrationData = new RegistrationData();

  constructor(private registrationService: RegistrationService) {
  }

  register() {
    this.registrationService.register(this.registrationData.email, this.registrationData.password);
  }
}
