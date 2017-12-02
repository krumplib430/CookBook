import {RouterReducerState} from '@ngrx/router-store';
import {Params} from '@angular/router';
import {RouterState} from './router/router.state';

export interface State {
  router: RouterReducerState<RouterState>;
}
