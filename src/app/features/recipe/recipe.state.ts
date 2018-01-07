import * as recipeModels from './recipe.models';

export interface RecipeState {
  recipes: recipeModels.Recipe[];
  myRecipes: recipeModels.Recipe[];
}

export const initialState: RecipeState = {
  recipes: [],
  myRecipes: [],
};
