import type { Meta, StoryObj } from '@storybook/react';
import { RecipientSelector } from './steps';

const meta: Meta<typeof RecipientSelector> = {
  title: 'Components/RecipientSelector',
  component: RecipientSelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'active', 'success', 'loading'],
    },
    label: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
    badgeText: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RecipientSelector>;

// Default State
export const Default: Story = {
  args: {
    state: 'default',
    label: 'To',
    helperText: 'Select who will receive',
  },
};

// Active State
export const Active: Story = {
  args: {
    state: 'active',
    label: 'To',
    helperText: 'Select who will receive',
  },
};

// Success State
export const Success: Story = {
  args: {
    state: 'success',
    label: 'To',
    helperText: 'Select who will receive',
  },
};

// Loading State
export const Loading: Story = {
  args: {
    state: 'loading',
    label: 'To',
    helperText: 'Select who will receive',
    badgeText: 'Importing list',
  },
};

// All States
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
      <RecipientSelector
        state="default"
        label="To"
        helperText="Select who will receive"
      />
      <RecipientSelector
        state="active"
        label="To"
        helperText="Select who will receive"
      />
      <RecipientSelector
        state="success"
        label="To"
        helperText="Select who will receive"
      />
      <RecipientSelector
        state="loading"
        label="To"
        helperText="Select who will receive"
        badgeText="Importing list"
      />
    </div>
  ),
};

// Custom Labels
export const CustomLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
      <RecipientSelector
        state="default"
        label="CC"
        helperText="Select who will be copied"
      />
      <RecipientSelector
        state="default"
        label="BCC"
        helperText="Select who will be blind copied"
      />
    </div>
  ),
};
