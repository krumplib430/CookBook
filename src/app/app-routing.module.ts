import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeComponent} from './recipe/recipe.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'recipe-list', component: RecipeListComponent},
  {path: 'recipe', component: RecipeComponent},
  {path: 'recipe-edit', component: RecipeEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
