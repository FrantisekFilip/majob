export enum PRODUCT_TYPE {
  // Pojištění odpovědnosti
  CitizensLiabilityInsurance = 'citizensLiabilityInsurance', // Pojištění odpovědnosti občanů
  EmployeeLiabilityInsurance = 'employeeLiabilityInsurance', // Pojištění odpovědnosti zaměstnance za škodu způsobenou zaměstnavateli

  // Pojištění majetku a odpovědnosti občanů
  FamilyHomeInsurance = 'familyHomeInsurance', // Pojištění rodinného domu
  ApartmentsInsurance = 'apartmentInsurance', // Pojištění bytu
  HouseholdInsurance = 'householdInsurance', // Pojištění domácnosti
  RecreationalObjectInsurance = 'recreationalObjectInsurance' // Pojištění rekreačního objektu
}

// Employee liability insurance for damage caused by the employer
export type ProductsTypes =
  PRODUCT_TYPE.CitizensLiabilityInsurance |
  PRODUCT_TYPE.EmployeeLiabilityInsurance |
  PRODUCT_TYPE.FamilyHomeInsurance |
  PRODUCT_TYPE.ApartmentsInsurance |
  PRODUCT_TYPE.HouseholdInsurance |
  PRODUCT_TYPE.RecreationalObjectInsurance;
