import {createFeatureSelector, createSelector} from '@ngrx/store';
import {RecipeState} from './recipe.state';

export const getRecipeState = createFeatureSelector<RecipeState>('recipe');
export const getRecipeList = createSelector(getRecipeState, (state: RecipeState) => state.recipes);
