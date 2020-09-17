import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BreadCrumbComponent} from './bread-crumb.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [BreadCrumbComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [BreadCrumbComponent]
})
export class BreadCrumbModule { }
