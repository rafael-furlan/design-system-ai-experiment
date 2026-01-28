/**
 * TypeScript type definitions for design tokens
 */

export type TokenType = 'color' | 'dimension' | 'number' | 'string' | 'typography';

export interface TokenMeta {
  description: string;
}

export interface BaseToken<T = string | number> {
  value: T | TokenReference;
  type: TokenType;
  description: string;
}

export type TokenReference = `{${string}}`;

export interface ColorToken extends BaseToken<string> {
  type: 'color';
  value: string | TokenReference;
}

export interface DimensionToken extends BaseToken<string> {
  type: 'dimension';
  value: string | TokenReference;
}

export interface NumberToken extends BaseToken<number> {
  type: 'number';
  value: number | TokenReference;
}

export interface StringToken extends BaseToken<string> {
  type: 'string';
  value: string | TokenReference;
}

export interface TypographyToken extends BaseToken {
  type: 'typography';
  value: TypographyTokenValue | TokenReference;
}

export interface TypographyTokenValue {
  fontSize?: DimensionToken | TokenReference;
  lineHeight?: DimensionToken | TokenReference;
  fontFamily?: StringToken | TokenReference;
  fontWeight?: NumberToken | TokenReference;
}

export type Token = ColorToken | DimensionToken | NumberToken | StringToken | TypographyToken;

// Primitive token types
export interface PrimitiveColors {
  neutral: Record<string, ColorToken>;
  cream: Record<string, ColorToken>;
  surface: Record<string, ColorToken>;
  text: Record<string, ColorToken>;
}

export interface PrimitiveSpacing {
  [key: string]: DimensionToken;
}

export interface PrimitiveTypography {
  fontSize: Record<string, DimensionToken>;
  lineHeight: Record<string, DimensionToken>;
  fontFamily: Record<string, StringToken>;
  fontWeight: Record<string, NumberToken>;
}

// Alias token types
export interface AliasColors {
  background: Record<string, ColorToken>;
  text: Record<string, ColorToken>;
  border: Record<string, ColorToken>;
  surface: Record<string, ColorToken>;
  accent: {
    cream: Record<string, ColorToken>;
  };
}

export interface AliasSpacing {
  [key: string]: DimensionToken;
}

export interface AliasTypography {
  heading: {
    h1: TypographyTokenValue;
    h2: TypographyTokenValue;
    h3: TypographyTokenValue;
    h4: TypographyTokenValue;
  };
  body: {
    large: TypographyTokenValue;
    medium: TypographyTokenValue;
    small: TypographyTokenValue;
    xs: TypographyTokenValue;
  };
  action: {
    fontFamily: StringToken;
    fontWeight: {
      medium: NumberToken;
      bold: NumberToken;
    };
  };
}

// System token types
export interface SystemColors {
  typography: {
    primary: Record<string, ColorToken>;
  };
  surface: Record<string, ColorToken>;
  complementary: {
    cream: {
      'cream-100': ColorToken;
    };
  };
  background: Record<string, ColorToken>;
  border: Record<string, ColorToken>;
}

export interface SystemSpacing {
  component: {
    button: Record<string, DimensionToken>;
    card: Record<string, DimensionToken>;
    input: Record<string, DimensionToken>;
    modal: Record<string, DimensionToken>;
  };
  layout: {
    section: Record<string, DimensionToken>;
    container: Record<string, DimensionToken>;
    grid: Record<string, DimensionToken>;
  };
}

export interface SystemTypography {
  heading: {
    h1: TypographyToken | TypographyTokenValue;
    h2: TypographyToken | TypographyTokenValue;
    h3: TypographyToken | TypographyTokenValue;
    h4: TypographyToken | TypographyTokenValue;
  };
  body: {
    large: TypographyToken | TypographyTokenValue;
    medium: TypographyToken | TypographyTokenValue;
    small: TypographyToken | TypographyTokenValue;
    xs: TypographyToken | TypographyTokenValue;
  };
  font: {
    size: Record<string, DimensionToken>;
    lineHeight: Record<string, DimensionToken>;
    family: Record<string, StringToken>;
    weight: Record<string, NumberToken>;
  };
}

// Main token structure types
export interface PrimitiveTokens {
  colors: PrimitiveColors;
  spacing: PrimitiveSpacing;
  typography: PrimitiveTypography;
}

export interface AliasTokens {
  colors: AliasColors;
  spacing: AliasSpacing;
  typography: AliasTypography;
}

export interface SystemTokens {
  colors: SystemColors;
  spacing: SystemSpacing;
  typography: SystemTypography;
}

export interface DesignTokens {
  primitive: PrimitiveTokens;
  alias: AliasTokens;
  system: SystemTokens;
}

// Helper type for resolved tokens (without references)
export type ResolvedTokenValue = string | number;

export interface ResolvedTokens {
  primitive: {
    colors: Record<string, Record<string, ResolvedTokenValue>>;
    spacing: Record<string, ResolvedTokenValue>;
    typography: Record<string, Record<string, ResolvedTokenValue>>;
  };
  alias: {
    colors: Record<string, Record<string, ResolvedTokenValue>>;
    spacing: Record<string, ResolvedTokenValue>;
    typography: Record<string, any>;
  };
  system: {
    colors: Record<string, Record<string, ResolvedTokenValue>>;
    spacing: Record<string, any>;
    typography: Record<string, any>;
  };
}
