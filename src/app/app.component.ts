import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Store} from '@ngrx/store';
import {StepperState} from './store/reducers/stepper.reducer';
import {SetNextStep, SetPrevStep} from './store/actions/stepper.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title;

  constructor(private translate: TranslateService, private store: Store<StepperState>) {
    translate.setDefaultLang('cs');
  }

  public prevStepClick(): void {
    this.store.dispatch(new SetPrevStep(true));
    console.log('prevStepClick');
  }

  public nextStepClick(): void {
    this.store.dispatch(new SetNextStep(true));
    console.log('nextStepClick');
  }
}
