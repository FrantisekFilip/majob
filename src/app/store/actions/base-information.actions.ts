import { Action } from '@ngrx/store';
import {ProductsTypes} from '../../shared/constants/products-types';

export const SET_PRODUCT = '[App] Set product';

export class SetProduct implements Action {
  readonly type = SET_PRODUCT;

  constructor(public payload: ProductsTypes) {}
}

export type SetBaseInformationActions = SetProduct;
