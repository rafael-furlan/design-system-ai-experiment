import type { AliasSpacing } from '../types';
import type { TokenReference } from '../types';

export const spacing: AliasSpacing = {
  xs: {
    value: '{primitive.spacing.1}' as TokenReference,
    type: 'dimension',
    description: 'Extra small spacing - references primitive spacing.1 (4px)',
  },
  sm: {
    value: '{primitive.spacing.2}' as TokenReference,
    type: 'dimension',
    description: 'Small spacing - references primitive spacing.2 (8px)',
  },
  md: {
    value: '{primitive.spacing.4}' as TokenReference,
    type: 'dimension',
    description: 'Medium spacing - references primitive spacing.4 (16px)',
  },
  lg: {
    value: '{primitive.spacing.6}' as TokenReference,
    type: 'dimension',
    description: 'Large spacing - references primitive spacing.6 (24px)',
  },
  xl: {
    value: '{primitive.spacing.8}' as TokenReference,
    type: 'dimension',
    description: 'Extra large spacing - references primitive spacing.8 (32px)',
  },
  '2xl': {
    value: '{primitive.spacing.12}' as TokenReference,
    type: 'dimension',
    description: '2x large spacing - references primitive spacing.12 (48px)',
  },
  '3xl': {
    value: '{primitive.spacing.16}' as TokenReference,
    type: 'dimension',
    description: '3x large spacing - references primitive spacing.16 (64px)',
  },
} as const;
