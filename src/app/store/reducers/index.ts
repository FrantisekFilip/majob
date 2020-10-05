import {ActionReducerMap, combineReducers, createFeatureSelector, createSelector, State} from '@ngrx/store';
import {baseInformationReducer, BaseInformationState} from './base-information.reducer';
import {stepperReducer, StepperState} from './stepper.reducer';
import {thirdStepInformationReducer} from './third-step-information.reducer';

export const stepperKey = 'rootState';

export const reducers = combineReducers( {
  baseInformation: baseInformationReducer,
  stepper: stepperReducer,
  thirdStepInformation: thirdStepInformationReducer
});


export const getState = createFeatureSelector<any>(stepperKey);

// Step 1
export const getStepperState = createSelector(
  getState,
  state => {
    return state.stepper;
  }
);

export const getNextState = createSelector(
  getStepperState,
  state => {
    return state.next;
  }
);

export const getIsFormValid = createSelector(
  getStepperState,
    state => {
    return state.formValid;
    }
);

export const getCurrentStep = createSelector(
  getStepperState,
  state => {
    return state.currentStep;
  }
);

// Step 2
export const getSecondStepState = createSelector(
  getState,
  state => {
    return state.baseInformation;
  }
);

// Step 3

export const getThirdStepState = createSelector(
  getState,
  state => {
    return state.thirdStepInformation;
  }
);

export const getInsurancePlaceForm = createSelector(
  getThirdStepState,
  state => {
    return state.insurancePlaceInformation;
  }
);

