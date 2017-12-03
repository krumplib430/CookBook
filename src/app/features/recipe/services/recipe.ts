import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RecipeService {
  private _recipes$: Observable<any>

  constructor(private afDatabase: AngularFireDatabase) {
    this._recipes$ = afDatabase.list('recipes').valueChanges();
  }

  get recipes$(): Observable<any> {
    return this._recipes$;
  }
}
