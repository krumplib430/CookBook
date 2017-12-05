import {RouterReducerState} from '@ngrx/router-store';
import {RouterState} from './router/router.state';

export interface State {
  router: RouterReducerState<RouterState>;
}
