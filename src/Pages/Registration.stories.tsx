import type { Meta, StoryObj } from '@storybook/react';
import Registration from './Registration';

const meta: Meta<typeof Registration> = {
  title: 'Pages/Registration',
  component: Registration,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof Registration>;

export const Default: Story = {};
