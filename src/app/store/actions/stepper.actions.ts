import { Action } from '@ngrx/store';
import {StepsTypes} from '../../shared/constants/steps-types';

export const SET_PREV_STEP = '[App] Set previous step';
export const SET_NEXT_STEP = '[App] Set next step';
export const SET_CURRENT_STEP = '[App] Set actual step';

export class SetPrevStep implements Action {
  readonly type = SET_PREV_STEP;

  constructor(public payload: boolean) {}
}

export class SetNextStep implements Action {
  readonly type = SET_NEXT_STEP;

  constructor(public payload: boolean) {}
}

export class SetCurrentStep implements Action {
  readonly type = SET_CURRENT_STEP;

  constructor(public payload: StepsTypes) {}
}

export type SetStepperActions = SetPrevStep | SetNextStep | SetCurrentStep;
