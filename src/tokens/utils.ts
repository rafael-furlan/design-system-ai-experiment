/**
 * Token Utilities
 * Helper functions for accessing and working with design tokens.
 */

import { designTokens } from './index';
import type { TokenPath, NestedTokenValue } from './types';

/**
 * Get a token value by path
 * Example: getToken('system.colors.typography.primary.high-contrast')
 */
export function getToken(path: TokenPath): NestedTokenValue | undefined {
  const parts = path.split('.');
  let current: any = designTokens;

  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      return undefined;
    }
  }

  return current;
}

/**
 * Get a CSS custom property name for a token path
 * Example: getCSSVariable('system.colors.typography.primary.high-contrast')
 * Returns: '--system-colors-typography-primary-high-contrast'
 */
export function getCSSVariable(path: TokenPath): string {
  return `--${path.replace(/\./g, '-')}`;
}

/**
 * Convert tokens to CSS custom properties
 * Useful for CSS-in-JS or generating CSS files
 */
export function tokensToCSSVariables(tokens: any, prefix = '', result: Record<string, string> = {}): Record<string, string> {
  for (const [key, value] of Object.entries(tokens)) {
    const newKey = prefix ? `${prefix}-${key}` : key;

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // Check if it's a style object (has CSS properties)
      if ('fontSize' in value || 'color' in value || 'padding' in value) {
        // It's a style object, convert individual properties
        for (const [prop, propValue] of Object.entries(value)) {
          if (typeof propValue === 'string' || typeof propValue === 'number') {
            result[`--${newKey}-${prop}`] = String(propValue);
          }
        }
      } else {
        // It's a nested token object, recurse
        tokensToCSSVariables(value, newKey, result);
      }
    } else if (typeof value === 'string' || typeof value === 'number') {
      result[`--${newKey}`] = String(value);
    }
  }

  return result;
}

/**
 * Flatten tokens for easier access
 */
export function flattenTokens(tokens: any, prefix = '', result: Record<string, NestedTokenValue> = {}): Record<string, NestedTokenValue> {
  for (const [key, value] of Object.entries(tokens)) {
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      flattenTokens(value, newKey, result);
    } else {
      result[newKey] = value as NestedTokenValue;
    }
  }

  return result;
}
