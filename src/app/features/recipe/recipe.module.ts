import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../../material/material.module';
import {RecipeListComponent} from './components/recipe-list.component';
import {MyRecipeListComponent} from './components/my-recipe-list.component';
import {AuthGuard} from '../auth/services/auth-guard';
import {RecipeService} from './services/recipe';
import {RecipeEffects} from './recipe.effects';
import * as recipeReducers from './recipe.reducers';


const COMPONENTS = [
  RecipeListComponent,
  MyRecipeListComponent
];

const routes: Routes = [
  {path: 'recipes', component: RecipeListComponent, canActivate: [AuthGuard]},
  {path: 'my-recipes', component: MyRecipeListComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('recipe', recipeReducers.reducer),
    EffectsModule.forFeature([RecipeEffects]),
    MaterialModule,
    FlexLayoutModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class RecipeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RecipeModule,
      providers: [RecipeService],
    };
  }
}
