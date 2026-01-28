/**
 * System Spacing Tokens
 * Semantic spacing tokens that reference Global spacing values.
 * These provide contextual meaning for spacing in different contexts.
 */

import { globalSpacing } from '../global/spacing';

export const systemSpacing = {
  // Component Internal Spacing
  component: {
    xs: globalSpacing[1],  // 4px
    sm: globalSpacing[2],  // 8px
    md: globalSpacing[4],  // 16px
    lg: globalSpacing[6], // 24px
    xl: globalSpacing[8], // 32px
  },

  // Layout Spacing
  layout: {
    xs: globalSpacing[2],  // 8px
    sm: globalSpacing[4],  // 16px
    md: globalSpacing[6],  // 24px
    lg: globalSpacing[8], // 32px
    xl: globalSpacing[12], // 48px
    '2xl': globalSpacing[16], // 64px
  },

  // Section Spacing
  section: {
    sm: globalSpacing[8],  // 32px
    md: globalSpacing[12], // 48px
    lg: globalSpacing[16], // 64px
    xl: globalSpacing[24], // 96px
  },
} as const;

export type SystemSpacing = typeof systemSpacing;
