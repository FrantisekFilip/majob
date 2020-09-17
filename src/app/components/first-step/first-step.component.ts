import { Component, OnInit } from '@angular/core';
import {ConstantService} from '../../services/constants/constant.service';
import {TranslateService} from '@ngx-translate/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {BaseInformationState} from "../../store/reducers/baseInformation.reducer";
import {SetProduct} from "../../store/actions/base-information.actions";
import {getStepperState} from "../../store/reducers";
import {SetNextStep} from "../../store/actions/stepper.actions";

@Component({
  selector: 'app-product-select',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent implements OnInit {

  public liabilityInsuranceProducts;
  public propertyInsuranceProducts;

  constructor(private constantService: ConstantService,
              public translate: TranslateService,
              public router: Router,
              private store: Store<BaseInformationState>) {
    this.getLiabilityInsuranceProducts();
    this.getPropertyInsuranceProducts();
  }

  ngOnInit(): void {
  }

  public getLiabilityInsuranceProducts(): void {
   this.liabilityInsuranceProducts = this.constantService.liabilityInsuranceProducts;
  }

  public getPropertyInsuranceProducts(): void {
    this.propertyInsuranceProducts = this.constantService.propertyInsuranceProducts;
  }

  public gotTo(product): void {
      this.store.dispatch(new SetProduct(product));
      this.store.dispatch(new SetNextStep());
  }
}
