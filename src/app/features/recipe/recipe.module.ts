import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RecipeListComponent} from './containers/recipe-list.component';
import {AuthGuard} from '../auth/services/auth-guard';

const COMPONENTS = [RecipeListComponent];

const routes: Routes = [
  {path: 'recipes', component: RecipeListComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class RecipeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RecipeModule,
      providers: [],
    };
  }
}
