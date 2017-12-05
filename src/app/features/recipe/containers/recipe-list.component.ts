import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../../app.state';
import {Recipe} from '../recipe.models';
import * as recipeActions from '../recipe.actions';
import * as recipeSelectors from '../recipe.selectors';


@Component({
  selector: 'cb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipeList$: Store<Recipe[]>;

  constructor(private store: Store<State>) {
    this.recipeList$ = store.select(recipeSelectors.getRecipeList);
  }

  ngOnInit() {
    this.store.dispatch(new recipeActions.GetRecipeList());
  }
}
