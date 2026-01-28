import type { AliasTypography } from '../types';
import type { TokenReference } from '../types';

export const typography: AliasTypography = {
  heading: {
    h1: {
      fontSize: {
        value: '{primitive.fontSize.4xl}' as TokenReference,
        type: 'dimension',
      },
      lineHeight: {
        value: '{primitive.lineHeight.3xl}' as TokenReference,
        type: 'dimension',
      },
      fontFamily: {
        value: '{primitive.fontFamily.heading}' as TokenReference,
        type: 'string',
      },
      fontWeight: {
        value: '{primitive.fontWeight.bold}' as TokenReference,
        type: 'number',
      },
    },
    h2: {
      fontSize: {
        value: '{primitive.fontSize.3xl}' as TokenReference,
        type: 'dimension',
      },
      lineHeight: {
        value: '{primitive.lineHeight.2xl}' as TokenReference,
        type: 'dimension',
      },
      fontFamily: {
        value: '{primitive.fontFamily.heading}' as TokenReference,
        type: 'string',
      },
      fontWeight: {
        value: '{primitive.fontWeight.bold}' as TokenReference,
        type: 'number',
      },
    },
    h3: {
      fontSize: {
        value: '{primitive.fontSize.2xl}' as TokenReference,
        type: 'dimension',
      },
      lineHeight: {
        value: '{primitive.lineHeight.xl}' as TokenReference,
        type: 'dimension',
      },
      fontFamily: {
        value: '{primitive.fontFamily.heading}' as TokenReference,
        type: 'string',
      },
      fontWeight: {
        value: '{primitive.fontWeight.bold}' as TokenReference,
        type: 'number',
      },
    },
    h4: {
      fontSize: {
        value: '{primitive.fontSize.xl}' as TokenReference,
        type: 'dimension',
      },
      lineHeight: {
        value: '{primitive.lineHeight.l}' as TokenReference,
        type: 'dimension',
      },
      fontFamily: {
        value: '{primitive.fontFamily.heading}' as TokenReference,
        type: 'string',
      },
      fontWeight: {
        value: '{primitive.fontWeight.medium}' as TokenReference,
        type: 'number',
      },
    },
  },
  body: {
    large: {
      fontSize: {
        value: '{primitive.fontSize.l}' as TokenReference,
        type: 'dimension',
      },
      lineHeight: {
        value: '{primitive.lineHeight.l}' as TokenReference,
        type: 'dimension',
      },
      fontFamily: {
        value: '{primitive.fontFamily.body}' as TokenReference,
        type: 'string',
      },
      fontWeight: {
        value: '{primitive.fontWeight.regular}' as TokenReference,
        type: 'number',
      },
    },
    medium: {
      fontSize: {
        value: '{primitive.fontSize.m}' as TokenReference,
        type: 'dimension',
      },
      lineHeight: {
        value: '{primitive.lineHeight.m}' as TokenReference,
        type: 'dimension',
      },
      fontFamily: {
        value: '{primitive.fontFamily.body}' as TokenReference,
        type: 'string',
      },
      fontWeight: {
        value: '{primitive.fontWeight.regular}' as TokenReference,
        type: 'number',
      },
    },
    small: {
      fontSize: {
        value: '{primitive.fontSize.s}' as TokenReference,
        type: 'dimension',
      },
      lineHeight: {
        value: '{primitive.lineHeight.s}' as TokenReference,
        type: 'dimension',
      },
      fontFamily: {
        value: '{primitive.fontFamily.body}' as TokenReference,
        type: 'string',
      },
      fontWeight: {
        value: '{primitive.fontWeight.regular}' as TokenReference,
        type: 'number',
      },
    },
    xs: {
      fontSize: {
        value: '{primitive.fontSize.xs}' as TokenReference,
        type: 'dimension',
      },
      lineHeight: {
        value: '{primitive.lineHeight.xs}' as TokenReference,
        type: 'dimension',
      },
      fontFamily: {
        value: '{primitive.fontFamily.body}' as TokenReference,
        type: 'string',
      },
      fontWeight: {
        value: '{primitive.fontWeight.regular}' as TokenReference,
        type: 'number',
      },
    },
  },
  action: {
    fontFamily: {
      value: '{primitive.fontFamily.actions}' as TokenReference,
      type: 'string',
    },
    fontWeight: {
      medium: {
        value: '{primitive.fontWeight.medium}' as TokenReference,
        type: 'number',
      },
      bold: {
        value: '{primitive.fontWeight.bold}' as TokenReference,
        type: 'number',
      },
    },
  },
} as const;
