import { useCallback, useState, type ChangeEvent, type FC, type Ref } from 'react';
import TextField from '../../core/formFields/TextField/EVTextField';
import RadioGroup from '../../core/formFields/RadioGroup/EVRadioGroup';
import { planOptions, PlanOptionsEnum } from './utils';
import EVTypography from '../../core/typography/EVTypography';
import { css } from '../../../styled-system/css';
import { Stack } from '../../../styled-system/jsx';

interface RegistrationFormProps {
  formId?: string;
  submitRef: Ref<HTMLButtonElement>;
}

const RegistrationForm: FC<RegistrationFormProps> = ({ formId = 'register', submitRef }) => {
  const [{ email, password, plan }, setFormData] = useState<{
    email: string;
    password: string;
    plan: PlanOptionsEnum | '';
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
    <form id={formId} onSubmit={onSubmitForm}>
      <EVTypography className={css({ mb: 'xl' })} variant="titleXl" as="h3">
        Register
      </EVTypography>
      <Stack direction="column" gap="xl">
        <TextField
          aria-description="Please enter a valid email address"
          type="email"
          placeholder="email@example.com"
          label="Email"
          id="email"
          name="email"
          aria-required="true"
          required
          autoComplete="email"
          onChange={onChangeTextField}
          value={email}
        />
        <TextField
          type="password"
          placeholder="Password"
          label="Password"
          id="password"
          name="password"
          aria-required="true"
          aria-description='"Password must contain at least 6 or more characters"'
          minLength={6}
          title="Password must contain at least 6 or more characters"
          required
          autoComplete="current-password"
          onChange={onChangeTextField}
          value={password}
        />
        <RadioGroup label="Plan" options={planOptions} onChange={onChangeRadioInput} selectedValue={plan} />
      </Stack>
      <button hidden ref={submitRef} type="submit" />
    </form>
  );
};

export default RegistrationForm;
