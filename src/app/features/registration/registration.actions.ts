import {Action} from '@ngrx/store';
import * as registrationModels from './registration.models';

export const INIT_REGISTRATION_FORM = '[Registration] Init Registration Form';
export const REGISTER = '[Registration] Register';
export const REGISTER_SUCCESS = '[Registration] Register Success';
export const REGISTER_FAILURE = '[Registration] Register Failure';
export const SET_PROFILE = '[Registration] Set Profile';
export const SET_PROFILE_FAILURE = '[Registration] Set Profile Failure';


export class InitRegistrationForm implements Action {
  readonly type = INIT_REGISTRATION_FORM;
}

export class Register implements Action {
  readonly type = REGISTER;

  constructor(public payload: registrationModels.RegistrationData) {
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

export class SetProfile implements Action {
  readonly type = SET_PROFILE;

  constructor(public payload: registrationModels.ProfileData) {
  }
}

export class SetProfileFailure implements Action {
  readonly type = SET_PROFILE_FAILURE;

  constructor(public payload: string) {
  }
}

export type Actions =
  | InitRegistrationForm
  | Register
  | RegisterSuccess
  | RegisterFailure
  | SetProfile
  | SetProfileFailure;
