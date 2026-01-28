# Components

React components built to match the Figma design system.

## Button Component

A flexible button component with multiple variants, sizes, and states.

### Variants

- **Primary**: Solid dark background buttons
- **Secondary**: Outlined or light fill buttons  
- **Tertiary**: Ghost/text-only buttons

### Sizes

- **Small**: Compact size for tight spaces
- **Medium**: Default size
- **Large**: Prominent size for important actions

### States

- **Default**: Normal state
- **Hover**: Hover state
- **Active**: Pressed state
- **Disabled**: Disabled state
- **Loading**: Shows spinner
- **Focus**: Focused state with blue outline

### Features

- Text buttons with labels
- Icon-only buttons (circular, 3 sizes)
- Loading spinner animation
- Focus states with 2px blue outline
- Fully accessible (keyboard navigation, ARIA labels)

## Running Storybook

To view and test components:

```bash
npm run storybook
```

This will start Storybook on `http://localhost:6006`

## Usage

```tsx
import { Button } from './components';

// Primary button
<Button variant="primary">Click me</Button>

// Secondary button
<Button variant="secondary">Click me</Button>

// Tertiary button
<Button variant="tertiary">Click me</Button>

// With loading state
<Button loading>Loading...</Button>

// Icon-only button
<Button 
  iconOnly 
  size="large"
  icon={<StarIcon />}
/>

// Different sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
```

## Component Structure

```
src/components/
├── Button/
│   ├── Button.tsx          # Component implementation
│   ├── Button.css          # Styles using design tokens
│   ├── Button.stories.tsx  # Storybook stories
│   └── index.ts            # Exports
└── index.ts                # Component barrel export
```
