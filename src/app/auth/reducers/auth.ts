import * as authActions from '../actions/auth';
import * as authState from '../state';

export function reducer(state: authState.AuthState = authState.initialState, action: authActions.Actions) {
  switch (action.type) {
    case authActions.LOGIN: {
      return {
        ...state,
        pending: true,
        error: null,
      };
    }

    case authActions.LOGIN_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
        pending: false,
        error: null,
      };
    }

    case authActions.LOGIN_FAILURE: {
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