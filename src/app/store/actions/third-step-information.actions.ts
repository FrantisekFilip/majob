import { Action } from '@ngrx/store';
import {ProductsTypes} from '../../shared/constants/products-types';
import {InsurancePlaceInformation} from '../../shared/models/insurance-place-information';

export const SET_INSURANCE_PLACE_FORM = '[App] Set insurance place form';

export class SetInsurancePlaceForm implements Action {
  readonly type = SET_INSURANCE_PLACE_FORM;

  constructor(public payload: InsurancePlaceInformation) {
  }
}

export type SetThirdStepInformationActions = SetInsurancePlaceForm;
