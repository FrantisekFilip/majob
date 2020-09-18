import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SteperComponent } from './steper.component';

@NgModule({
  declarations: [SteperComponent],
  exports: [
    SteperComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SteperModule { }
