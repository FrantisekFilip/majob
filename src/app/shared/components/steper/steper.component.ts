import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {select, State} from '@ngrx/store';
import {StepperState} from '../../../store/reducers/stepper.reducer';
import {Observable} from 'rxjs';
import {getIsFormValid, getStepperState} from '../../../store/reducers';

@Component({
  selector: 'app-steper',
  templateUrl: './steper.component.html',
  styleUrls: ['./steper.component.scss']
})
export class SteperComponent implements OnInit {

  @Output() prevStepClick = new EventEmitter();

  @Output() nextStepClick = new EventEmitter();

  public stepperState$: Observable<StepperState>;

  public isFormValid$: Observable<StepperState>;

  constructor(public store: State<StepperState>) {
  }

  ngOnInit(): void {
    this.stepperState$ = this.store.pipe(select(getStepperState));
    this.isFormValid$ = this.store.pipe(select(getIsFormValid));
  }

  public prevStep(): void {
    this.prevStepClick.emit();
  }

  public nextStep(): void {
    this.nextStepClick.emit();
  }
}
