import {SET_PRODUCT, SetBaseInformationActions} from '../actions/base-information.actions';
import {PRODUCT_TYPE, ProductsTypes} from '../../shared/constants/products-types';

export interface BaseInformationState {
  productType: ProductsTypes;
  customerName: string;
  customerEmail: string;
  agreementContact: boolean;
  agreementProcessingPersonalData: boolean;
}

export const initialState: BaseInformationState = {
  productType: PRODUCT_TYPE.CitizensLiabilityInsurance,
  customerName: '',
  customerEmail: '',
  agreementContact: false,
  agreementProcessingPersonalData: false
}

export function baseInformationReducer(state = initialState, action: SetBaseInformationActions): BaseInformationState {
  switch (action.type) {

    case SET_PRODUCT: {
      return {...state, productType: action.payload};
    }

    default: {
      return state;
    }
  }
}
