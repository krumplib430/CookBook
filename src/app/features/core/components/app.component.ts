import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as rootState from '../../../app.state';
import * as authSelectors from '../../auth/auth.selectors';
import * as authActions from '../../auth/auth.actions';

@Component({
  selector: 'cb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loggedIn$: Observable<boolean>;

  constructor(private store: Store<rootState.State>) {
    this.loggedIn$ = store.select(authSelectors.getAuthLoggedIn);
  }

  ngOnInit(): void {
    this.store.dispatch(new authActions.GetUser());
  }

  logout() {
    this.store.dispatch(new authActions.Logout());
  }
}
