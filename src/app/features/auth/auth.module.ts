import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../../material/material.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './auth.effects';
import {LoginPageComponent} from './components/login-page.component';
import {AuthService} from './services/auth';
import {AuthGuard} from './services/auth-guard';
import * as authReducers from './auth.reducers';

const COMPONENTS = [
  LoginPageComponent
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
    MaterialModule,
    FlexLayoutModule,
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
