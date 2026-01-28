/**
 * Token References
 * Documents the connection between System tokens and Global tokens.
 * This mirrors Figma's variable aliasing system where System variables
 * reference Global variables.
 * 
 * This mapping ensures we maintain the Global → System connection
 * pattern and can trace dependencies.
 */

import type { TokenReference } from './types';

/**
 * Mapping of System tokens to their Global token references
 * This documents the Figma variable aliasing structure
 */
export const tokenReferences: TokenReference[] = [
  // Typography Colors
  {
    systemPath: 'system.colors.typography.primary.high-contrast',
    globalPath: 'global.colors.primary.900',
    description: 'Typography/Primary/high-contrast → Color/Primary/900',
  },
  {
    systemPath: 'system.colors.typography.primary.default',
    globalPath: 'global.colors.primary.900',
    description: 'Typography/Primary/default → Color/Primary/900',
  },

  // Surface Colors
  {
    systemPath: 'system.colors.surface.surface-7',
    globalPath: 'global.colors.neutral.600',
    description: 'Surface/Surface 7 → Neutral/600',
  },
  {
    systemPath: 'system.colors.surface.surface-12',
    globalPath: 'global.colors.primary.900',
    description: 'Surface/Surface 12 → Primary/900',
  },

  // Complementary Palette
  {
    systemPath: 'system.colors.complementary.cream.cream-100',
    globalPath: 'global.colors.cream.100',
    description: 'Complementary pallet/Cream/Cream 100 → Cream/100',
  },

  // Typography System → Global
  {
    systemPath: 'system.typography.primary.high-contrast.color',
    globalPath: 'global.colors.primary.900',
    description: 'Typography/Primary/high-contrast color → Primary/900',
  },
];

/**
 * Get all references for a specific Global token
 */
export function getReferencesForGlobal(globalPath: string): TokenReference[] {
  return tokenReferences.filter(ref => ref.globalPath === globalPath);
}

/**
 * Get the Global reference for a System token
 */
export function getGlobalReference(systemPath: string): TokenReference | undefined {
  return tokenReferences.find(ref => ref.systemPath === systemPath);
}
