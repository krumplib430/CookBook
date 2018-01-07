import {Action} from '@ngrx/store';
import * as recipeModels from './recipe.models';

export const GET_RECIPE_LIST = '[Recipe] Get Recipe List';
export const SET_RECIPE_LIST_STATE = '[Recipe] Set Recipe List State';
export const GET_MY_RECIPE_LIST = '[Recipe] Get My Recipe List';
export const SET_MY_RECIPE_LIST_STATE = '[Recipe] Set My Recipe List State';


export class GetRecipeList implements Action {
  readonly type = GET_RECIPE_LIST;
}

export class SetRecipeListState implements Action {
  readonly type = SET_RECIPE_LIST_STATE;

  constructor(public payload: recipeModels.Recipe[]) {
  }
}

export class GetMyRecipeList implements Action {
  readonly type = GET_MY_RECIPE_LIST;
}

export class SetMyRecipeListState implements Action {
  readonly type = SET_MY_RECIPE_LIST_STATE;

  constructor(public payload: recipeModels.Recipe[]) {
  }
}

export type Actions =
  | GetRecipeList
  | SetRecipeListState
  | GetMyRecipeList
  | SetMyRecipeListState;
