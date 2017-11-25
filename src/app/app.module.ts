import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../environments/environment';
import {reducer} from './auth/reducers/auth';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppComponent} from './core/containers/app.component';
import {LoginPageComponent} from './auth/containers/login-page.component'; // TODO: move to auth module
import {NotFoundPageComponent} from './core/containers/not-found-page.component';
import {CoreModule} from './core/core.module';
import {AuthModule} from './auth/auth.module';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: '**', component: NotFoundPageComponent}
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    StoreModule.forRoot({auth: reducer}),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    CoreModule.forRoot(),
    AuthModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
