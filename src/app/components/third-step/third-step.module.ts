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

@NgModule({
  declarations: [
    ThirdStepComponent,
    InsurancePlaceFormComponent
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
  ]
})
export class ThirdStepModule { }
