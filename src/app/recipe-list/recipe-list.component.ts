import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {
  recipesObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.recipesObservable = this.db.list('/recipes').valueChanges();
  }
}
