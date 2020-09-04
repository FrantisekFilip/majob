import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ClientDetailComponent, PersonDetailComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ClientDetailComponent
  ]
})
export class BussinesSharedModule { }
