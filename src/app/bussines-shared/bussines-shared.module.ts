import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDetailComponent } from './client-detail/client-detail.component';



@NgModule({
  declarations: [ClientDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ClientDetailComponent
  ]
})
export class BussinesSharedModule { }
