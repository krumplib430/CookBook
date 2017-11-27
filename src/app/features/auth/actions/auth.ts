import {Action} from '@ngrx/store';
import * as authModels from '../models/auth';

export const LOGIN = '[Auth] Login';
export const LOGOUT = '[Auth] Logout';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAILURE = '[Auth] Login Failure';
export const LOGIN_REDIRECT = '[Auth] Login Redirect';
export const CHECK_LOGIN_STATE = '[Auth] Check Login Status';
export const INIT_LOGIN_STATE = '[Auth] Init Login Status';
export const NO_OP = '[Auth] No Op';


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

export class LoginRedirect implements Action {
  readonly type = LOGIN_REDIRECT;
}

export class CheckLoginState implements Action {
  readonly type = CHECK_LOGIN_STATE;
}

export class InitLoginState implements Action {
  readonly type = INIT_LOGIN_STATE;

  constructor(public payload: authModels.UserData) {
  }
}

export class NoOp implements Action {
  readonly type = NO_OP;
}

export type Actions =
  | Login
  | Logout
  | LoginSuccess
  | LoginFailure
  | LoginRedirect
  | CheckLoginState
  | InitLoginState
  | NoOp;
