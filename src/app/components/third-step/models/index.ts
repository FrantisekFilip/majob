export enum ResidentialType {
  HOUSE = 'HOUSE',
  APARTMENT_IN_PRIVATE = 'APARTMENT_IN_PRIVATE',
  HOLIDAY_HOUSE = 'HOLIDAY_HOUSE',
  HOLIDAY_APARTMENT = 'HOLIDAY_APARTMENT'
}

export enum InsuranceType {
  STANDARD = 'STANDARD',
  MAXI = 'MAXI'
}

export enum PlaceType {
  FLOOR = 'FLOOR',
  GROUND_FLOOR = 'GROUND_FLOOR'
}

export interface ResidentialObjectTypes {
   value: ResidentialType;
   viewValue: string;
 }

export interface ResidentialInsuranceTypes {
  value: InsuranceType;
  viewValue: string;
}

export interface ResidentialObjectPlaces {
  value: PlaceType;
  viewValue: string;
}
