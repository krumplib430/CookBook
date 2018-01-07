import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../../app.state';
import {Recipe} from '../recipe.models';
import * as recipeSelectors from '../recipe.selectors';
import * as recipeActions from '../recipe.actions';

@Component({
  selector: 'cb-my-recipe-list',
  templateUrl: './my-recipe-list.component.html',
  styleUrls: ['./my-recipe-list.component.scss']
})
export class MyRecipeListComponent implements OnInit {
  recipeList$: Store<Recipe[]>;

  constructor(private store: Store<State>) {
    this.recipeList$ = store.select(recipeSelectors.getMyRecipeList);
  }

  ngOnInit() {
    this.store.dispatch(new recipeActions.GetMyRecipeList());
  }

}
