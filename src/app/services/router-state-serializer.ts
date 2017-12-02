import {RouterStateSerializer} from '@ngrx/router-store';
import {RouterStateSnapshot} from '@angular/router';
import * as appState from '../app.state';

export class CustomRouterStateSerializer implements RouterStateSerializer<appState.RouterState> {
  serialize(routerState: RouterStateSnapshot): appState.RouterState {
    const url = routerState.url;
    const queryParams = routerState.root.queryParams;

    return {url, queryParams};
  }
}
