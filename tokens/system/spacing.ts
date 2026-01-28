import type { SystemSpacing } from '../types';
import type { TokenReference } from '../types';

export const spacing: SystemSpacing = {
  component: {
    button: {
      'padding-x': {
        value: '{alias.spacing.md}' as TokenReference,
        type: 'dimension',
        description: 'Button horizontal padding - references alias spacing.md (16px)',
      },
      'padding-y': {
        value: '{alias.spacing.sm}' as TokenReference,
        type: 'dimension',
        description: 'Button vertical padding - references alias spacing.sm (8px)',
      },
      gap: {
        value: '{alias.spacing.xs}' as TokenReference,
        type: 'dimension',
        description: 'Button internal gap (icon-text) - references alias spacing.xs (4px)',
      },
    },
    card: {
      padding: {
        value: '{alias.spacing.lg}' as TokenReference,
        type: 'dimension',
        description: 'Card padding - references alias spacing.lg (24px)',
      },
      gap: {
        value: '{alias.spacing.md}' as TokenReference,
        type: 'dimension',
        description: 'Card internal gap - references alias spacing.md (16px)',
      },
    },
    input: {
      'padding-x': {
        value: '{alias.spacing.md}' as TokenReference,
        type: 'dimension',
        description: 'Input horizontal padding - references alias spacing.md (16px)',
      },
      'padding-y': {
        value: '{alias.spacing.sm}' as TokenReference,
        type: 'dimension',
        description: 'Input vertical padding - references alias spacing.sm (8px)',
      },
    },
    modal: {
      padding: {
        value: '{alias.spacing.xl}' as TokenReference,
        type: 'dimension',
        description: 'Modal padding - references alias spacing.xl (32px)',
      },
      gap: {
        value: '{alias.spacing.lg}' as TokenReference,
        type: 'dimension',
        description: 'Modal internal gap - references alias spacing.lg (24px)',
      },
    },
  },
  layout: {
    section: {
      gap: {
        value: '{alias.spacing.xl}' as TokenReference,
        type: 'dimension',
        description: 'Section gap - references alias spacing.xl (32px)',
      },
      'padding-x': {
        value: '{alias.spacing.lg}' as TokenReference,
        type: 'dimension',
        description: 'Section horizontal padding - references alias spacing.lg (24px)',
      },
      'padding-y': {
        value: '{alias.spacing.xl}' as TokenReference,
        type: 'dimension',
        description: 'Section vertical padding - references alias spacing.xl (32px)',
      },
    },
    container: {
      'max-width': {
        value: '1200px',
        type: 'dimension',
        description: 'Container max width',
      },
      'padding-x': {
        value: '{alias.spacing.lg}' as TokenReference,
        type: 'dimension',
        description: 'Container horizontal padding - references alias spacing.lg (24px)',
      },
    },
    grid: {
      gap: {
        value: '{alias.spacing.md}' as TokenReference,
        type: 'dimension',
        description: 'Grid gap - references alias spacing.md (16px)',
      },
    },
  },
} as const;
