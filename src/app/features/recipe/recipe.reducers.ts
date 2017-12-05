import * as recipeActions from './recipe.actions';
import * as recipeState from './recipe.state';

export function reducer(state: recipeState.RecipeState = recipeState.initialState, action: recipeActions.Actions) {
  switch (action.type) {
    case recipeActions.SET_RECIPE_LIST_STATE: {
      console.log('got the recipes', action.payload);
      return {
        ...state,
        recipes: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
