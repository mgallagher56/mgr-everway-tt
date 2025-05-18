import type { Meta, StoryObj } from '@storybook/react';
import EVActionCard from './EVActionCard';

const meta: Meta<typeof EVActionCard> = {
  title: 'Core/Cards/EVActionCard',
  component: EVActionCard,
  argTypes: {
    headerImg: { control: 'object' },
    primaryButtonProps: { control: 'object' },
    secondaryButtonProps: { control: 'object' },
    children: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof EVActionCard>;

export const Default: Story = {
  args: {
    headerImg: {
      src: 'https://placehold.co/600x200',
      alt: 'Placeholder image',
    },
    primaryButtonProps: {
      children: 'Confirm',
      onClick: () => alert('Primary action'),
    },
    secondaryButtonProps: {
      children: 'Cancel',
      onClick: () => alert('Secondary action'),
      variant: 'text',
    },
    children: (
      <div>
        <h3>Action Card Title</h3>
        <p>
          This is some mock content inside the action card. You can put any React nodes here, such as forms, text, or
          other components.
        </p>
      </div>
    ),
  },
};

export const WithoutImage: Story = {
  args: {
    primaryButtonProps: {
      children: 'Submit',
      onClick: () => alert('Submitted!'),
    },
    secondaryButtonProps: {
      children: 'Back',
      onClick: () => alert('Going back'),
      variant: 'text',
    },
    children: (
      <div>
        <h3>No Image Example</h3>
        <p>This action card does not have a header image. It still supports all other features.</p>
      </div>
    ),
  },
};

export const OnlyPrimaryButton: Story = {
  args: {
    headerImg: {
      src: 'https://placehold.co/600x200',
      alt: 'Placeholder image',
    },
    primaryButtonProps: {
      children: 'Continue',
      onClick: () => alert('Continuing...'),
    },
    children: (
      <div>
        <h3>Primary Only</h3>
        <p>This card only has a primary button.</p>
      </div>
    ),
  },
};
