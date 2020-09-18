import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {FormGroup, FormGroupDirective} from '@angular/forms';
import {distinctUntilChanged} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {StepperState} from "../../store/reducers/stepper.reducer";
import {SetFormValid} from "../../store/actions/stepper.actions";

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent implements OnInit, AfterViewInit {

  baseInformationFormGroup = new FormGroup({});

/*
  @ViewChild('baseInfoForm') baseInfoForm: FormGroupDirective;
*/

  constructor(public translateService: TranslateService, public store: Store<StepperState>) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.baseInformationFormGroup.valueChanges.pipe(distinctUntilChanged()).subscribe(data => {
      this.store.dispatch(new SetFormValid(this.baseInformationFormGroup.valid))
      console.log(this.baseInformationFormGroup.valid);
    });
  }

  public onSubmit(): void {
    console.log(this.baseInformationFormGroup);
  }
}
