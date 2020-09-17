import {Injectable} from '@angular/core';
import {PRODUCT_TYPE, ProductsTypes} from "../../shared/constants/products-types";

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() {
  }

  get propertyInsuranceProducts(): ProductsTypes[] {
    return [PRODUCT_TYPE.CitizensLiabilityInsurance, PRODUCT_TYPE.EmployeeLiabilityInsurance];
  }

  get liabilityInsuranceProducts(): ProductsTypes[] {
    return [PRODUCT_TYPE.FamilyHomeInsurance,
      PRODUCT_TYPE.ApartmentsInsurance,
      PRODUCT_TYPE.HouseholdInsurance,
      PRODUCT_TYPE.RecreationalObjectInsurance];
  }
}
