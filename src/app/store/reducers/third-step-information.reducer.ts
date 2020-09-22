import {SET_INSURANCE_PLACE_FORM, SET_PRODUCT, SET_SECOND_STEP_DATA, SetBaseInformationActions} from '../actions/base-information.actions';
import {InsurancePlaceInformation} from '../../shared/models/insurance-place-information';
import {SetThirdStepInformationActions} from '../actions/third-step-information.actions';

export interface ThirdStepInformationState {
  insurancePlaceInformation: InsurancePlaceInformation;
}

export const initialState: ThirdStepInformationState = {
  insurancePlaceInformation: {
    zipCode: '',
    municipality: '',
    municipalityPart: '',
    street: '',
    numberDescriptive: '',
    numberRegistered: '',
    numberOriented: ''
  }
};

export function thirdStepInformationReducer(state = initialState, action: SetThirdStepInformationActions): ThirdStepInformationState {
  switch (action.type) {

    case SET_INSURANCE_PLACE_FORM: {
      return {...state, insurancePlaceInformation: action.payload};
    }

    default: {
      return state;
    }
  }
}
