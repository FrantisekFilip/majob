import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {BaseInformationState} from '../../../../store/reducers/base-information.reducer';
import {SetInsurancePlaceForm} from '../../../../store/actions/third-step-information.actions';
import {InsurancePlaceInformation} from '../../../../shared/models/insurance-place-information';
import {getInsurancePlaceForm} from 'src/app/store/reducers';
import {Observable} from 'rxjs';
import {ThirdStepInformationState} from '../../../../store/reducers/third-step-information.reducer';

@Component({
  selector: 'app-insurance-place-form',
  templateUrl: './insurance-place-form.component.html',
  styleUrls: ['./insurance-place-form.component.scss']
})
export class InsurancePlaceFormComponent implements OnInit {

  insurancePlaceFormGroup: FormGroup = new FormGroup({});
  public insurancePlaceFormState$: Observable<InsurancePlaceInformation>;

  constructor(public store: Store<InsurancePlaceInformation>) {
  }

  ngOnInit(): void {
    this.insurancePlaceFormState$ = this.store.pipe(select(getInsurancePlaceForm));
  }

  insuranceFormSubmit(): void {
    if (this.insurancePlaceFormGroup.valid) {
      const formObj = this.insurancePlaceFormGroup.getRawValue();
      const obj: InsurancePlaceInformation = {
        zipCode: formObj.zipCode,
        municipality: formObj.municipality,
        municipalityPart: formObj.municipalityPart,
        street: formObj.street,
        numberDescriptive: formObj.numberDescriptive,
        numberRegistered: formObj.numberRegistered,
        numberOriented: formObj.numberOriented
      };

      this.store.dispatch(new SetInsurancePlaceForm(obj));
    }

    console.log(this.insurancePlaceFormGroup.getRawValue());
  }


}
