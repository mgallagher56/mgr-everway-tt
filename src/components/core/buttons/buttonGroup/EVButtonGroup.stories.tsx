import type { Meta, StoryObj } from '@storybook/react';
import EVButtonGroup from './EVButtonGroup';
import EVStandardButton from '../standardButton/EVStandardButton';

const meta: Meta<typeof EVButtonGroup> = {
  title: 'Core/Buttons/EVButtonGroup',
  component: EVButtonGroup,
  argTypes: {
    title: { control: 'text' },
    direction: { control: 'radio', options: ['row', 'column'] },
    gap: { control: 'text' },
  },
  args: {
    title: 'Button Group - Row',
    direction: 'row',
    gap: 'xl',
  },
};
export default meta;

type Story = StoryObj<typeof EVButtonGroup>;

export const Default: Story = {
  args: {
    buttons: [
      <EVStandardButton key="1" variant="solid" onClick={() => {}}>
        Solid
      </EVStandardButton>,
      <EVStandardButton key="2" variant="text" onClick={() => {}}>
        Text
      </EVStandardButton>,
    ],
  },
};

export const Column: Story = {
  args: {
    title: 'Buton Group - Column',
    direction: 'column',
    buttons: [
      <EVStandardButton key="1" variant="solid" onClick={() => {}}>
        Solid
      </EVStandardButton>,
      <EVStandardButton key="2" variant="text" onClick={() => {}}>
        Text
      </EVStandardButton>,
    ],
  },
};
