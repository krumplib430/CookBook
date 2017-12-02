import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RegistrationPageComponent} from './components/registration-page.component';
import {RegistrationService} from './services/registration';

const COMPONENTS = [
  RegistrationPageComponent
];

const routes: Routes = [
  {path: 'register', component: RegistrationPageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class RegistrationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RegistrationModule,
      providers: [RegistrationService],
    };
  }
}
