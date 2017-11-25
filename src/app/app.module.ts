import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StoreModule} from '@ngrx/store';

import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {MainNavbarComponent} from './main-navbar/main-navbar.component';
import {LoginComponent} from './login/login.component';
import {LoginFormComponent} from './auth/components/login-form.component';
import {RegisterComponent} from './register/register.component';
import {RecipeComponent} from './recipe/recipe.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {MyRecipesComponent} from './my-recipes/my-recipes.component';

import {AuthService} from './auth.service';
import {RegistrationService} from './registration.service';
import {AuthGuardService} from './auth-guard.service';
import {reducer} from './auth/reducers/auth';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavbarComponent,
    LoginComponent,
    RegisterComponent,
    RecipeListComponent,
    RecipeComponent,
    RecipeEditComponent,
    MyRecipesComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    StoreModule.forRoot({auth: reducer}),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [
    AuthService,
    RegistrationService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
