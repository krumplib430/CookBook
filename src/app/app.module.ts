import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../environments/environment';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomRouterStateSerializer} from './services/router-state-serializer';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducers} from './reducers/app';
import {CoreModule} from './features/core/core.module';
import {AuthModule} from './features/auth/auth.module';
import {RegistrationModule} from './features/registration/registration.module';
import {RecipeModule} from './features/recipe/recipe.module';
import {AppComponent} from './features/core/components/app.component';
import {NotFoundPageComponent} from './features/core/components/not-found-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({maxAge: 25}),
    CoreModule.forRoot(),
    AuthModule.forRoot(),
    RegistrationModule.forRoot(),
    RecipeModule.forRoot(),
  ],
  providers: [{provide: RouterStateSerializer, useClass: CustomRouterStateSerializer}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
