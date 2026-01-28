# Design Token Structure Summary

## Overview

This document summarizes the design token structure from the Figma design system file, focusing on the relationships between variable collections, particularly the connections between primitive tokens, aliases, and system tokens.

## Variable Collections Architecture

### Collection Hierarchy

The design token system follows a hierarchical structure with three main layers:

1. **Primitive Tokens** (Foundation Layer)
2. **Alias Tokens** (Semantic Layer)
3. **System Tokens** (Application Layer)

### Connection Points Between Collections

The design token system uses Figma's variable mode system to create connections between collections. Variables can be set to "Local" or "Remote" modes, and can reference other variables through aliases.

### Collection Connection Architecture

#### 1. Primitive Colors → Alias → System Colors

**Primitive Colors Collection:**
- **Mode**: Typically set as "Local" variables (foundation values)
- **Type**: Color variables
- Base color values defined as raw color tokens
- Examples from the system:
  - `Complementary pallet/Cream/Cream 100`: `#eae5e1`
  - `Surface/Surface 12`: `#191919`
  - `Surface/Surface 7`: `#999999`

**Alias Collection (Color):**
- **Mode**: Set to reference other variables
- **Type**: Color variables that reference primitive colors
- Alias tokens reference primitive colors to create semantic meaning
- Examples of semantic aliases:
  - `color/background/primary` → references `Primitive Colors/neutral/900`
  - `color/text/primary` → references `Primitive Colors/neutral/50`
  - `color/border/default` → references `Primitive Colors/neutral/200`

**System Colors Collection:**
- **Mode**: References alias tokens or primitives
- **Type**: Color variables
- System colors reference aliases (or primitives) for specific use cases
- Examples:
  - `Typography/Primary/high-contrast`: `#050505`
  - `Surface/Surface 12`: `#191919` (may reference an alias or primitive)
  - `Surface/Surface 7`: `#999999` (may reference an alias or primitive)

**Connection Pattern:**
```
Primitive Colors Collection
  ├─ Raw color values (e.g., #191919, #999999)
  │
  ↓ (referenced by)
  │
Alias Collection (Color)
  ├─ Semantic color names (e.g., "background-primary", "text-secondary")
  │
  ↓ (referenced by)
  │
System Colors Collection
  ├─ Application-specific colors (e.g., "Surface/Surface 12", "Typography/Primary/high-contrast")
```

**Key Connection Mechanism:**
- In Figma, variables can reference other variables by selecting them in the variable editor
- When a variable references another variable, it becomes an alias
- Changes to primitive colors automatically propagate to aliases and system colors that reference them

#### 2. Primitive Space → Alias → System Spacing

**Primitive Space Collection:**
- **Mode**: Typically set as "Local" variables (foundation values)
- **Type**: Number variables (representing pixels or other units)
- Base spacing values defined as raw numeric tokens
- Foundation for all spacing-related tokens
- Examples of primitive spacing scale:
  - `space/0`: `0`
  - `space/1`: `4`
  - `space/2`: `8`
  - `space/3`: `12`
  - `space/4`: `16`
  - `space/5`: `20`
  - `space/6`: `24`
  - `space/8`: `32`

**Alias Collection (Spacing):**
- **Mode**: Set to reference primitive space variables
- **Type**: Number variables
- Alias tokens create semantic spacing names
- Examples:
  - `spacing/xs` → references `Primitive Space/space/1` (4px)
  - `spacing/sm` → references `Primitive Space/space/2` (8px)
  - `spacing/md` → references `Primitive Space/space/4` (16px)
  - `spacing/lg` → references `Primitive Space/space/6` (24px)
  - `spacing/xl` → references `Primitive Space/space/8` (32px)

**System Spacing Collection:**
- **Mode**: References alias tokens or primitives
- **Type**: Number variables
- System spacing tokens reference aliases for specific component/system needs
- Examples:
  - `component/button/padding-x` → references `Alias/spacing/md`
  - `component/card/padding` → references `Alias/spacing/lg`
  - `layout/section/gap` → references `Alias/spacing/xl`

**Connection Pattern:**
```
Primitive Space Collection
  ├─ Base spacing scale (e.g., 4px, 8px, 16px, 24px, 32px)
  │
  ↓ (referenced by)
  │
Alias Collection (Spacing)
  ├─ Semantic spacing names (e.g., "spacing-xs", "spacing-sm", "spacing-md")
  │
  ↓ (referenced by)
  │
System Spacing Collection
  ├─ Component/system-specific spacing (e.g., button padding, card gaps)
```

**Key Connection Mechanism:**
- Primitive space values establish the base scale
- Alias tokens provide semantic meaning and make spacing more maintainable
- System spacing tokens ensure consistent spacing across components
- All spacing ultimately traces back to primitive space values

### Cross-Collection Connections

**Important Note on Variable Modes:**
- **Local Variables**: Defined within the file, can be referenced by other variables
- **Remote Variables**: Published to a library, can be used across multiple files
- **Alias Variables**: Always reference another variable (can be local or remote)

**How Connections Work in Figma:**
1. Primitive tokens are created as Local variables with raw values
2. Alias tokens are created as Local variables that reference primitive tokens
3. System tokens are created as Local variables that reference alias tokens (or primitives)
4. When a variable references another variable, selecting it in the variable editor creates the connection
5. Changes to primitive values automatically update all dependent tokens

### Typography Token Structure

The typography system follows a similar hierarchical pattern:

