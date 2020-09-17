import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {SET_CURRENT_STEP, SetCurrentStep} from '../actions/stepper.actions';
import {STEP_TYPE} from '../../shared/constants/steps-types';
import { map, switchMap, take } from 'rxjs/operators';

@Injectable()
export class BaseInformationEffects {

  setCurrentStep$ = createEffect(
    () => this.actions$.pipe(
      ofType(SET_CURRENT_STEP),
      map(() => new SetCurrentStep(STEP_TYPE.FirsStep)),
    )
  );


  constructor(
    private actions$: Actions,
  ) {
  }
}
