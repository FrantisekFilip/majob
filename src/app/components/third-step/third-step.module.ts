import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { ThirdStepRoutingModule } from './third-step-routing.module';
import { ThirdStepComponent } from './third-step.component';
import { SharedModule } from '../../shared/shared.module';
import { ZipCodeModule } from '../../shared/forms/zip-code/zip-code.module';
import { InsurancePlaceFormComponent } from './components/insurance-place-form/insurance-place-form.component';
import { MunicipalityModule } from '../../shared/forms/municipality/municipality.module';
import { StreetModule } from '../../shared/forms/street/street.module';
import { MunicipalityPartModule } from '../../shared/forms/municipality-part/municipality-part.module';
import { NumberRegisteredModule } from '../../shared/forms/number-registered/number-registered.module';
import { NumberDescriptiveModule } from '../../shared/forms/number-descriptive/number-descriptive.module';
import { NumberOrientedModule } from '../../shared/forms/number-oriented/number-oriented.module';
import { ResidentialInsuranceFormComponent } from './components/residential-insurance-form/residential-insurance-form.component';
import { ComboboxModule } from '../../shared/forms/combobox/combobox.module';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    ThirdStepComponent,
    InsurancePlaceFormComponent,
    ResidentialInsuranceFormComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    ThirdStepRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ZipCodeModule,
    MunicipalityModule,
    StreetModule,
    MunicipalityPartModule,
    NumberRegisteredModule,
    NumberDescriptiveModule,
    NumberOrientedModule,
    ComboboxModule,
    MatRadioModule,
    MatFormFieldModule,
  ]
})
export class ThirdStepModule { }
