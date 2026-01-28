import type { Meta, StoryObj } from '@storybook/react';
import { MultiRecipientSelector } from './Wizard';

const meta: Meta<typeof MultiRecipientSelector> = {
  title: 'Components/MultiRecipientSelector',
  component: MultiRecipientSelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    showSeparators: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MultiRecipientSelector>;

// Default - Four Recipients
export const Default: Story = {
  args: {
    recipients: [
      {
        id: 'to',
        state: 'default',
        label: 'To',
        helperText: 'Select who will receive',
      },
      {
        id: 'cc',
        state: 'default',
        label: 'CC',
        helperText: 'Select who will receive',
      },
      {
        id: 'bcc',
        state: 'default',
        label: 'BCC',
        helperText: 'Select who will receive',
      },
      {
        id: 'reply-to',
        state: 'default',
        label: 'Reply To',
        helperText: 'Select who will receive',
      },
    ],
    showSeparators: true,
  },
};

// With Different States
export const WithDifferentStates: Story = {
  args: {
    recipients: [
      {
        id: 'to',
        state: 'active',
        label: 'To',
        helperText: 'Select who will receive',
      },
      {
        id: 'cc',
        state: 'success',
        label: 'CC',
        helperText: 'Select who will receive',
      },
      {
        id: 'bcc',
        state: 'loading',
        label: 'BCC',
        helperText: 'Select who will receive',
        badgeText: 'Importing list',
      },
      {
        id: 'reply-to',
        state: 'default',
        label: 'Reply To',
        helperText: 'Select who will receive',
      },
    ],
    showSeparators: true,
  },
};

// Without Separators
export const WithoutSeparators: Story = {
  args: {
    recipients: [
      {
        id: 'to',
        state: 'default',
        label: 'To',
        helperText: 'Select who will receive',
      },
      {
        id: 'cc',
        state: 'default',
        label: 'CC',
        helperText: 'Select who will receive',
      },
      {
        id: 'bcc',
        state: 'default',
        label: 'BCC',
        helperText: 'Select who will receive',
      },
    ],
    showSeparators: false,
  },
};

// Two Recipients
export const TwoRecipients: Story = {
  args: {
    recipients: [
      {
        id: 'to',
        state: 'default',
        label: 'To',
        helperText: 'Select who will receive',
      },
      {
        id: 'cc',
        state: 'default',
        label: 'CC',
        helperText: 'Select who will receive',
      },
    ],
    showSeparators: true,
  },
};

// All Success States
export const AllSuccess: Story = {
  args: {
    recipients: [
      {
        id: 'to',
        state: 'success',
        label: 'To',
        helperText: 'Select who will receive',
      },
      {
        id: 'cc',
        state: 'success',
        label: 'CC',
        helperText: 'Select who will receive',
      },
      {
        id: 'bcc',
        state: 'success',
        label: 'BCC',
        helperText: 'Select who will receive',
      },
      {
        id: 'reply-to',
        state: 'success',
        label: 'Reply To',
        helperText: 'Select who will receive',
      },
    ],
    showSeparators: true,
  },
};
