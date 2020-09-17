import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {StepperState} from '../../../store/reducers/stepper.reducer';
import {getCurrentStep, getStepperState} from "../../../store/reducers";

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {

  constructor(public store: Store<StepperState>) { }

  ngOnInit(): void {
    this.store.select(getCurrentStep).subscribe(currentStep => {
      console.log('currentStep', currentStep);
    })
  }

}
