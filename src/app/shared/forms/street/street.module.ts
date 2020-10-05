import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreetComponent } from './street.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [StreetComponent],
  exports: [
    StreetComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class StreetModule { }
