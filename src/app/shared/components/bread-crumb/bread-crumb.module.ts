import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BreadCrumbComponent} from './bread-crumb.component';
import {TranslateModule} from "@ngx-translate/core";
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [BreadCrumbComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  exports: [BreadCrumbComponent]
})
export class BreadCrumbModule { }
