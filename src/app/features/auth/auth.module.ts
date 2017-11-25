import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {reducer} from './reducers/auth';
import {LoginPageComponent} from './containers/login-page.component';
import {LoginFormComponent} from './components/login-form.component';

export const COMPONENTS = [
  LoginPageComponent,
  LoginFormComponent
];

const routes: Routes = [
  {path: 'login', component: LoginPageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducer),
    ReactiveFormsModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: []
    };
  }
}
