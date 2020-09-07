import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPersonalIdComponent } from './input-personal-id/input-personal-id.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import {NgxIntlTelInputModule} from "ngx-intl-tel-input";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './address/address.component';
import { HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [
    InputPersonalIdComponent,
    PhoneNumberComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    BsDropdownModule.forRoot(),
    NgxIntlTelInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientJsonpModule
  ],
  exports: [
    InputPersonalIdComponent,
    PhoneNumberComponent,
    AddressComponent
  ]
})
export class SharedModule { }
