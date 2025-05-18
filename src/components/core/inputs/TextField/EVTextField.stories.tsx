import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import TextField from './EVTextField';

const meta: Meta<typeof TextField> = {
  title: 'Core/Inputs/EVTextField',
  component: TextField,
  argTypes: {
    label: { control: 'text' },
    type: { control: 'radio', options: ['email', 'password'] },
    showIcon: { control: 'boolean' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Email: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <TextField
        {...args}
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your email"
        id="email"
      />
    );
  },
  args: {
    label: 'Email Address',
    showIcon: false,
  },
};

export const Password: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <TextField
        {...args}
        type="password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your password"
        id="password"
      />
    );
  },
  args: {
    label: 'Password',
    showIcon: false,
  },
};

export const WithIcon: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <TextField
        {...args}
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Email with icon"
        showIcon
        id="icon-email"
      />
    );
  },
  args: {
    label: 'Email (with icon)',
  },
};

export const NoLabel: Story = {
  render: (args) => {
    const [value, setValue] = useState('');
    return (
      <TextField
        {...args}
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="No label"
        id="no-label"
      />
    );
  },
  args: {
    label: undefined,
    showIcon: false,
  },
};
