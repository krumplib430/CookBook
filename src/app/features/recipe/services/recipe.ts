import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {of} from 'rxjs/observable/of';
import {AuthService} from '../../auth/services/auth';
import * as recipeModels from '../recipe.models';

@Injectable()
export class RecipeService {
  private _recipes$: Observable<any>;
  private _authUserRecipes$: Observable<any>;


  constructor(private afDatabase: AngularFireDatabase, private authService: AuthService) {
    this._recipes$ = afDatabase.list('recipes', ref => ref.orderByChild('name')).valueChanges();
    this._authUserRecipes$ = authService.userData$.switchMap(userData => {
      if (userData) {
        const url = 'users/' + userData.uid + '/recipes';
        return afDatabase.list(url, ref => ref.orderByChild('name')).valueChanges();
      } else {
        return of([]);
      }
    });
  }

  get recipes$(): Observable<any> {
    return this._recipes$;
  }

  get authUserRecipes$(): Observable<any> {
    return this._authUserRecipes$;
  }

  addRecipe(recipe: recipeModels.Recipe) {
    console.log(recipe);
  }
}
