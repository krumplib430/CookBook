import {RouterReducerState} from '@ngrx/router-store';
import {RouterState} from './router';

export interface State {
  router: RouterReducerState<RouterState>;
}
