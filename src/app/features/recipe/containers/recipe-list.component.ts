import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../../app.state';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'cb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {

  constructor(private store: Store<State>) {

  }

  ngOnInit() {

  }

}
