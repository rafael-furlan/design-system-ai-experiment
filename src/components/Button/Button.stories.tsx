import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'active', 'disabled', 'loading', 'focus'],
    },
    loading: {
      control: 'boolean',
    },
    iconOnly: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default Primary Button
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

// Secondary Button
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

// Tertiary Button
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Button',
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Button variant="primary">Default</Button>
        <Button variant="primary" state="hover">Hover</Button>
        <Button variant="primary" state="active">Active</Button>
        <Button variant="primary" state="disabled">Disabled</Button>
        <Button variant="primary" loading>Loading</Button>
        <Button variant="primary" state="focus">Focus</Button>
      </div>
    </div>
  ),
};

// Icon-only Buttons
export const IconOnly: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button
        iconOnly
        size="large"
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        }
      />
      <Button
        iconOnly
        size="medium"
        icon={
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        }
      />
      <Button
        iconOnly
        size="small"
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        }
      />
    </div>
  ),
};

// All Variants Grid
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h3>Primary</h3>
        <Button variant="primary">Button</Button>
        <Button variant="primary" state="hover">Button</Button>
        <Button variant="primary" state="disabled">Button</Button>
        <Button variant="primary" loading>Button</Button>
        <Button variant="primary" state="focus">Button</Button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h3>Secondary</h3>
        <Button variant="secondary">Button</Button>
        <Button variant="secondary" state="hover">Button</Button>
        <Button variant="secondary" state="disabled">Button</Button>
        <Button variant="secondary" loading>Button</Button>
        <Button variant="secondary" state="focus">Button</Button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h3>Tertiary</h3>
        <Button variant="tertiary">Button</Button>
        <Button variant="tertiary" state="hover">Button</Button>
        <Button variant="tertiary" state="disabled">Button</Button>
        <Button variant="tertiary" loading>Button</Button>
        <Button variant="tertiary" state="focus">Button</Button>
      </div>
    </div>
  ),
};
