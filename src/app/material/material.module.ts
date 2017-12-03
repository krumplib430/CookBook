import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
} from '@angular/material';

const COMPONENTS = [
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
];

@NgModule({
  imports: COMPONENTS,
  exports: COMPONENTS,
})
export class MaterialModule {
}
