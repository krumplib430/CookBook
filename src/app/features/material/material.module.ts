import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
} from '@angular/material';

const COMPONENTS = [
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
];

@NgModule({
  imports: COMPONENTS,
  exports: COMPONENTS,
})
export class MaterialModule {
}
