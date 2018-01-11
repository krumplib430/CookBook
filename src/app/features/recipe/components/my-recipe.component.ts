import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../auth/services/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {Recipe} from '../recipe.models';

@Component({
  selector: 'cb-my-recipe',
  templateUrl: './my-recipe.component.html',
  styleUrls: ['./my-recipe.component.scss']
})
export class MyRecipeComponent {
  recipe$: Observable<Recipe>;

  constructor(private route: ActivatedRoute, private authService: AuthService, private afDatabase: AngularFireDatabase) {
    this.recipe$ = this.afDatabase.object('users/' + this.authService.userData.uid + '/recipes/' + this.route.snapshot.paramMap.get('id')).valueChanges();
  }
}
