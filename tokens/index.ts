/**
 * Design Tokens Index
 * 
 * This file exports all design tokens organized by layer:
 * - Primitive: Foundation tokens with raw values
 * - Alias: Semantic tokens that reference primitives
 * - System: Application tokens that reference aliases/primitives
 */

import type { DesignTokens } from './types';

// Primitive tokens
import { colors as primitiveColors } from './primitive/colors';
import { spacing as primitiveSpacing } from './primitive/spacing';
import { typography as primitiveTypography } from './primitive/typography';

// Alias tokens
import { colors as aliasColors } from './alias/colors';
import { spacing as aliasSpacing } from './alias/spacing';
import { typography as aliasTypography } from './alias/typography';

// System tokens
import { colors as systemColors } from './system/colors';
import { spacing as systemSpacing } from './system/spacing';
import { typography as systemTypography } from './system/typography';

export const primitive = {
  colors: primitiveColors,
  spacing: primitiveSpacing,
  typography: primitiveTypography,
} as const;

export const alias = {
  colors: aliasColors,
  spacing: aliasSpacing,
  typography: aliasTypography,
} as const;

export const system = {
  colors: systemColors,
  spacing: systemSpacing,
  typography: systemTypography,
} as const;

// Flattened token access for convenience
export const tokens: DesignTokens = {
  primitive,
  alias,
  system,
} as const;

export default tokens;
