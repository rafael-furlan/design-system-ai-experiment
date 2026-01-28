/**
 * Token Resolver
 * 
 * Resolves token references (e.g., {primitive.colors.neutral.0}) to actual values.
 * This allows tokens to reference other tokens while maintaining the hierarchical structure.
 */

import { primitive, alias, system } from './index';
import type { TokenReference, ResolvedTokenValue } from './types';

type TokenStructure = typeof primitive | typeof alias | typeof system;
type AnyTokenValue = string | number | TokenReference | Record<string, unknown>;

/**
 * Resolves a token reference string to its actual value
 * @param reference - Token reference (e.g., "{primitive.colors.neutral.0}")
 * @returns Resolved token value
 */
function resolveReference(reference: string): ResolvedTokenValue {
  if (typeof reference !== 'string' || !reference.startsWith('{') || !reference.endsWith('}')) {
    return reference as ResolvedTokenValue; // Not a reference, return as-is
  }

  // Remove curly braces and split by dots
  const path = reference.slice(1, -1).split('.');
  
  // Navigate through the token structure
  let value: unknown = { primitive, alias, system };
  
  for (const key of path) {
    if (value && typeof value === 'object' && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      console.warn(`Token reference not found: ${reference}`);
      return reference as ResolvedTokenValue; // Return original if not found
    }
  }
  
  // If the resolved value is an object with a 'value' property, return that
  if (value && typeof value === 'object' && 'value' in value) {
    const tokenValue = (value as { value: unknown }).value;
    if (typeof tokenValue === 'string' && tokenValue.startsWith('{')) {
      return resolveReference(tokenValue); // Recursively resolve nested references
    }
    return tokenValue as ResolvedTokenValue;
  }
  
  return value as ResolvedTokenValue;
}

/**
 * Recursively resolves all token references in an object
 * @param obj - Object containing token definitions
 * @returns Object with all references resolved
 */
export function resolveTokens<T extends Record<string, unknown>>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => resolveTokens(item as T)) as unknown as T;
  }

  const resolved = {} as T;
  
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null) {
      // Check if this is a token object with a 'value' property
      if ('value' in value && typeof (value as { value: unknown }).value === 'string' && 
          (value as { value: string }).value.startsWith('{')) {
        (resolved as Record<string, unknown>)[key] = {
          ...value,
          value: resolveReference((value as { value: string }).value),
        };
      } else {
        // Recursively resolve nested objects
        (resolved as Record<string, unknown>)[key] = resolveTokens(value as T);
      }
    } else if (typeof value === 'string' && value.startsWith('{')) {
      // Direct string reference
      (resolved as Record<string, unknown>)[key] = resolveReference(value);
    } else {
      (resolved as Record<string, unknown>)[key] = value;
    }
  }
  
  return resolved;
}

/**
 * Gets a token value by path
 * @param path - Dot-separated path (e.g., "system.colors.typography.primary.high-contrast")
 * @returns Token value or undefined if not found
 */
export function getToken(path: string): ResolvedTokenValue | undefined {
  const parts = path.split('.');
  let value: unknown = { primitive, alias, system };
  
  for (const part of parts) {
    if (value && typeof value === 'object' && part in value) {
      value = (value as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }
  
  // If it's a token object, return the resolved value
  if (value && typeof value === 'object' && 'value' in value) {
    const tokenValue = (value as { value: unknown }).value;
    if (typeof tokenValue === 'string' && tokenValue.startsWith('{')) {
      return resolveReference(tokenValue);
    }
    return tokenValue as ResolvedTokenValue;
  }
  
  return value as ResolvedTokenValue;
}

export default {
  resolveTokens,
  getToken,
  resolveReference,
};
