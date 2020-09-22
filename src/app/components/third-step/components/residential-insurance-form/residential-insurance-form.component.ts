import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  InsuranceType,
  PlaceType,
  ResidentialInsuranceTypes,
  ResidentialObjectPlaces,
  ResidentialObjectTypes,
  ResidentialType
} from '../../models';

@Component({
  selector: 'app-residential-insurance-form',
  templateUrl: './residential-insurance-form.component.html',
  styleUrls: ['./residential-insurance-form.component.scss']
})
export class ResidentialInsuranceFormComponent implements OnInit {

  residentialInsuranceFormGroup: FormGroup = new FormGroup({});

  objectTypes: ResidentialObjectTypes[] = [
    {
      value: ResidentialType.HOUSE,
      viewValue: 'rodinný dům'
    },
    {
      value: ResidentialType.APARTMENT_IN_PRIVATE,
      viewValue: 'byt v osobním vlastnictví'
    },
    {
      value: ResidentialType.HOLIDAY_HOUSE,
      viewValue: 'rekreační dům'
    },
    {
      value: ResidentialType.HOLIDAY_APARTMENT,
      viewValue: 'rekreační byt'
    }
  ];

  insuranceTypes: ResidentialInsuranceTypes[] = [
    {
      value: InsuranceType.STANDARD,
      viewValue: 'Standard'
    },
    {
      value: InsuranceType.MAXI,
      viewValue: 'Maxi'
    }
  ];

  objectPlaces: ResidentialObjectPlaces[] = [
    {
      value: PlaceType.FLOOR,
      viewValue: 'patro'
    },
    {
      value: PlaceType.GROUND_FLOOR,
      viewValue: 'přízemí'
    }
  ];

  newBuildingFormControl = new FormControl(false, []);
  newHouseFormControl = new FormControl(false, []);
  floodExclFormControl = new FormControl(true, []);

  constructor() {
  }

  ngOnInit(): void {
    this.residentialInsuranceFormGroup.addControl('newBuilding', this.newBuildingFormControl);
    this.residentialInsuranceFormGroup.addControl('newHouse', this.newHouseFormControl);
    this.residentialInsuranceFormGroup.addControl('floodExcluded', this.floodExclFormControl);
  }

  formSubmit(): void {
    console.log(this.residentialInsuranceFormGroup.getRawValue());
  }

}
