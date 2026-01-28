# Design Tokens

This directory contains the design token structure organized in three layers: **Primitive**, **Alias**, and **System**.

## Structure

```
tokens/
├── primitive/          # Foundation layer - raw values
│   ├── colors.ts
│   ├── spacing.ts
│   └── typography.ts
├── alias/              # Semantic layer - references primitives
│   ├── colors.ts
│   ├── spacing.ts
│   └── typography.ts
├── system/             # Application layer - references aliases/primitives
│   ├── colors.ts
│   ├── spacing.ts
│   └── typography.ts
├── types.ts            # TypeScript type definitions
├── index.ts            # Main export file
├── resolver.ts         # Token reference resolver
└── README.md           # This file
```

## Token Layers

### Primitive Tokens
Foundation layer containing raw design values:
- **Colors**: Base color palette (neutral, cream, surface, text)
- **Spacing**: Base spacing scale (4px base unit: 0, 4px, 8px, 12px, 16px, etc.)
- **Typography**: Base font sizes, line heights, families, and weights

### Alias Tokens
Semantic layer that references primitive tokens:
- **Colors**: Semantic color names (background.primary, text.primary, border.default, etc.)
- **Spacing**: Semantic spacing names (xs, sm, md, lg, xl, etc.)
- **Typography**: Semantic typography styles (heading.h1-h4, body.large-medium-small-xs)

### System Tokens
Application layer for component-specific usage:
- **Colors**: System colors (Typography/Primary/high-contrast, Surface/Surface 12, etc.)
- **Spacing**: Component and layout spacing (button.padding-x, card.padding, layout.section.gap, etc.)
- **Typography**: System typography (font.size.*, font.lineHeight.*, font.family.*, font.weight.*)

## Usage

### Basic Import

```typescript
import { primitive, alias, system } from './tokens';
import type { DesignTokens } from './tokens/types';

// Access primitive tokens (with type safety)
const primaryColor: string = primitive.colors.neutral['0'].value; // "#ffffff"

// Access alias tokens
const textColor: string = alias.colors.text.primary.value; // "{primitive.colors.text.high-contrast}"

// Access system tokens
const surfaceColor: string = system.colors.surface['surface-12'].value; // "{primitive.colors.surface.12}"
```

### Using the Resolver

```typescript
import { resolveTokens, getToken } from './tokens/resolver';
import type { ResolvedTokenValue } from './tokens/types';

// Resolve all references in a token object
const resolvedAlias = resolveTokens(alias.colors);
// Now text.primary.value will be "#050505" instead of "{primitive.colors.text.high-contrast}"

// Get a specific token value (automatically resolves references)
const textColor: ResolvedTokenValue | undefined = getToken('system.colors.typography.primary.high-contrast');
// Returns: "#050505"
```

### In React Components (TypeScript)

```typescript
import { getToken } from './tokens/resolver';
import type { ResolvedTokenValue } from './tokens/types';

interface ButtonProps {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  const buttonPaddingX = getToken('system.spacing.component.button.padding-x') as string;
  const buttonPaddingY = getToken('system.spacing.component.button.padding-y') as string;
  const primaryTextColor = getToken('system.colors.typography.primary.default') as string;
  
  return (
    <button
      style={{
        paddingLeft: buttonPaddingX,
        paddingRight: buttonPaddingX,
        paddingTop: buttonPaddingY,
        paddingBottom: buttonPaddingY,
        color: primaryTextColor,
      }}
    >
      {children}
    </button>
  );
}
```

### Type Safety

All tokens are fully typed with TypeScript. You can import types for better IDE support:

```typescript
import type { 
  DesignTokens,
  PrimitiveTokens,
  AliasTokens,
  SystemTokens,
  ColorToken,
  DimensionToken,
  TokenReference
} from './tokens/types';
```

## Token Reference Format

Tokens can reference other tokens using the format: `{layer.category.subcategory.value}`

Examples:
- `{primitive.colors.neutral.0}` - References primitive neutral color 0
- `{alias.spacing.md}` - References alias medium spacing
- `{primitive.fontSize.l}` - References primitive large font size

## Connection Points

### Colors
```
Primitive Colors (raw values)
  ↓ referenced by
Alias Colors (semantic names)
  ↓ referenced by
System Colors (application-specific)
```

### Spacing
```
Primitive Spacing (base scale: 4px, 8px, 16px, etc.)
  ↓ referenced by
Alias Spacing (semantic: xs, sm, md, lg, xl)
  ↓ referenced by
System Spacing (component-specific: button.padding-x, card.padding)
```

### Typography
```
Primitive Typography (sizes, line-heights, families, weights)
  ↓ referenced by
Alias Typography (semantic styles: heading.h1, body.large)
  ↓ referenced by
System Typography (application: font.size.*, font.family.*)
```

## Matching Figma Variables

The following system tokens match the observed Figma variable names:

- `system.colors.typography.primary.high-contrast` → `Typography/Primary/high-contrast`
- `system.colors.surface.surface-12` → `Surface/Surface 12`
- `system.colors.surface.surface-7` → `Surface/Surface 7`
- `system.colors.complementary.cream.cream-100` → `Complementary pallet/Cream/Cream 100`
- `system.typography.font.size.*` → `font/size/*`
- `system.typography.font.lineHeight.*` → `font/line-height/*`
- `system.typography.font.family.*` → `font/family/*`
- `system.typography.font.weight.*` → `font/weight/*`

## Best Practices

1. **Always use System tokens in components** - They provide the most semantic and maintainable approach
2. **Use Alias tokens for custom components** - When creating new components, prefer alias tokens over system tokens
3. **Avoid direct Primitive access** - Only use primitives when creating new alias tokens
4. **Resolve references before use** - Use the resolver to get actual values for styling

## Adding New Tokens

1. **Primitive tokens**: Add raw values to `primitive/*.ts` files (TypeScript)
2. **Alias tokens**: Reference primitives in `alias/*.ts` files (TypeScript)
3. **System tokens**: Reference aliases or primitives in `system/*.ts` files (TypeScript)

All token files are written in TypeScript with full type safety. The types are defined in `types.ts` and will provide IntelliSense and type checking.

Remember: Changes to primitive tokens will automatically propagate through aliases to system tokens when using the resolver.

## TypeScript Support

This token system is built with TypeScript for full type safety:

- **Type definitions**: All token structures are typed in `types.ts`
- **Type inference**: Token values are inferred from their definitions
- **Reference types**: Token references use the `TokenReference` type
- **Resolved types**: Resolved tokens use `ResolvedTokenValue` type

The TypeScript compiler will catch type errors at build time, ensuring token references are valid and preventing runtime errors.