#### Font Size Tokens
- **Primitive Layer**: Base size values
  - `font/size/xs`: `10`
  - `font/size/s`: `12`
  - `font/size/m`: `14`
  - `font/size/l`: `16`
  - `font/size/xl`: `18`
  - `font/size/2xl`: `22`
  - `font/size/3xl`: `26`
  - `font/size/4xl`: `30`

#### Font Line Height Tokens
- **Primitive Layer**: Base line height values
  - `font/line-height/xs`: `14`
  - `font/line-height/s`: `16`
  - `font/line-height/m`: `20`
  - `font/line-height/l`: `22`
  - `font/line-height/xl`: `26`
  - `font/line-height/2xl`: `32`
  - `font/line-height/3xl`: `36`

#### Font Family Tokens
- `font/family/heading`: `Goodsans`
- `font/family/body`: `Oxygen`
- `font/family/actions`: `Oxygen`

#### Font Weight Tokens
- `font/weight/Regular`: `Regular`
- `font/weight/Medium`: `Medium`
- `font/weight/Bold`: `Bold`

### Color Token Structure

#### Typography Colors
- `Typography/Primary/high-contrast`: `#050505`
  - Likely references an alias token for primary text color
  - High contrast variant for accessibility

#### Surface Colors
- `Surface/Surface 12`: `#191919`
  - Dark surface color, likely references a primitive or alias
- `Surface/Surface 7`: `#999999`
  - Medium gray surface color, likely references a primitive or alias

#### Complementary Palette
- `Complementary pallet/Cream/Cream 100`: `#eae5e1`
  - Light cream color, likely a primitive color value
  - Part of a numbered color scale (100 suggests lighter variant)

### Observed Variable Organization

Based on the variables retrieved from the Figma file, the following structure is observed:

#### Naming Convention Patterns
- **Category/Subcategory/Variant**: `Typography/Primary/high-contrast`
- **Category/Numbered Scale**: `Surface/Surface 12`, `Surface/Surface 7`
- **Category/Type/Scale**: `font/size/xs`, `font/line-height/s`
- **Palette/Color/Scale**: `Complementary pallet/Cream/Cream 100`

#### Variable Types Observed
1. **Color Variables**: Typography colors, Surface colors, Complementary palette
2. **Number Variables**: Font sizes, line heights (representing pixel values)
3. **String Variables**: Font families, font weights

#### Potential Collection Structure
Based on the naming patterns, the collections likely include:

1. **Primitive Colors Collection**
   - Raw color values (e.g., `#eae5e1`, `#191919`, `#999999`)
   - May include: `Complementary pallet/Cream/Cream 100`

2. **Alias Collection (Color)**
   - Semantic color names that reference primitives
   - May include tokens like: `color/background/primary`, `color/text/primary`

3. **System Colors Collection**
   - Application-specific colors
   - Includes: `Typography/Primary/high-contrast`, `Surface/Surface 12`, `Surface/Surface 7`

4. **Primitive Space Collection**
   - Base spacing values (not directly observed in current variables, but likely exists)

5. **Alias Collection (Spacing)**
   - Semantic spacing names (not directly observed, but likely exists)

6. **System Spacing Collection**
   - Component-specific spacing (not directly observed, but likely exists)

7. **Typography Collection**
   - Font sizes, line heights, families, weights
   - Organized by type: `font/size/*`, `font/line-height/*`, `font/family/*`, `font/weight/*`

## Key Design Principles

### 1. Single Source of Truth
- Primitive tokens serve as the single source of truth for all design values
- Changes to primitives propagate through aliases to system tokens

### 2. Semantic Abstraction
- Alias tokens provide semantic meaning (e.g., "primary", "secondary", "background")
- They abstract away from raw values, making the system more maintainable

### 3. System-Specific Application
- System tokens are tailored for specific use cases or components
- They reference aliases or primitives, ensuring consistency across the system

### 4. Maintainability
- The hierarchical structure allows for:
  - Easy theme switching (change primitives to update entire system)
  - Consistent updates across all tokens
  - Clear separation of concerns

## Token Relationships

### Dependency Flow

```
┌─────────────────┐
│ Primitive Tokens│
│  (Foundation)   │
└────────┬────────┘
         │
         │ references
         ↓
┌─────────────────┐
│  Alias Tokens   │
│  (Semantic)     │
└────────┬────────┘
         │
         │ references
         ↓
┌─────────────────┐
│ System Tokens   │
│  (Application)  │
└─────────────────┘
```

### Benefits of This Structure

1. **Scalability**: Easy to add new tokens without breaking existing ones
2. **Consistency**: Changes propagate automatically through the hierarchy
3. **Flexibility**: Can create multiple themes by changing primitive values
4. **Clarity**: Clear naming conventions make tokens self-documenting

## Recommendations

### For Color Tokens
- Ensure all system colors reference alias tokens or primitives
- Maintain clear naming conventions (e.g., `Surface/Surface {number}`)
- Document the semantic meaning of each alias token

### For Spacing Tokens
- Establish a consistent spacing scale (e.g., 4px base unit)
- Use aliases to create semantic spacing names
- Ensure system spacing tokens follow the established scale

### For Typography Tokens
- Maintain consistent size and line-height pairings
- Use semantic names for font families (heading, body, actions)
- Ensure weight tokens are consistently applied

## Notes

- The variable structure supports theming by allowing primitive values to be swapped
- Alias tokens act as a bridge between raw values and semantic meaning
- System tokens should always reference aliases or primitives, never hardcoded values
- This structure enables design system evolution while maintaining backward compatibility
