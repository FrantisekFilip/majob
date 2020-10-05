import { Action } from '@ngrx/store';
import {ProductsTypes} from '../../shared/constants/products-types';

export const SET_PRODUCT = '[App] Set product';

export const SET_SECOND_STEP_DATA = '[App] Set second step data';

export const SET_INSURANCE_PLACE_FORM = '[App] Set insurance place form';

export class SetProduct implements Action {
  readonly type = SET_PRODUCT;

  constructor(public payload: ProductsTypes) {}
}

export class SetSecondStepData implements Action {
  readonly type = SET_SECOND_STEP_DATA;

  constructor(public payload: { customerPhone: string,
    customerEmail: string,
    agreementContact: boolean,
    agreementProcessingPersonalData: boolean}) {
  }
}

export type SetBaseInformationActions = SetProduct | SetSecondStepData;
