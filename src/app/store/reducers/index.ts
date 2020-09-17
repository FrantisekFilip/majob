import {ActionReducerMap, combineReducers} from '@ngrx/store';
import {baseInformationReducer, BaseInformationState} from './baseInformation.reducer';
import {stepperReducer, StepperState} from './stepper.reducer';


export const reducers = combineReducers( {
  baseInformation: baseInformationReducer,
  stepper: stepperReducer
})
