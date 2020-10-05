import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberRegisteredComponent } from './number-registered.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NumberRegisteredComponent],
  exports: [
    NumberRegisteredComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class NumberRegisteredModule { }
