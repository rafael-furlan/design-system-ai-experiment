/**
 * System Typography Tokens
 * Semantic typography tokens that reference Global typography values.
 * These apply contextual meaning and create reusable text styles.
 */

import { globalTypography, globalColors } from '../global';

export const systemTypography = {
  // Heading Styles
  heading: {
    h1: {
      fontFamily: globalTypography.fontFamily.primary,
      fontSize: globalTypography.fontSize['5xl'],
      fontWeight: globalTypography.fontWeight.bold,
      lineHeight: globalTypography.lineHeight.tight,
      letterSpacing: globalTypography.letterSpacing.tight,
      color: globalColors.primary[900],
    },
    h2: {
      fontFamily: globalTypography.fontFamily.primary,
      fontSize: globalTypography.fontSize['4xl'],
      fontWeight: globalTypography.fontWeight.bold,
      lineHeight: globalTypography.lineHeight.tight,
      letterSpacing: globalTypography.letterSpacing.tight,
      color: globalColors.primary[900],
    },
    h3: {
      fontFamily: globalTypography.fontFamily.primary,
      fontSize: globalTypography.fontSize['3xl'],
      fontWeight: globalTypography.fontWeight.semibold,
      lineHeight: globalTypography.lineHeight.snug,
      letterSpacing: globalTypography.letterSpacing.normal,
      color: globalColors.primary[900],
    },
    h4: {
      fontFamily: globalTypography.fontFamily.primary,
      fontSize: globalTypography.fontSize['2xl'],
      fontWeight: globalTypography.fontWeight.semibold,
      lineHeight: globalTypography.lineHeight.snug,
      letterSpacing: globalTypography.letterSpacing.normal,
      color: globalColors.primary[900],
    },
    h5: {
      fontFamily: globalTypography.fontFamily.primary,
      fontSize: globalTypography.fontSize.xl,
      fontWeight: globalTypography.fontWeight.semibold,
      lineHeight: globalTypography.lineHeight.normal,
      letterSpacing: globalTypography.letterSpacing.normal,
      color: globalColors.primary[900],
    },
    h6: {
      fontFamily: globalTypography.fontFamily.primary,
      fontSize: globalTypography.fontSize.lg,
      fontWeight: globalTypography.fontWeight.semibold,
      lineHeight: globalTypography.lineHeight.normal,
      letterSpacing: globalTypography.letterSpacing.normal,
      color: globalColors.primary[900],
    },
  },

  // Body Text Styles
  body: {
    large: {
      fontFamily: globalTypography.fontFamily.primary,
      fontSize: globalTypography.fontSize.lg,
      fontWeight: globalTypography.fontWeight.normal,
      lineHeight: globalTypography.lineHeight.relaxed,
      letterSpacing: globalTypography.letterSpacing.normal,
      color: globalColors.primary[900],
    },
    base: {
      fontFamily: globalTypography.fontFamily.primary,
      fontSize: globalTypography.fontSize.base,
      fontWeight: globalTypography.fontWeight.normal,
      lineHeight: globalTypography.lineHeight.normal,
      letterSpacing: globalTypography.letterSpacing.normal,
      color: globalColors.primary[900],
    },
    small: {
      fontFamily: globalTypography.fontFamily.primary,
      fontSize: globalTypography.fontSize.sm,
      fontWeight: globalTypography.fontWeight.normal,
      lineHeight: globalTypography.lineHeight.normal,
      letterSpacing: globalTypography.letterSpacing.normal,
      color: globalColors.primary[900],
    },
  },

  // Primary Typography (matches Figma: Typography/Primary/high-contrast)
  primary: {
    default: {
      fontFamily: globalTypography.fontFamily.primary,
      fontSize: globalTypography.fontSize.base,
      fontWeight: globalTypography.fontWeight.normal,
      lineHeight: globalTypography.lineHeight.normal,
      color: globalColors.primary[900],
    },
    'high-contrast': {
      fontFamily: globalTypography.fontFamily.primary,
      fontSize: globalTypography.fontSize.base,
      fontWeight: globalTypography.fontWeight.normal,
      lineHeight: globalTypography.lineHeight.normal,
      color: globalColors.primary[900], // #050505 - Typography/Primary/high-contrast
    },
  },

  // Label Styles
  label: {
    large: {
      fontFamily: globalTypography.fontFamily.primary,
      fontSize: globalTypography.fontSize.base,
      fontWeight: globalTypography.fontWeight.medium,
      lineHeight: globalTypography.lineHeight.normal,
      letterSpacing: globalTypography.letterSpacing.wide,
      color: globalColors.primary[900],
    },
    base: {
      fontFamily: globalTypography.fontFamily.primary,
      fontSize: globalTypography.fontSize.sm,
      fontWeight: globalTypography.fontWeight.medium,
      lineHeight: globalTypography.lineHeight.normal,
      letterSpacing: globalTypography.letterSpacing.wide,
      color: globalColors.primary[900],
    },
    small: {
      fontFamily: globalTypography.fontFamily.primary,
      fontSize: globalTypography.fontSize.xs,
      fontWeight: globalTypography.fontWeight.medium,
      lineHeight: globalTypography.lineHeight.normal,
      letterSpacing: globalTypography.letterSpacing.wide,
      color: globalColors.primary[900],
    },
  },

  // Caption Styles
  caption: {
    fontFamily: globalTypography.fontFamily.primary,
    fontSize: globalTypography.fontSize.xs,
    fontWeight: globalTypography.fontWeight.normal,
    lineHeight: globalTypography.lineHeight.normal,
    letterSpacing: globalTypography.letterSpacing.normal,
    color: globalColors.neutral[600],
  },

  // Code/Mono Styles
  code: {
    fontFamily: globalTypography.fontFamily.mono,
    fontSize: globalTypography.fontSize.sm,
    fontWeight: globalTypography.fontWeight.normal,
    lineHeight: globalTypography.lineHeight.relaxed,
    letterSpacing: globalTypography.letterSpacing.normal,
    color: globalColors.primary[900],
  },
} as const;

export type SystemTypography = typeof systemTypography;
