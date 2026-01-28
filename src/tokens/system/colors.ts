/**
 * System Color Tokens
 * Semantic color tokens that reference Global tokens.
 * These tokens apply contextual meaning to Global color values.
 * 
 * Mirrors Figma's System collection structure where System variables
 * reference Global variables through aliasing.
 */

import { globalColors } from '../global/colors';

export const systemColors = {
  // Typography Colors
  // Maps to: Typography/Primary/high-contrast
  typography: {
    primary: {
      default: globalColors.primary[900],      // #050505
      'high-contrast': globalColors.primary[900], // #050505 - Typography/Primary/high-contrast
      muted: globalColors.neutral[600],
      disabled: globalColors.neutral[400],
    },
    secondary: {
      default: globalColors.neutral[700],
      muted: globalColors.neutral[500],
    },
    inverse: {
      default: globalColors.neutral[50],
      muted: globalColors.neutral[200],
    },
  },

  // Surface Colors
  // Maps to: Surface/Surface 12, Surface/Surface 7, etc.
  surface: {
    base: globalColors.surface.base,
    'surface-1': globalColors.neutral[50],
    'surface-2': globalColors.neutral[100],
    'surface-3': globalColors.neutral[200],
    'surface-4': globalColors.neutral[300],
    'surface-5': globalColors.neutral[400],
    'surface-6': globalColors.neutral[500],
    'surface-7': globalColors.neutral[600], // #999999 - Surface/Surface 7
    'surface-8': globalColors.neutral[700],
    'surface-9': globalColors.neutral[800],
    'surface-10': globalColors.neutral[900],
    'surface-11': globalColors.primary[800],
    'surface-12': globalColors.primary[900], // #191919 - Surface/Surface 12 (may need adjustment)
    elevated: globalColors.surface.base,
    overlay: 'rgba(0, 0, 0, 0.5)',
  },

  // Complementary Palette
  // Maps to: Complementary pallet/Cream/Cream 100
  complementary: {
    cream: {
      'cream-100': globalColors.cream[100], // #eae5e1 - Complementary pallet/Cream/Cream 100
      'cream-200': globalColors.cream[200],
      'cream-300': globalColors.cream[300],
      'cream-400': globalColors.cream[400],
      'cream-500': globalColors.cream[500],
    },
  },

  // Semantic Colors (using Global as base)
  semantic: {
    success: {
      default: '#10b981',
      light: '#d1fae5',
      dark: '#059669',
    },
    warning: {
      default: '#f59e0b',
      light: '#fef3c7',
      dark: '#d97706',
    },
    error: {
      default: '#ef4444',
      light: '#fee2e2',
      dark: '#dc2626',
    },
    info: {
      default: '#3b82f6',
      light: '#dbeafe',
      dark: '#2563eb',
    },
  },

  // Border Colors
  border: {
    default: globalColors.neutral[300],
    muted: globalColors.neutral[200],
    strong: globalColors.neutral[400],
    focus: '#3b82f6', // Vibrant blue for focus states (2px outline)
  },
} as const;

export type SystemColors = typeof systemColors;
