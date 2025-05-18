import type { Meta, StoryObj } from '@storybook/react';
import { useRef } from 'react';
import RegistrationForm from './RegistrationForm';

const meta: Meta<typeof RegistrationForm> = {
  title: 'Forms/RegistrationForm',
  component: RegistrationForm,
  argTypes: {
    formId: { control: 'text' },
    isSubmitHidden: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof RegistrationForm>;

export const Default: Story = {
  render: (args) => {
    const submitRef = useRef<HTMLButtonElement>(null);
    return <RegistrationForm {...args} submitRef={submitRef} />;
  },
  args: {
    formId: 'register-form',
    isSubmitHidden: false,
  },
};

export const HiddenSubmitButton: Story = {
  render: (args) => {
    const submitRef = useRef<HTMLButtonElement>(null);
    return <RegistrationForm {...args} submitRef={submitRef} />;
  },
  args: {
    formId: 'register-form-hidden',
    isSubmitHidden: true,
  },
};

export const CustomFormId: Story = {
  render: (args) => {
    const submitRef = useRef<HTMLButtonElement>(null);
    return <RegistrationForm {...args} submitRef={submitRef} />;
  },
  args: {
    formId: 'custom-registration-form',
    isSubmitHidden: false,
  },
};
