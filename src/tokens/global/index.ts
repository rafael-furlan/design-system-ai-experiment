/**
 * Global Tokens
 * Base design values that serve as the foundation.
 * These tokens are platform-agnostic and represent raw design decisions.
 * 
 * System tokens reference these Global tokens to create semantic meaning.
 */

export * from './colors';
export * from './typography';
export * from './spacing';
export * from './borderRadius';
export * from './shadows';

import { globalColors } from './colors';
import { globalTypography } from './typography';
import { globalSpacing } from './spacing';
import { globalBorderRadius } from './borderRadius';
import { globalShadows } from './shadows';

export const globalTokens = {
  colors: globalColors,
  typography: globalTypography,
  spacing: globalSpacing,
  borderRadius: globalBorderRadius,
  shadows: globalShadows,
} as const;

export type GlobalTokens = typeof globalTokens;
