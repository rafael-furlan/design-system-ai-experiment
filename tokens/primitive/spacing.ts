import type { PrimitiveSpacing } from '../types';

export const spacing: PrimitiveSpacing = {
  '0': {
    value: '0',
    type: 'dimension',
    description: 'No spacing',
  },
  '1': {
    value: '4px',
    type: 'dimension',
    description: 'Base spacing unit (4px)',
  },
  '2': {
    value: '8px',
    type: 'dimension',
    description: '2x base unit',
  },
  '3': {
    value: '12px',
    type: 'dimension',
    description: '3x base unit',
  },
  '4': {
    value: '16px',
    type: 'dimension',
    description: '4x base unit',
  },
  '5': {
    value: '20px',
    type: 'dimension',
    description: '5x base unit',
  },
  '6': {
    value: '24px',
    type: 'dimension',
    description: '6x base unit',
  },
  '8': {
    value: '32px',
    type: 'dimension',
    description: '8x base unit',
  },
  '10': {
    value: '40px',
    type: 'dimension',
    description: '10x base unit',
  },
  '12': {
    value: '48px',
    type: 'dimension',
    description: '12x base unit',
  },
  '16': {
    value: '64px',
    type: 'dimension',
    description: '16x base unit',
  },
  '20': {
    value: '80px',
    type: 'dimension',
    description: '20x base unit',
  },
} as const;
