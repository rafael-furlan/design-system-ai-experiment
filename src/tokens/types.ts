/**
 * Design Token Types
 * Type definitions for type-safe token access and theme support.
 */

import { GlobalTokens } from './global';
import { SystemTokens } from './system';

/**
 * Complete design token structure
 */
export interface DesignTokens {
  global: GlobalTokens;
  system: SystemTokens;
}

/**
 * Token path type for nested token access
 * Example: 'global.colors.primary.900' or 'system.colors.typography.primary.high-contrast'
 */
export type TokenPath = string;

/**
 * Theme mode support (for future dark mode implementation)
 */
export type ThemeMode = 'light' | 'dark';

/**
 * Token category types
 */
export type TokenCategory = 'colors' | 'typography' | 'spacing' | 'borderRadius' | 'shadows';

/**
 * Helper type to extract nested token values
 */
export type NestedTokenValue = string | number | readonly string[] | readonly number[];

/**
 * Token reference type for documenting Global → System connections
 */
export interface TokenReference {
  systemPath: string;
  globalPath: string;
  description?: string;
}
