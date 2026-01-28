import type { SystemTypography } from '../types';
import type { TokenReference } from '../types';

export const typography: SystemTypography = {
  heading: {
    h1: {
      value: '{alias.typography.heading.h1}' as TokenReference,
      type: 'typography',
      description: 'H1 heading style - references alias typography.heading.h1',
    },
    h2: {
      value: '{alias.typography.heading.h2}' as TokenReference,
      type: 'typography',
      description: 'H2 heading style - references alias typography.heading.h2',
    },
    h3: {
      value: '{alias.typography.heading.h3}' as TokenReference,
      type: 'typography',
      description: 'H3 heading style - references alias typography.heading.h3',
    },
    h4: {
      value: '{alias.typography.heading.h4}' as TokenReference,
      type: 'typography',
      description: 'H4 heading style - references alias typography.heading.h4',
    },
  },
  body: {
    large: {
      value: '{alias.typography.body.large}' as TokenReference,
      type: 'typography',
      description: 'Large body text - references alias typography.body.large',
    },
    medium: {
      value: '{alias.typography.body.medium}' as TokenReference,
      type: 'typography',
      description: 'Medium body text - references alias typography.body.medium',
    },
    small: {
      value: '{alias.typography.body.small}' as TokenReference,
      type: 'typography',
      description: 'Small body text - references alias typography.body.small',
    },
    xs: {
      value: '{alias.typography.body.xs}' as TokenReference,
      type: 'typography',
      description: 'Extra small body text - references alias typography.body.xs',
    },
  },
  font: {
    size: {
      xs: {
        value: '{primitive.fontSize.xs}' as TokenReference,
        type: 'dimension',
        description: 'Extra small font size - references primitive fontSize.xs (matches Figma: font/size/xs)',
      },
      s: {
        value: '{primitive.fontSize.s}' as TokenReference,
        type: 'dimension',
        description: 'Small font size - references primitive fontSize.s (matches Figma: font/size/s)',
      },
      m: {
        value: '{primitive.fontSize.m}' as TokenReference,
        type: 'dimension',
        description: 'Medium font size - references primitive fontSize.m (matches Figma: font/size/m)',
      },
      l: {
        value: '{primitive.fontSize.l}' as TokenReference,
        type: 'dimension',
        description: 'Large font size - references primitive fontSize.l (matches Figma: font/size/l)',
      },
      xl: {
        value: '{primitive.fontSize.xl}' as TokenReference,
        type: 'dimension',
        description: 'Extra large font size - references primitive fontSize.xl (matches Figma: font/size/xl)',
      },
      '2xl': {
        value: '{primitive.fontSize.2xl}' as TokenReference,
        type: 'dimension',
        description: '2x large font size - references primitive fontSize.2xl (matches Figma: font/size/2xl)',
      },
      '3xl': {
        value: '{primitive.fontSize.3xl}' as TokenReference,
        type: 'dimension',
        description: '3x large font size - references primitive fontSize.3xl (matches Figma: font/size/3xl)',
      },
      '4xl': {
        value: '{primitive.fontSize.4xl}' as TokenReference,
        type: 'dimension',
        description: '4x large font size - references primitive fontSize.4xl (matches Figma: font/size/4xl)',
      },
    },
    lineHeight: {
      xs: {
        value: '{primitive.lineHeight.xs}' as TokenReference,
        type: 'dimension',
        description: 'Extra small line height - references primitive lineHeight.xs (matches Figma: font/line-height/xs)',
      },
      s: {
        value: '{primitive.lineHeight.s}' as TokenReference,
        type: 'dimension',
        description: 'Small line height - references primitive lineHeight.s (matches Figma: font/line-height/s)',
      },
      m: {
        value: '{primitive.lineHeight.m}' as TokenReference,
        type: 'dimension',
        description: 'Medium line height - references primitive lineHeight.m (matches Figma: font/line-height/m)',
      },
      l: {
        value: '{primitive.lineHeight.l}' as TokenReference,
        type: 'dimension',
        description: 'Large line height - references primitive lineHeight.l (matches Figma: font/line-height/l)',
      },
      xl: {
        value: '{primitive.lineHeight.xl}' as TokenReference,
        type: 'dimension',
        description: 'Extra large line height - references primitive lineHeight.xl (matches Figma: font/line-height/xl)',
      },
      '2xl': {
        value: '{primitive.lineHeight.2xl}' as TokenReference,
        type: 'dimension',
        description: '2x large line height - references primitive lineHeight.2xl (matches Figma: font/line-height/2xl)',
      },
      '3xl': {
        value: '{primitive.lineHeight.3xl}' as TokenReference,
        type: 'dimension',
        description: '3x large line height - references primitive lineHeight.3xl (matches Figma: font/line-height/3xl)',
      },
    },
    family: {
      heading: {
        value: '{primitive.fontFamily.heading}' as TokenReference,
        type: 'string',
        description: 'Heading font family - references primitive fontFamily.heading (matches Figma: font/family/heading)',
      },
      body: {
        value: '{primitive.fontFamily.body}' as TokenReference,
        type: 'string',
        description: 'Body font family - references primitive fontFamily.body (matches Figma: font/family/body)',
      },
      actions: {
        value: '{primitive.fontFamily.actions}' as TokenReference,
        type: 'string',
        description: 'Actions font family - references primitive fontFamily.actions (matches Figma: font/family/actions)',
      },
    },
    weight: {
      regular: {
        value: '{primitive.fontWeight.regular}' as TokenReference,
        type: 'number',
        description: 'Regular font weight - references primitive fontWeight.regular (matches Figma: font/weight/Regular)',
      },
      medium: {
        value: '{primitive.fontWeight.medium}' as TokenReference,
        type: 'number',
        description: 'Medium font weight - references primitive fontWeight.medium (matches Figma: font/weight/Medium)',
      },
      bold: {
        value: '{primitive.fontWeight.bold}' as TokenReference,
        type: 'number',
        description: 'Bold font weight - references primitive fontWeight.bold (matches Figma: font/weight/Bold)',
      },
    },
  },
} as const;
