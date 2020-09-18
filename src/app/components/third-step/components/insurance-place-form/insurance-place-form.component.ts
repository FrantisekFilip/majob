import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-insurance-place-form',
  templateUrl: './insurance-place-form.component.html',
  styleUrls: ['./insurance-place-form.component.scss']
})
export class InsurancePlaceFormComponent implements OnInit {

  insurancePlaceFormGroup: FormGroup = new FormGroup({});

  constructor() {
  }

  ngOnInit(): void {
  }

  insuranceFormSubmit(): void {
    console.log(this.insurancePlaceFormGroup.getRawValue());
  }


}
