export enum STEP_TYPE {
  FirsStep = 'first-step',
  SecondStep = 'second-step',
  FourthStep = 'third-step',
}

export type StepsTypes =
  STEP_TYPE.FirsStep |
  STEP_TYPE.SecondStep |
  STEP_TYPE.FourthStep;
