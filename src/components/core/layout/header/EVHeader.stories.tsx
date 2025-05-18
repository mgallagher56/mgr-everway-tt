import type { Meta, StoryObj } from '@storybook/react';
import EVHeader from './EVHeader';

const meta: Meta<typeof EVHeader> = {
  title: 'Core/Layout/EVHeader',
  component: EVHeader,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    accentStyle: { control: 'radio', options: ['none', 'gradient'] },
  },
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ margin: 0, padding: 0 }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof EVHeader>;

export const Default: Story = {
  args: {
    title: 'Welcome to Productivity Pro',
    subtitle: 'Unlocking the full productivity of every person',
    accentStyle: 'gradient',
  },
};

export const NoSubtitle: Story = {
  args: {
    title: 'Just a Title',
    accentStyle: 'gradient',
  },
};

export const NoAccent: Story = {
  args: {
    title: 'Plain Header',
    subtitle: 'No accent style applied',
    accentStyle: 'none',
  },
};
