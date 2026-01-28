import type { PrimitiveTypography } from '../types';

export const typography: PrimitiveTypography = {
  fontSize: {
    xs: {
      value: '10px',
      type: 'dimension',
      description: 'Extra small font size',
    },
    s: {
      value: '12px',
      type: 'dimension',
      description: 'Small font size',
    },
    m: {
      value: '14px',
      type: 'dimension',
      description: 'Medium font size',
    },
    l: {
      value: '16px',
      type: 'dimension',
      description: 'Large font size',
    },
    xl: {
      value: '18px',
      type: 'dimension',
      description: 'Extra large font size',
    },
    '2xl': {
      value: '22px',
      type: 'dimension',
      description: '2x large font size',
    },
    '3xl': {
      value: '26px',
      type: 'dimension',
      description: '3x large font size',
    },
    '4xl': {
      value: '30px',
      type: 'dimension',
      description: '4x large font size',
    },
  },
  lineHeight: {
    xs: {
      value: '14px',
      type: 'dimension',
      description: 'Line height for xs font size',
    },
    s: {
      value: '16px',
      type: 'dimension',
      description: 'Line height for s font size',
    },
    m: {
      value: '20px',
      type: 'dimension',
      description: 'Line height for m font size',
    },
    l: {
      value: '22px',
      type: 'dimension',
      description: 'Line height for l font size',
    },
    xl: {
      value: '26px',
      type: 'dimension',
      description: 'Line height for xl font size',
    },
    '2xl': {
      value: '32px',
      type: 'dimension',
      description: 'Line height for 2xl font size',
    },
    '3xl': {
      value: '36px',
      type: 'dimension',
      description: 'Line height for 3xl font size',
    },
  },
  fontFamily: {
    heading: {
      value: 'Goodsans',
      type: 'string',
      description: 'Font family for headings',
    },
    body: {
      value: 'Oxygen',
      type: 'string',
      description: 'Font family for body text',
    },
    actions: {
      value: 'Oxygen',
      type: 'string',
      description: 'Font family for action elements (buttons, links)',
    },
  },
  fontWeight: {
    regular: {
      value: 400,
      type: 'number',
      description: 'Regular font weight',
    },
    medium: {
      value: 500,
      type: 'number',
      description: 'Medium font weight',
    },
    bold: {
      value: 700,
      type: 'number',
      description: 'Bold font weight',
    },
  },
} as const;
