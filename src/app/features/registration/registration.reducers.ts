import * as registrationActions from './registration.actions';
import * as registrationState from './registration.state';

export function reducer(state: registrationState.RegistrationState = registrationState.initialState, action: registrationActions.Actions) {
  switch (action.type) {
    case registrationActions.REGISTER: {
      return {
        ...state,
        pending: true,
      };
    }


    case registrationActions.REGISTER_SUCCESS: {
      return {
        ...state,
        pending: false,
        error: null,
      };
    }

    case registrationActions.REGISTER_FAILURE: {
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
