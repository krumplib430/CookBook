import {RouterReducerState} from '@ngrx/router-store';
import {Params} from '@angular/router';

export interface State {
  router: RouterReducerState<RouterState>;
}

export interface RouterState {
  url: string;
  queryParams: Params;
}
