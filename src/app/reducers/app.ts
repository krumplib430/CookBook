import {ActionReducerMap} from '@ngrx/store';
import {routerReducer} from '@ngrx/router-store';
import {State} from '../state/app';

export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};
