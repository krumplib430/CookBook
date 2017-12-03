import {Action} from '@ngrx/store';
import * as recipeModels from './recipe.models';

export const LOAD = '[Recipe] Load';
export const LOAD_SUCCESS = '[Recipe] Load Success';

export class Load implements Action {
  readonly type = LOAD;
}

export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: recipeModels.Recipe[]) {
  }
}

export type Actions =
  | Load
  | LoadSuccess;
