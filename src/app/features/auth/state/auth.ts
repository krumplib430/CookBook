import * as authModels from '../models/auth';
import * as rootState from '../../../state/app';

export interface AuthState {
  loggedIn: boolean;
  user: authModels.UserData;
  pending: boolean;
  error: string;
}

export interface State extends rootState.State {
  auth: AuthState;
}

export const initialState: AuthState = {
  loggedIn: null,
  user: null,
  pending: false,
  error: null,
}
