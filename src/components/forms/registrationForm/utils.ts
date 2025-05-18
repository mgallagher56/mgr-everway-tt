export enum PlanOptionsEnum {
  BASIC = 'basic',
  PRO = 'pro',
  ENTERPRISE = 'enterprise',
}

const { BASIC, PRO, ENTERPRISE } = PlanOptionsEnum;

export const planOptions = [
  { label: 'Basic', value: BASIC },
  { label: 'Pro', value: PRO },
  { label: 'Enterprise', value: ENTERPRISE },
];
