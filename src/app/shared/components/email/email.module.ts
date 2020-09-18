import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EmailComponent],
  exports: [
    EmailComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class EmailModule { }
