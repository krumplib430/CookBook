import {Action} from '@ngrx/store';
import * as authModels from '../models/auth';

export const LOGIN = '[Auth] Login';
export const LOGOUT = '[Auth] Logout';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAILURE = '[Auth] Login Failure';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: authModels.LoginData) {
  }
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: authModels.UserData) {
  }
}

export class LoginFailure implements Action {
  readonly type = LOGIN_FAILURE;

  constructor(public payload: string) {
  }
}

export type Actions =
  | Login
  | Logout
  | LoginSuccess
  | LoginFailure;
