import {ActionReducerMap, combineReducers, createFeatureSelector, createSelector, State} from '@ngrx/store';
import {baseInformationReducer, BaseInformationState} from './baseInformation.reducer';
import {stepperReducer, StepperState} from './stepper.reducer';

export const stepperKey = 'rootState';

export const reducers = combineReducers( {
  baseInformation: baseInformationReducer,
  stepper: stepperReducer
})


export const getState = createFeatureSelector<any>(stepperKey);

export const getStepperState = createSelector(
  getState,
  state => {
    return state.stepper;
  }
)


export const getNextState = createSelector(
  getStepperState,
  state => {
    return state.next;
  }
)

export const getIsFormValid = createSelector(
  getStepperState,
    state => {
    return state.formValid;
    }
)
