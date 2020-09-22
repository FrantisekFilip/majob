import {SET_PRODUCT, SET_SECOND_STEP_DATA, SetBaseInformationActions} from '../actions/base-information.actions';
import {PRODUCT_TYPE, ProductsTypes} from '../../shared/constants/products-types';

export interface BaseInformationState {
  productType: ProductsTypes;
  customerPhone: string;
  customerEmail: string;
  agreementContact: boolean;
  agreementProcessingPersonalData: boolean;
}

export const initialState: BaseInformationState = {
  productType: PRODUCT_TYPE.CitizensLiabilityInsurance,
  customerPhone: '',
  customerEmail: '',
  agreementContact: false,
  agreementProcessingPersonalData: false
};

export function baseInformationReducer(state = initialState, action: SetBaseInformationActions): BaseInformationState {
  switch (action.type) {

    case SET_PRODUCT: {
      return {...state, productType: action.payload};
    }

    case SET_SECOND_STEP_DATA: {
      return {
        ...state, customerPhone: action.payload.customerPhone,
        customerEmail: action.payload.customerEmail,
        agreementContact: action.payload.agreementContact,
        agreementProcessingPersonalData: action.payload.agreementProcessingPersonalData
      };
    }

    default: {
      return state;
    }
  }
}
