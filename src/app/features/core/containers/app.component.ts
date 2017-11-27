import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as rootState from '../../../state/app';
import * as authSelectors from '../../auth/selectors/auth';
import * as authActions from '../../auth/actions/auth';

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
    console.log('app initializez');
  }

  logout() {
    this.store.dispatch(new authActions.Logout());
  }
}
