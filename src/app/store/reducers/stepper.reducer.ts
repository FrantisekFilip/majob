import {STEP_TYPE, StepsTypes} from '../../shared/constants/steps-types';
import {
  SET_CURRENT_STEP,
  SET_FORM_VALID,
  SET_NEXT_STEP,
  SET_PREV_STEP,
  SetStepperActions
} from '../actions/stepper.actions';

export interface StepperState {
  prev: boolean;
  next: boolean;
  formValid: boolean;
  currentStep: StepsTypes;
}

export const initialState: StepperState = {
  prev: false,
  next: false,
  formValid: false,
  currentStep: STEP_TYPE.FirsStep
}

export function stepperReducer(state = initialState, action: SetStepperActions): StepperState {
  switch (action.type) {

    case SET_PREV_STEP: {
      return {...state, prev: true, next: false};
    }

    case SET_NEXT_STEP: {
      return {...state, next: true, prev: false};
    }

    case SET_FORM_VALID: {
      return {...state, formValid: action.payload };
    }

    case SET_CURRENT_STEP: {
      return {...state, currentStep: action.payload, next: false, prev: false};
    }

    default: {
      return state;
    }
  }
}
