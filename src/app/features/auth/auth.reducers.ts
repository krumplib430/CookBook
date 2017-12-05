import * as authActions from './auth.actions';
import * as authState from './auth.state';

export function reducer(state: authState.AuthState = authState.initialState, action: authActions.Actions) {
  switch (action.type) {
    case authActions.SET_USER_STATE: {
      if (action.payload) {
        return {
          ...state,
          loggedIn: true,
          user: action.payload,
        };
      }
      return {
        ...state,
        loggedIn: false,
        user: null,
      };
    }

    case authActions.INIT_LOGIN_FORM: {
      return {
        ...state,
        pending: false,
        error: null,
      };
    }

    case authActions.LOGIN: {
      return {
        ...state,
        pending: true,
      };
    }

    case authActions.LOGIN_SUCCESS: {
      return {
        ...state,
        pending: false,
        error: null,
      };
    }

    case authActions.LOGIN_FAILURE: {
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
