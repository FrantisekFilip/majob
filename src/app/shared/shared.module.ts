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
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { EmailValidatorDirective } from './email-validator.directive';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    InputPersonalIdComponent,
    PhoneNumberComponent,
    AddressComponent,
    FooterComponent,
    HeaderComponent,
    EmailValidatorDirective,
    SelectComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    BsDropdownModule.forRoot(),
    NgxIntlTelInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule
  ],
  exports: [
    InputPersonalIdComponent,
    PhoneNumberComponent,
    AddressComponent,
    FooterComponent,
    HeaderComponent,
    EmailValidatorDirective,
    SelectComponent
  ]
})
export class SharedModule { }
