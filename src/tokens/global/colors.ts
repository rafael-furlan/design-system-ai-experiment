/**
 * Global Color Tokens
 * Base color values that serve as the foundation for the design system.
 * These are platform-agnostic and represent raw design decisions.
 */

export const globalColors = {
  // Primary Palette
  primary: {
    50: '#f0f0f0',
    100: '#e0e0e0',
    200: '#c0c0c0',
    300: '#a0a0a0',
    400: '#808080',
    500: '#666666',
    600: '#4d4d4d',
    700: '#333333',
    800: '#1a1a1a',
    900: '#050505', // Used in Typography/Primary/high-contrast
  },

  // Complementary Palette - Cream
  cream: {
    100: '#eae5e1', // Complementary pallet/Cream/Cream 100
    200: '#d5cbc3',
    300: '#c0b1a5',
    400: '#ab9787',
    500: '#967d69',
  },

  // Neutral/Grayscale Palette
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },

  // Surface Base Colors (used to derive surface tokens)
  surface: {
    base: '#ffffff',
    dark: '#000000',
  },
} as const;

export type GlobalColors = typeof globalColors;
