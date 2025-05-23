import { useCallback, useState, type ChangeEvent, type FC, type Ref } from 'react';
import TextField from '../../core/inputs/TextField/EVTextField';
import RadioGroup from '../../core/inputs/RadioGroup/EVRadioGroup';
import { planOptions, PlanOptionsEnum } from './utils';
import EVTypography from '../../core/typography/EVTypography';
import { css } from '../../../styled-system/css';
import { Stack } from '../../../styled-system/jsx';
import EVStandardButton from '../../core/buttons/standardButton/EVStandardButton';

interface RegistrationFormProps {
  formId?: string;
  isSubmitHidden?: boolean;
  submitRef: Ref<HTMLButtonElement>;
}

const RegistrationForm: FC<RegistrationFormProps> = ({ formId = 'register', submitRef, isSubmitHidden }) => {
  const [{ email, password, plan }, setFormData] = useState<{
    email: string;
    password: string;
    plan: PlanOptionsEnum;
  }>({
    email: '',
    password: '',
    plan: PlanOptionsEnum.BASIC,
  });
  const onChangeTextField = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    [setFormData],
  );

  const onChangeRadioInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setFormData((prev) => ({ ...prev, plan: value as PlanOptionsEnum }));
    },
    [setFormData],
  );

  const onSubmitForm = useCallback(() => {
    const hiddenPassword = Array.from(password)
      .map(() => '*')
      .join('');
    alert(`User registration complete: \n Email: ${email}\n Password: ${hiddenPassword}\n Plan: ${plan}`);
  }, [email, password, plan]);

  return (
    <form id={formId} action={onSubmitForm}>
      <EVTypography className={css({ mb: 'xl' })} variant="titleXl" as="h3">
        Register
      </EVTypography>
      <Stack direction="column" gap="xl">
        <TextField
          required
          showIcon
          aria-description="Please enter a valid email address"
          aria-required="true"
          autoComplete="email"
          id="email"
          label="Email"
          name="email"
          placeholder="email@example.com"
          type="email"
          value={email}
          onChange={onChangeTextField}
        />
        <TextField
          required
          showIcon
          aria-description="Password must contain at least 6 or more characters"
          aria-required="true"
          autoComplete="current-password"
          id="password"
          label="Password"
          minLength={6}
          name="password"
          placeholder="Password"
          title="Password must contain at least 6 or more characters"
          type="password"
          value={password}
          onChange={onChangeTextField}
        />
        <RadioGroup isRequired label="Plan" options={planOptions} onChange={onChangeRadioInput} selectedValue={plan} />
        <EVStandardButton hidden={isSubmitHidden} ref={submitRef} type="submit" onClick={onSubmitForm}>
          Register
        </EVStandardButton>
      </Stack>
    </form>
  );
};

export default RegistrationForm;
