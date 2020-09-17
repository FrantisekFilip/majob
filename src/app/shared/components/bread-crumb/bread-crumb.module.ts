import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BreadCrumbComponent} from './bread-crumb.component';

@NgModule({
  declarations: [BreadCrumbComponent],
  imports: [
    CommonModule
  ],
  exports: [BreadCrumbComponent]
})
export class BreadCrumbModule { }
