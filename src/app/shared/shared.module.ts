import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPersonalIdComponent } from './input-personal-id/input-personal-id.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    InputPersonalIdComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    InputPersonalIdComponent
  ]
})
export class SharedModule { }
