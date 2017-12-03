import {Action} from '@ngrx/store';
import * as registrationModels from './registration.models';

export const REGISTER = '[Registration] Register';
export const SET_PROFILE = '[Registration] Set Profile'
export const REGISTER_SUCCESS = '[Registration] Register Success';
export const REGISTER_FAILURE = '[Registration] Register Failure';

export class Register implements Action {
  readonly type = REGISTER;

  constructor(public payload: registrationModels.RegistrationData) {
  }
}

export class SetProfile implements Action {
  readonly type = SET_PROFILE;

  constructor(public payload: registrationModels.ProfileData) {
  }
}

export class RegisterSuccess implements Action {
  readonly type = REGISTER_SUCCESS;
}

export class RegisterFailure implements Action {
  readonly type = REGISTER_FAILURE;

  constructor(public payload: string) {
  }
}

export type Actions =
  | Register
  | RegisterSuccess
  | RegisterFailure
  | SetProfile;
