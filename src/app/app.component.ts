import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {select, Store} from '@ngrx/store';
import {StepperState} from './store/reducers/stepper.reducer';
import {SetCurrentStep, SetNextStep, SetPrevStep} from './store/actions/stepper.actions';
import {NavigationEnd, Router} from '@angular/router';
import {debounceTime, distinctUntilChanged, filter} from 'rxjs/operators';
import {getCurrentStep, getStepperState} from './store/reducers';
import {distinctUntilChangedDeep} from './utils/distinct-until-changed-deep';
import {STEP_TYPE, WizardSteps} from './shared/constants/steps-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title;
  public stepsHistory: { path: STEP_TYPE, label: string, last: boolean }[] = [];

  constructor(private translate: TranslateService,
              private store: Store<StepperState>,
              public router: Router
  ) {
    translate.setDefaultLang('cs');
  }

  public ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      distinctUntilChangedDeep()).subscribe(
      (event: any) => {
        this.store.dispatch(new SetCurrentStep(event.urlAfterRedirects.substring(1)));
      });

    this.store.select(getStepperState).pipe(debounceTime(1), distinctUntilChanged()).subscribe(step => {
      this.router.navigate([`/${step.currentStep}`]);
    });

    this.store.select(getCurrentStep).subscribe(currentStep => {
      const currentHistory = WizardSteps.slice(0, WizardSteps.indexOf(currentStep) + 1);
      this.stepsHistory = [];
      currentHistory.forEach(step => {
        this.translate.get(step).subscribe(translateLabel => {
          const exist = this.stepsHistory.findIndex(stepH => stepH.label === translateLabel) >= 0;
          if (!exist) {
            this.stepsHistory.push({
              path: step,
              label: translateLabel,
              last: false
            });
          }
        });
      });
    });
  }

  public prevStepClick(): void {
    this.store.dispatch(new SetPrevStep());
  }

  public nextStepClick(): void {
    this.store.dispatch(new SetNextStep());
  }
}
