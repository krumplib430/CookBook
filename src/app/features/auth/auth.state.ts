import * as authModels from './auth.models';

export interface AuthState {
  loggedIn: boolean;
  user: authModels.UserData;
  pending: boolean;
  error: string;
}

export const initialState: AuthState = {
  loggedIn: null,
  user: null,
  pending: false,
  error: null,
};
