import type { Meta, StoryObj } from '@storybook/react';
import EVStandardButton, { EVStandardButtonProps } from './EVStandardButton';

const meta: Meta<EVStandardButtonProps> = {
  title: 'Core/Buttons/EVStandardButton',
  component: EVStandardButton,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['solid', 'text'],
    },
    onClick: { action: 'clicked' },
    children: { control: 'text' },
  },
  args: {
    children: 'Button',
    variant: 'solid',
  },
};
export default meta;

type Story = StoryObj<EVStandardButtonProps>;

export const Solid: Story = {
  args: {
    children: 'Solid Button',
    variant: 'solid',
  },
};

export const Text: Story = {
  args: {
    children: 'Text Button',
    variant: 'text',
  },
};
