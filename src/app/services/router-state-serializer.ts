import {RouterStateSerializer} from '@ngrx/router-store';
import {RouterStateSnapshot} from '@angular/router';
import * as routerState from '../router/router.state';

export class CustomRouterStateSerializer implements RouterStateSerializer<routerState.RouterState> {
  serialize(state: RouterStateSnapshot): routerState.RouterState {
    const url = state.url;
    const queryParams = state.root.queryParams;

    return {url, queryParams};
  }
}
