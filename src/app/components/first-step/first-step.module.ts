import { NgModule } from '@angular/core';
import {FirstStepComponent} from './first-step.component';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {MatIconModule} from '@angular/material/icon';
import {FirstStepRoutingModule} from './first-step-routing.module';

@NgModule({
  imports: [CommonModule, TranslateModule, MatIconModule, FirstStepRoutingModule],
  declarations: [FirstStepComponent],
  exports: [FirstStepComponent]
})
export class FirstStepModule {}
