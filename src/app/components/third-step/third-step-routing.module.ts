import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ThirdStepComponent } from './third-step.component';

const routes: Routes = [
  {
    path: '',
    component: ThirdStepComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ThirdStepRoutingModule { }
