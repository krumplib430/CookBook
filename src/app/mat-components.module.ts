import {NgModule} from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule
  ]
})
export class MatComponentsModule {
}
