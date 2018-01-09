import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AngularFireDatabase} from 'angularfire2/database';
import {AuthService} from '../../auth/services/auth';
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

  constructor(private store: Store<State>, private authService: AuthService, private afDatabase: AngularFireDatabase) {
    this.recipeList$ = store.select(recipeSelectors.getMyRecipeList);
  }

  ngOnInit() {
    this.store.dispatch(new recipeActions.GetMyRecipeList());
  }

  shareToggled(event, recipe) {
    if (event.checked) {
      const clonedRecipe = JSON.parse(JSON.stringify(recipe));
      delete clonedRecipe.key;
      delete clonedRecipe.shared;

      this.afDatabase.object(`/recipes/${recipe.key}`).set(clonedRecipe);
      this.afDatabase.object('users/' + this.authService.userData.uid + /recipes/ + recipe.key).update({shared: true});
    } else {
      this.afDatabase.object(`/recipes/${recipe.key}`).remove();
      this.afDatabase.object('users/' + this.authService.userData.uid + /recipes/ + recipe.key).update({shared: false});
    }
    console.log('salala', event);
  }
}
