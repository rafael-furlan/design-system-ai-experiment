import type { PrimitiveColors } from '../types';

export const colors: PrimitiveColors = {
  neutral: {
    '0': {
      value: '#ffffff',
      type: 'color',
      description: 'Pure white',
    },
    '50': {
      value: '#fafafa',
      type: 'color',
      description: 'Lightest neutral',
    },
    '100': {
      value: '#f5f5f5',
      type: 'color',
      description: 'Very light neutral',
    },
    '200': {
      value: '#e5e5e5',
      type: 'color',
      description: 'Light neutral',
    },
    '300': {
      value: '#d4d4d4',
      type: 'color',
      description: 'Medium light neutral',
    },
    '400': {
      value: '#a3a3a3',
      type: 'color',
      description: 'Medium neutral',
    },
    '500': {
      value: '#737373',
      type: 'color',
      description: 'Base neutral',
    },
    '600': {
      value: '#525252',
      type: 'color',
      description: 'Medium dark neutral',
    },
    '700': {
      value: '#404040',
      type: 'color',
      description: 'Dark neutral',
    },
    '800': {
      value: '#262626',
      type: 'color',
      description: 'Very dark neutral',
    },
    '900': {
      value: '#171717',
      type: 'color',
      description: 'Darkest neutral',
    },
    '950': {
      value: '#0a0a0a',
      type: 'color',
      description: 'Near black',
    },
  },
  cream: {
    '100': {
      value: '#eae5e1',
      type: 'color',
      description: 'Lightest cream - from Complementary palette',
    },
    '200': {
      value: '#d4cac3',
      type: 'color',
      description: 'Light cream',
    },
    '300': {
      value: '#beafa5',
      type: 'color',
      description: 'Medium light cream',
    },
    '400': {
      value: '#a89487',
      type: 'color',
      description: 'Medium cream',
    },
    '500': {
      value: '#927969',
      type: 'color',
      description: 'Base cream',
    },
  },
  surface: {
    '7': {
      value: '#999999',
      type: 'color',
      description: 'Medium gray surface - observed from Figma',
    },
    '12': {
      value: '#191919',
      type: 'color',
      description: 'Dark surface - observed from Figma',
    },
  },
  text: {
    'high-contrast': {
      value: '#050505',
      type: 'color',
      description: 'High contrast text color - observed from Figma Typography/Primary/high-contrast',
    },
  },
} as const;
