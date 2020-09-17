import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {SET_CURRENT_STEP, SET_NEXT_STEP, SET_PREV_STEP, SetCurrentStep} from '../actions/stepper.actions';
import {STEP_TYPE, StepsTypes} from '../../shared/constants/steps-types';
import {distinctUntilChanged, filter, map, switchMap, take} from 'rxjs/operators';
import {WizardSteps} from '../../shared/constants/steps-types';
import {Store} from "@ngrx/store";
import {StepperState} from "../reducers/stepper.reducer";
import {getNextState, getStepperState} from '../reducers/index';
@Injectable()
export class StepperEffects {

  setPrevStep$ = createEffect(
    () => this.actions$.pipe(
      ofType(SET_PREV_STEP),
      switchMap(() => {
          return this.store.select(getStepperState).pipe(
            distinctUntilChanged((prev, curr) => prev.prev === curr.prev),
            filter(stepperState => stepperState.prev),
            map(stepperState => {
              const selectedStep = WizardSteps[WizardSteps.findIndex(step => step === stepperState.currentStep) - 1];
              return new SetCurrentStep(selectedStep);
            }));
        }
      ),
    )
  );

  setNextStep$ = createEffect(
    () => this.actions$.pipe(
      ofType(SET_NEXT_STEP),
      switchMap(() => {
        return this.store.select(getStepperState).pipe(
          distinctUntilChanged((prev, curr) => prev.next === curr.next),
          filter(stepperState => stepperState.next),
          map(stepperState => {
          const selectedStep = WizardSteps[WizardSteps.findIndex(step => step === stepperState.currentStep) + 1];
          return new SetCurrentStep(selectedStep);
        }));
        }
      ),
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<StepperState>,
  ) {
  }
}
