# Design System AI Experiment

A design token system that mirrors the Figma variable structure, ensuring consistency between design and code for the Merchant UI Design System.

## Overview

This design token system follows the **Global → System** pattern used in Figma, where:

- **Global Tokens**: Base design values (colors, typography scales, spacing) that serve as the foundation
- **System Tokens**: Semantic tokens that reference Global tokens, applying contextual meaning

This creates a cascading update system where changes to Global tokens automatically propagate to System tokens, maintaining consistency across the design system.

## Structure

```
src/
├── tokens/
│   ├── global/          # Base design values (foundation)
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   ├── borderRadius.ts
│   │   ├── shadows.ts
│   │   └── index.ts
│   ├── system/          # Semantic tokens (contextual applications)
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   └── index.ts
│   ├── types.ts         # TypeScript type definitions
│   ├── references.ts    # Global → System reference mapping
│   ├── utils.ts         # Utility functions
│   └── index.ts         # Main token export
└── index.ts             # Package entry point
```

## Installation

```bash
npm install
npm run build
```

## Usage

### Basic Usage

```typescript
import { designTokens } from './tokens';

// Access Global tokens (base values)
const primaryColor = designTokens.global.colors.primary[900]; // '#050505'

// Access System tokens (semantic, references Global)
const highContrastText = designTokens.system.colors.typography.primary['high-contrast']; // '#050505'
const surface12 = designTokens.system.colors.surface['surface-12']; // '#191919'
```

### Using Individual Exports

```typescript
import { globalColors, systemColors } from './tokens';

// Global colors
const cream100 = globalColors.cream[100]; // '#eae5e1'

// System colors (semantic)
const surface7 = systemColors.surface['surface-7']; // '#999999'
```

### Using Utility Functions

```typescript
import { getToken, getCSSVariable, tokensToCSSVariables } from './tokens';

// Get token by path
const token = getToken('system.colors.typography.primary.high-contrast');

// Get CSS custom property name
const cssVar = getCSSVariable('system.colors.typography.primary.high-contrast');
// Returns: '--system-colors-typography-primary-high-contrast'

// Convert tokens to CSS variables
const cssVars = tokensToCSSVariables(designTokens.system.colors);
```

### Tracing Global → System References

```typescript
import { getGlobalReference, getReferencesForGlobal } from './tokens/references';

// Find which Global token a System token references
const ref = getGlobalReference('system.colors.typography.primary.high-contrast');
// Returns: { systemPath: '...', globalPath: 'global.colors.primary.900', ... }

// Find all System tokens that reference a Global token
const refs = getReferencesForGlobal('global.colors.primary.900');
```

## Design Token Structure

### Global Tokens

Base design values that are platform-agnostic:

- **Colors**: Primary palette, complementary palette (Cream), neutral grayscale
- **Typography**: Font families, sizes, weights, line heights, letter spacing
- **Spacing**: 8px-based spacing scale
- **Border Radius**: Consistent rounded corner values
- **Shadows**: Elevation and depth values

### System Tokens

Semantic tokens that reference Global tokens:

- **Colors**: 
  - Typography colors (primary, secondary, inverse)
  - Surface colors (surface-1 through surface-12)
  - Complementary palette (Cream variants)
  - Semantic colors (success, warning, error, info)
  - Border colors

- **Typography**: 
  - Heading styles (h1-h6)
  - Body text styles (large, base, small)
  - Primary typography (matches Figma: `Typography/Primary/high-contrast`)
  - Label styles
  - Caption and code styles

- **Spacing**: 
  - Component spacing
  - Layout spacing
  - Section spacing

## Figma Variable Mapping

This token system mirrors the Figma variable structure:

| Figma Variable | Token Path | Value |
|---------------|------------|-------|
| `Typography/Primary/high-contrast` | `system.colors.typography.primary.high-contrast` | `#050505` |
| `Surface/Surface 12` | `system.colors.surface.surface-12` | `#191919` |
| `Surface/Surface 7` | `system.colors.surface.surface-7` | `#999999` |
| `Complementary pallet/Cream/Cream 100` | `system.colors.complementary.cream.cream-100` | `#eae5e1` |

### Global → System Connection

The connection pattern mirrors Figma's variable aliasing:

```
Global Collection:
  └─ colors.primary.900 → #050505

System Collection:
  └─ colors.typography.primary.high-contrast → [References: colors.primary.900]
  └─ colors.surface.surface-12 → [References: colors.primary.900]
```

This ensures:
- Single source of truth (Global tokens)
- Automatic cascading updates
- Semantic meaning (System tokens)
- Easy maintenance

## TypeScript Support

Full TypeScript support with type-safe token access:

```typescript
import type { DesignTokens, TokenPath } from './tokens';

// Type-safe token access
const tokens: DesignTokens = designTokens;

// Type-safe paths
const path: TokenPath = 'system.colors.typography.primary.high-contrast';
```

## Building

```bash
# Build TypeScript
npm run build

# Watch mode
npm run dev
```

Output will be in the `dist/` directory.

## Integration with React Components

When importing components from Figma, ensure they use these tokens:

```typescript
import { designTokens } from './tokens';

// Use in component styles
const styles = {
  color: designTokens.system.colors.typography.primary['high-contrast'],
  backgroundColor: designTokens.system.colors.surface['surface-12'],
  padding: designTokens.system.spacing.component.md,
};
```

## Future Enhancements

- [ ] Dark mode support (theme modes)
- [ ] CSS custom properties generation
- [ ] JSON export for design tools
- [ ] Figma plugin for automatic sync
- [ ] Component-specific tokens
- [ ] Animation and transition tokens

## References

- [Figma File](https://www.figma.com/design/giTYeoQDOHvvyPiCRJqbhk/%F0%9F%AA%90-1.-Merchant-UI?node-id=2310-593&t=TbqndGL0DHCl4WWi-1&view=variables)
- [Design Token Structure Summary](./figma-variable-structure-summary.md)

## License

MIT
