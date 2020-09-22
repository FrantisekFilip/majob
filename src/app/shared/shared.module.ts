import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPersonalIdComponent } from './input-personal-id/input-personal-id.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './address/address.component';
import { HttpClientJsonpModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EmailValidatorDirective } from './email-validator.directive';
import { SelectComponent } from './select/select.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { BreadCrumbModule } from './components/bread-crumb/bread-crumb.module';
import { PhoneNumberComponent } from './forms/phone-number/phone-number.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MatSelectModule } from '@angular/material/select';

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
    FormsModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    BsDropdownModule.forRoot(),
    NgxIntlTelInputModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatIconModule,
    BreadCrumbModule,
    /* BrowserAnimationsModule,*/
    CollapseModule,
    MatSelectModule
  ],
  exports: [
    InputPersonalIdComponent,
    PhoneNumberComponent,
    AddressComponent,
    FooterComponent,
    HeaderComponent,
    EmailValidatorDirective,
    SelectComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }

