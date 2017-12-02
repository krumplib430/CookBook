import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Effect, Actions} from '@ngrx/effects';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import * as routerActions from './router.actions';

@Injectable()
export class RouterEffects {
  @Effect({dispatch: false})
  navigate$ = this.actions$.ofType(routerActions.GO)
    .map((action: routerActions.Go) => action.payload)
    .do(({path, query: queryParams, extras}) => this.router.navigate(path, {queryParams, ...extras}));

  @Effect({dispatch: false})
  navigateBack$ = this.actions$.ofType(routerActions.BACK)
    .do(() => this.location.back());

  @Effect({dispatch: false})
  navigateForward$ = this.actions$.ofType(routerActions.FORWARD)
    .do(() => this.location.forward());

  constructor(private actions$: Actions,
              private router: Router,
              private location: Location) {
  }
}
