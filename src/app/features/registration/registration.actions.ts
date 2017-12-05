import {Action} from '@ngrx/store';
import * as registrationModels from './registration.models';

export const INIT_REGISTRATION_FORM = '[Registration] Init Registration Form';
export const CREATE_USER = '[Registration] Create User';
export const CREATE_USER_FAILURE = '[Registration] Create User Failure';
export const SET_PROFILE = '[Registration] Set Profile';
export const SET_PROFILE_FAILURE = '[Registration] Set Profile Failure';
export const REGISTRATION_SUCCESS = '[Registration] Registration Success';

export class InitRegistrationForm implements Action {
  readonly type = INIT_REGISTRATION_FORM;
}

export class CreateUser implements Action {
  readonly type = CREATE_USER;

  constructor(public payload: registrationModels.RegistrationData) {
  }
}

export class CreateUserFailure implements Action {
  readonly type = CREATE_USER_FAILURE;

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

export class RegistrationSuccess implements Action {
  readonly type = REGISTRATION_SUCCESS;
}

export type Actions =
  | InitRegistrationForm
  | CreateUser
  | CreateUserFailure
  | SetProfile
  | SetProfileFailure
  | RegistrationSuccess;
