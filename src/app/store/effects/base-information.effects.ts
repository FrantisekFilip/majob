import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {SET_CURRENT_STEP, SET_NEXT_STEP, SET_PREV_STEP, SetCurrentStep} from '../actions/stepper.actions';
import {STEP_TYPE} from '../../shared/constants/steps-types';
import {map, switchMap, take} from 'rxjs/operators';
import {WizardSteps} from '../../shared/constants/steps-types';

@Injectable()
export class BaseInformationEffects {

 /* setPrevStep$ = createEffect(
    () => this.actions$.pipe(
      ofType(SET_PREV_STEP),
      map((action: string) => {
          const actualStep = WizardSteps[action];
          return new SetCurrentStep(STEP_TYPE.FirsStep);
        }
      ),
    )
  );

  setNextStep$ = createEffect(
    () => this.actions$.pipe(
      ofType(SET_NEXT_STEP),
      map((action: string) => {
          const actualStep = WizardSteps[action];
          return new SetCurrentStep(STEP_TYPE.FirsStep);
        }
      ),
    )
  );*/


  constructor(
    private actions$: Actions,
  ) {
  }
}
