import {Action} from '@ngrx/store';
import {User} from './user';

export const USER_LOGGED_IN = 'USER_LOGGED_IN';


export class UserLoggedInAction implements Action {
  readonly type = USER_LOGGED_IN;

  constructor(public payload: User) {
  }
}
