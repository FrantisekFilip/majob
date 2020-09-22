import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MunicipalityPartComponent } from './municipality-part.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MunicipalityPartComponent],
  exports: [
    MunicipalityPartComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class MunicipalityPartModule { }
