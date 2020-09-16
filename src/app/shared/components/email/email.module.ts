import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email.component';
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [EmailComponent],
  exports: [
    EmailComponent
  ],
  imports: [
    CommonModule,
    MatInputModule
  ]
})
export class EmailModule { }
