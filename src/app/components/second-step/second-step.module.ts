import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondStepRoutingModule } from './second-step-routing.module';
import {SecondStepComponent} from './second-step.component';
import {TranslateModule} from '@ngx-translate/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {EmailModule} from '../../shared/components/email/email.module';
import {SharedModule} from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThirdStepComponent } from '../third-step/third-step.component';

@NgModule({
  declarations: [SecondStepComponent, ThirdStepComponent],
  imports: [
    CommonModule,
    SecondStepRoutingModule,
    TranslateModule,
    MatFormFieldModule,
    EmailModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SecondStepModule { }
