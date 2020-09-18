import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstStepComponent} from "./first-step.component";

const routes: Routes = [
  {
    path: '',
    component: FirstStepComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstStepRoutingModule { }
