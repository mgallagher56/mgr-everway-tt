import type { Meta, StoryObj } from '@storybook/react';
import EVContainer from './EVContainer';
import EVStandardButton from '../../buttons/standardButton/EVStandardButton';

const meta: Meta<typeof EVContainer> = {
  title: 'Core/Layout/EVContainer',
  component: EVContainer,
  argTypes: {
    background: { control: 'text' },
    minW: { control: 'text' },
    maxWidth: { control: 'text' },
    padding: { control: 'text' },
    display: { control: 'text' },
    flexDirection: { control: 'text' },
    gap: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof EVContainer>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ border: '2px dashed #888', padding: 24, textAlign: 'center' }}>
        <h2>Default Container</h2>
        <p>This is a simple container with default props and content with a border to show the container limits.</p>
        <EVStandardButton onClick={() => alert('Clicked!')}>Contained Button</EVStandardButton>
      </div>
    ),
  },
};

export const Padded: Story = {
  args: {
    padding: '4xl',
    children: (
      <div
        style={{
          border: '2px solid #4a90e2',
          borderRadius: 12,
          padding: 32,
          background: '#f0f4fa',
          textAlign: 'center',
        }}
      >
        <h2>Padded Container</h2>
        <p>This container has extra padding applied on all sides.</p>
        <EVStandardButton variant="solid" onClick={() => alert('Padded!')}>
          Action
        </EVStandardButton>
      </div>
    ),
  },
};
