import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberDescriptiveComponent } from './number-descriptive.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    NumberDescriptiveComponent
  ],
  exports: [
    NumberDescriptiveComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class NumberDescriptiveModule { }