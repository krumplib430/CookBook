import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as registrationModels from '../registration.models';

@Injectable()
export class RegistrationService {

  constructor(private afAuth: AngularFireAuth) {
  }

  register(registrationData: registrationModels.RegistrationData) {
    return Observable.fromPromise(this.afAuth.auth.createUserWithEmailAndPassword(registrationData.email, registrationData.password));
  }
}
