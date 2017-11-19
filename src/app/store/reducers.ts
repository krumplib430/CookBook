import {Action} from '@ngrx/store';
import {AppState, INITIAL_APP_STATE} from './app-state';

export function dummyReducer(state: AppState = INITIAL_APP_STATE, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
