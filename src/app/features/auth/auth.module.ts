import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './effects/auth';
import {LoginPageComponent} from './containers/login-page.component';
import {LoginFormComponent} from './components/login-form.component';
import {AuthService} from './services/auth';
import {AuthGuard} from './services/auth-guard';
import * as authReducers from './reducers/auth';

const COMPONENTS = [
  LoginPageComponent,
  LoginFormComponent
];

const routes: Routes = [
  {path: 'login', component: LoginPageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', authReducers.reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [AuthService, AuthGuard],
    };
  }
}
