import {RouterStateSerializer} from '@ngrx/router-store';
import {RouterStateSnapshot} from '@angular/router';
import {RouterState} from '../state/router';

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterState> {
  serialize(routerState: RouterStateSnapshot): RouterState {
    const url = routerState.url;
    const queryParams = routerState.root.queryParams;

    return {url, queryParams};
  }
}
