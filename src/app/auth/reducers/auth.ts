import * as auth from '../actions/auth';
import * as fromRoot from '../../reducers/index';
import {UserData} from '../models/user-data';
import {createSelector} from '@ngrx/store';

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

export function reducer(state: AuthState = initialState, action: auth.Actions) {
  switch (action.type) {
    case auth.LOGIN: {
      return {
        ...state,
        pending: true,
        error: null,
      };
    }

    case auth.LOGIN_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
        pending: false,
        error: null,
      };
    }

    case auth.LOGIN_FAILURE: {
      return {
        ...state,
        loggedIn: false,
        user: null,
        pending: false,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export const getAuthPending = createSelector((state: AuthState) => state.pending, pending => pending)
