import {UserData} from '../models/user-data';
import * as fromRoot from '../../../reducers';

export interface AuthState {
  loggedIn: boolean;
  user: UserData;
  pending: boolean;
  error: string;
}

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const initialState: AuthState = {
  loggedIn: false,
  user: null,
  pending: false,
  error: null,
}
