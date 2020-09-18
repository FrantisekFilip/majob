export enum STEP_TYPE {
  FirsStep = 'first-step',
  SecondStep = 'second-step',
  ThirdStep = 'third-step',
  FourthStep = 'fourth-step',
}

export type StepsTypes =
  STEP_TYPE.FirsStep |
  STEP_TYPE.SecondStep |
  STEP_TYPE.ThirdStep |
  STEP_TYPE.FourthStep;


export const WizardSteps: StepsTypes[] = [
  STEP_TYPE.FirsStep, STEP_TYPE.SecondStep, STEP_TYPE.ThirdStep, STEP_TYPE.FourthStep
]
