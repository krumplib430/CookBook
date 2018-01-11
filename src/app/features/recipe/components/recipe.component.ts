import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../auth/services/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'cb-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  recipe$: Observable<any>;

  constructor(private route: ActivatedRoute, private authService: AuthService, private afDatabase: AngularFireDatabase) {
    this.recipe$ = this.afDatabase.object('recipes/' + this.route.snapshot.paramMap.get('id')).valueChanges();
  }
}
