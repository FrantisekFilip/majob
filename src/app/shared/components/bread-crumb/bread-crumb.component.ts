import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {StepperState} from '../../../store/reducers/stepper.reducer';
import {getCurrentStep, getStepperState} from '../../../store/reducers';
import {STEP_TYPE, WizardSteps} from '../../constants/steps-types';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {

  @Input()
  public stepsHistory: {path: STEP_TYPE, label: string, last: boolean}[] = []

  constructor(public store: Store<StepperState>) { }

  ngOnInit(): void {
  }

}
