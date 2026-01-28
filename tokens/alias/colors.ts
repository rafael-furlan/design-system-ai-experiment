import type { AliasColors } from '../types';
import type { TokenReference } from '../types';

export const colors: AliasColors = {
  background: {
    primary: {
      value: '{primitive.colors.neutral.0}' as TokenReference,
      type: 'color',
      description: 'Primary background color - references primitive neutral.0',
    },
    secondary: {
      value: '{primitive.colors.neutral.50}' as TokenReference,
      type: 'color',
      description: 'Secondary background color - references primitive neutral.50',
    },
    tertiary: {
      value: '{primitive.colors.neutral.100}' as TokenReference,
      type: 'color',
      description: 'Tertiary background color - references primitive neutral.100',
    },
    inverse: {
      value: '{primitive.colors.neutral.900}' as TokenReference,
      type: 'color',
      description: 'Inverse background color - references primitive neutral.900',
    },
  },
  text: {
    primary: {
      value: '{primitive.colors.text.high-contrast}' as TokenReference,
      type: 'color',
      description: 'Primary text color - references primitive text.high-contrast',
    },
    secondary: {
      value: '{primitive.colors.neutral.600}' as TokenReference,
      type: 'color',
      description: 'Secondary text color - references primitive neutral.600',
    },
    tertiary: {
      value: '{primitive.colors.neutral.500}' as TokenReference,
      type: 'color',
      description: 'Tertiary text color - references primitive neutral.500',
    },
    inverse: {
      value: '{primitive.colors.neutral.0}' as TokenReference,
      type: 'color',
      description: 'Inverse text color (for dark backgrounds) - references primitive neutral.0',
    },
    disabled: {
      value: '{primitive.colors.neutral.400}' as TokenReference,
      type: 'color',
      description: 'Disabled text color - references primitive neutral.400',
    },
  },
  border: {
    default: {
      value: '{primitive.colors.neutral.200}' as TokenReference,
      type: 'color',
      description: 'Default border color - references primitive neutral.200',
    },
    subtle: {
      value: '{primitive.colors.neutral.100}' as TokenReference,
      type: 'color',
      description: 'Subtle border color - references primitive neutral.100',
    },
    strong: {
      value: '{primitive.colors.neutral.400}' as TokenReference,
      type: 'color',
      description: 'Strong border color - references primitive neutral.400',
    },
  },
  surface: {
    base: {
      value: '{primitive.colors.surface.12}' as TokenReference,
      type: 'color',
      description: 'Base surface color - references primitive surface.12',
    },
    elevated: {
      value: '{primitive.colors.surface.7}' as TokenReference,
      type: 'color',
      description: 'Elevated surface color - references primitive surface.7',
    },
  },
  accent: {
    cream: {
      '100': {
        value: '{primitive.colors.cream.100}' as TokenReference,
        type: 'color',
        description: 'Cream accent color - references primitive cream.100',
      },
      '200': {
        value: '{primitive.colors.cream.200}' as TokenReference,
        type: 'color',
        description: 'Cream accent color variant - references primitive cream.200',
      },
      '300': {
        value: '{primitive.colors.cream.300}' as TokenReference,
        type: 'color',
        description: 'Cream accent color variant - references primitive cream.300',
      },
    },
  },
} as const;
