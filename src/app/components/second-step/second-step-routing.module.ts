import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {SecondStepComponent} from './second-step.component';

const routes: Routes = [
  {
    path: '',
    component: SecondStepComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SecondStepRoutingModule { }
