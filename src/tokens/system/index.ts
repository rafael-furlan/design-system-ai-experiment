/**
 * System Tokens
 * Semantic tokens that reference Global tokens.
 * These tokens apply contextual meaning to Global values and create
 * reusable design patterns.
 * 
 * This mirrors Figma's System collection where System variables
 * reference Global variables through aliasing, creating a cascading
 * update system.
 */

export * from './colors';
export * from './typography';
export * from './spacing';

import { systemColors } from './colors';
import { systemTypography } from './typography';
import { systemSpacing } from './spacing';

export const systemTokens = {
  colors: systemColors,
  typography: systemTypography,
  spacing: systemSpacing,
} as const;

export type SystemTokens = typeof systemTokens;
