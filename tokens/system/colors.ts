import type { SystemColors } from '../types';
import type { TokenReference } from '../types';

export const colors: SystemColors = {
  typography: {
    primary: {
      'high-contrast': {
        value: '{alias.colors.text.primary}' as TokenReference,
        type: 'color',
        description: 'High contrast primary text color - references alias text.primary (matches Figma: Typography/Primary/high-contrast)',
      },
      default: {
        value: '{alias.colors.text.primary}' as TokenReference,
        type: 'color',
        description: 'Default primary text color - references alias text.primary',
      },
      secondary: {
        value: '{alias.colors.text.secondary}' as TokenReference,
        type: 'color',
        description: 'Secondary text color - references alias text.secondary',
      },
      tertiary: {
        value: '{alias.colors.text.tertiary}' as TokenReference,
        type: 'color',
        description: 'Tertiary text color - references alias text.tertiary',
      },
      inverse: {
        value: '{alias.colors.text.inverse}' as TokenReference,
        type: 'color',
        description: 'Inverse text color - references alias text.inverse',
      },
      disabled: {
        value: '{alias.colors.text.disabled}' as TokenReference,
        type: 'color',
        description: 'Disabled text color - references alias text.disabled',
      },
    },
  },
  surface: {
    'surface-12': {
      value: '{primitive.colors.surface.12}' as TokenReference,
      type: 'color',
      description: 'Surface 12 - references primitive surface.12 (matches Figma: Surface/Surface 12)',
    },
    'surface-7': {
      value: '{primitive.colors.surface.7}' as TokenReference,
      type: 'color',
      description: 'Surface 7 - references primitive surface.7 (matches Figma: Surface/Surface 7)',
    },
    base: {
      value: '{alias.colors.surface.base}' as TokenReference,
      type: 'color',
      description: 'Base surface color - references alias surface.base',
    },
    elevated: {
      value: '{alias.colors.surface.elevated}' as TokenReference,
      type: 'color',
      description: 'Elevated surface color - references alias surface.elevated',
    },
  },
  complementary: {
    cream: {
      'cream-100': {
        value: '{primitive.colors.cream.100}' as TokenReference,
        type: 'color',
        description: 'Cream 100 - references primitive cream.100 (matches Figma: Complementary pallet/Cream/Cream 100)',
      },
    },
  },
  background: {
    default: {
      value: '{alias.colors.background.primary}' as TokenReference,
      type: 'color',
      description: 'Default background - references alias background.primary',
    },
    secondary: {
      value: '{alias.colors.background.secondary}' as TokenReference,
      type: 'color',
      description: 'Secondary background - references alias background.secondary',
    },
    tertiary: {
      value: '{alias.colors.background.tertiary}' as TokenReference,
      type: 'color',
      description: 'Tertiary background - references alias background.tertiary',
    },
    inverse: {
      value: '{alias.colors.background.inverse}' as TokenReference,
      type: 'color',
      description: 'Inverse background - references alias background.inverse',
    },
  },
  border: {
    default: {
      value: '{alias.colors.border.default}' as TokenReference,
      type: 'color',
      description: 'Default border - references alias border.default',
    },
    subtle: {
      value: '{alias.colors.border.subtle}' as TokenReference,
      type: 'color',
      description: 'Subtle border - references alias border.subtle',
    },
    strong: {
      value: '{alias.colors.border.strong}' as TokenReference,
      type: 'color',
      description: 'Strong border - references alias border.strong',
    },
  },
} as const;
