import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberOrientedComponent } from './number-oriented.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NumberOrientedComponent
  ],
  exports: [
    NumberOrientedComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class NumberOrientedModule { }