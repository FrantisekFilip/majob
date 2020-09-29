import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {debounce, debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {StepperState} from "../../store/reducers/stepper.reducer";
import {SetFormValid} from "../../store/actions/stepper.actions";
import {distinctUntilChangedDeep} from '../../utils/distinct-until-changed-deep';
import {SetSecondStepData} from '../../store/actions/base-information.actions';
import {getSecondStepState} from '../../store/reducers';
import {Observable, Subject} from 'rxjs';
import {BaseInformationState} from '../../store/reducers/base-information.reducer';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent implements OnInit, AfterViewInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  public secondStepState$: Observable<BaseInformationState>;

  baseInformationFormGroup = new FormGroup({
    agreeBackContacted: new FormControl(false, [Validators.requiredTrue]),
    agreeProcessingPersonalData: new FormControl(false, [Validators.requiredTrue])
  });

  constructor(public translateService: TranslateService, public store: Store<StepperState>) {
  }

  ngOnInit(): void {
    this.secondStepState$ = this.store.pipe(takeUntil(this.unsubscribe$), select(getSecondStepState), );
  }

  ngAfterViewInit(): void {
    this.baseInformationFormGroup.valueChanges.pipe(debounceTime(1000), distinctUntilChanged()).subscribe(data => {

      this.store.dispatch(new SetFormValid(this.baseInformationFormGroup.valid));

      if (this.baseInformationFormGroup.valid) {
        this.store.dispatch(new SetSecondStepData({
          customerPhone: data.phone,
          customerEmail: data.email,
          agreementContact: data.agreeBackContacted,
          agreementProcessingPersonalData: data.agreeProcessingPersonalData}));
      }
    });
  }

  public onSubmit(): void {
    console.log(this.baseInformationFormGroup);
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
