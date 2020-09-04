import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import {NgxIntlTelInputModule} from "ngx-intl-tel-input";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PhoneNumberComponent],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(), 
    NgxIntlTelInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PhoneNumberComponent
  ]
})
export class SharedModule { }
