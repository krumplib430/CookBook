import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {MainNavbarComponent} from './main-navbar/main-navbar.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RecipeComponent} from './recipe/recipe.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavbarComponent,
    LoginComponent,
    RegisterComponent,
    RecipeListComponent,
    RecipeComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
