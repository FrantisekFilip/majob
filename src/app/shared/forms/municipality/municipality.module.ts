import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { MunicipalityComponent } from './municipality.component';


@NgModule({
  declarations: [
    MunicipalityComponent
  ],
  exports: [
    MunicipalityComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class MunicipalityModule { }
