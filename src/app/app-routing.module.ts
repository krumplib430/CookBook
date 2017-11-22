import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {MyRecipesComponent} from './my-recipes/my-recipes.component';
import {LoginFormComponent} from './auth/components/login-form/login-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'recipe-list', component: RecipeListComponent},
  {path: 'my-recipes', component: MyRecipesComponent},
  {path: 'recipe-edit', component: RecipeEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
