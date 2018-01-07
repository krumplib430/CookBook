import {RecipeService} from './services/recipe';
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import * as recipeActions from './recipe.actions';

@Injectable()
export class RecipeEffects {
  @Effect()
  getRecipeList$ = this.actions$
    .ofType(recipeActions.GET_RECIPE_LIST)
    .switchMap(() => this.recipeService.recipes$
      .map(recipeList => new recipeActions.SetRecipeListState(recipeList)));

  @Effect()
  getMyRecipeList$ = this.actions$
    .ofType(recipeActions.GET_MY_RECIPE_LIST)
    .switchMap(() => this.recipeService.authUserRecipes$
      .map(recipeList => new recipeActions.SetMyRecipeListState(recipeList)));

  constructor(private actions$: Actions, private recipeService: RecipeService) {

  }
}
