import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {select, Store} from '@ngrx/store';
import {StepperState} from './store/reducers/stepper.reducer';
import {SetCurrentStep, SetNextStep, SetPrevStep} from './store/actions/stepper.actions';
import {NavigationEnd, Router} from "@angular/router";
import {distinctUntilChanged, filter} from "rxjs/operators";
import {getStepperState} from "./store/reducers";
import {distinctUntilChangedDeep} from "./utils/distinct-until-changed-deep";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public title;

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

    this.store.select(getStepperState).pipe(distinctUntilChangedDeep()).subscribe(step => {
      this.router.navigate([`/${step.currentStep}`]);
    });
  }

  public prevStepClick(): void {
    this.store.dispatch(new SetPrevStep());
  }

  public nextStepClick(): void {
    this.store.dispatch(new SetNextStep());
  }
}
