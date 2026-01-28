/**
 * Design Tokens
 * Main entry point for the design token system.
 * 
 * Structure mirrors Figma's variable collections:
 * - Global: Base design values (foundation)
 * - System: Semantic tokens that reference Global (contextual applications)
 * 
 * This creates a cascading update system where changes to Global
 * tokens automatically propagate to System tokens.
 */

export * from './global';
export * from './system';
export * from './types';
export * from './references';
export * from './utils';

import { globalTokens } from './global';
import { systemTokens } from './system';
import type { DesignTokens } from './types';

/**
 * Complete design token structure
 * 
 * Usage:
 * ```ts
 * import { designTokens } from './tokens';
 * 
 * // Access Global tokens
 * const primaryColor = designTokens.global.colors.primary[900];
 * 
 * // Access System tokens (which reference Global)
 * const highContrastText = designTokens.system.colors.typography.primary['high-contrast'];
 * ```
 */
export const designTokens: DesignTokens = {
  global: globalTokens,
  system: systemTokens,
};

// Re-export for convenience
export const tokens = designTokens;
export const global = globalTokens;
export const system = systemTokens;
