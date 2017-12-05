import {Action} from '@ngrx/store';
import * as authModels from './auth.models';

export const GET_USER_STATE = '[Auth] Get User State';
export const SET_USER_STATE = '[Auth] Set User State';
export const INIT_LOGIN_FORM = '[Auth] Init Login Form';
export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAILURE = '[Auth] Login Failure';
export const LOGOUT = '[Auth] Logout';

export class GetUserState implements Action {
  readonly type = GET_USER_STATE;
}

export class SetUserState implements Action {
  readonly type = SET_USER_STATE;

  constructor(public payload: authModels.UserData) {
  }
}

export class InitLoginForm implements Action {
  readonly type = INIT_LOGIN_FORM;
}

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: authModels.LoginData) {
  }
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
}

export class LoginFailure implements Action {
  readonly type = LOGIN_FAILURE;

  constructor(public payload: string) {
  }
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export type Actions =
  | GetUserState
  | SetUserState
  | InitLoginForm
  | Login
  | LoginSuccess
  | LoginFailure
  | Logout;
