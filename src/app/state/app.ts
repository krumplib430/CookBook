import {RouterReducerState} from '@ngrx/router-store';
import {RouterState} from './router';

export interface State {
  routerReducer: RouterReducerState<RouterState>;
}
