import {INITIAL_USER, User} from './user';
import {Recipe} from './recipe';

export class AppState {
  loggedinUser: User;
  recipes: { [key: string]: Recipe };
}

export const INITIAL_APP_STATE: AppState = {
  loggedinUser: INITIAL_USER,
  recipes: {}
};

