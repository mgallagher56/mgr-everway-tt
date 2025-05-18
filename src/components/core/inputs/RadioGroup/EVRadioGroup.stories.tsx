import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import RadioGroup from './EVRadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Core/Inputs/EVRadioGroup',
  component: RadioGroup,
  argTypes: {
    label: { control: 'text' },
    isRequired: { control: 'boolean' },
    options: { control: 'object' },
    selectedValue: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

const options = [
  { label: 'Option One', value: 'one' },
  { label: 'Option Two', value: 'two' },
  { label: 'Option Three', value: 'three' },
];

export const Default: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState(args.selectedValue || options[0].value);
    return <RadioGroup {...args} selectedValue={selectedValue} onChange={(e) => setSelectedValue(e.target.value)} />;
  },
  args: {
    label: 'Choose an option',
    options,
    selectedValue: options[0].value,
    isRequired: false,
  },
};
