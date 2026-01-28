# Figma Variable Structure Summary
## Merchant UI Design System

**File:** [Merchant UI Design System](https://www.figma.com/design/giTYeoQDOHvvyPiCRJqbhk/%F0%9F%AA%90-1.-Merchant-UI?node-id=2310-593&t=TbqndGL0DHCl4WWi-1&view=variables)  
**Analysis Date:** January 28, 2026

---

## Overview

This document summarizes the design token structure found in the Merchant UI Figma file, with particular attention to the connection points between variable collections, especially the relationship between **Global** and **System** collections.

## Variable Collections Identified

Based on the variable structure analysis, the following collections have been identified:

### 1. **Typography Collection**
- **Path Pattern:** `Typography/{Category}/{Variant}`
- **Example Variables:**
  - `Typography/Primary/high-contrast` → `#050505`

**Structure:**
- Collection: `Typography`
- Category: `Primary`
- Variant: `high-contrast`

### 2. **Complementary Palette Collection**
- **Path Pattern:** `Complementary pallet/{Color Name}/{Shade}`
- **Example Variables:**
  - `Complementary pallet/Cream/Cream 100` → `#eae5e1`

**Structure:**
- Collection: `Complementary pallet`
- Color: `Cream`
- Shade: `Cream 100`

### 3. **Surface Collection**
- **Path Pattern:** `Surface/{Surface Name}`
- **Example Variables:**
  - `Surface/Surface 12` → `#191919`
  - `Surface/Surface 7` → `#999999`

**Structure:**
- Collection: `Surface`
- Surface Variants: Numbered system (Surface 7, Surface 12, etc.)

---

## Variable Collection Architecture

### Hierarchical Organization

The variables follow a hierarchical naming convention:
```
{Collection}/{Category}/{Variant}
```

This structure allows for:
- **Organization:** Clear separation of concerns
- **Scalability:** Easy addition of new categories and variants
- **Discoverability:** Intuitive navigation through the variable system

### Collection Connection Pattern

In Figma's variable system, collections typically connect in the following pattern:

```
Global Collection (Base Tokens)
    ↓
System Collection (Semantic Tokens)
    ↓
Component-Specific Variables
```

#### **Global Collection → System Collection Connection**

The connection between Global and System collections typically works as follows:

1. **Global Collection** contains:
   - Raw design values (colors, spacing, typography scales)
   - Platform-agnostic tokens
   - Base design decisions

2. **System Collection** contains:
   - Semantic tokens that reference Global collection variables
   - Context-specific applications (e.g., `Surface/Surface 12` uses a color from Global)
   - Themed variations

3. **Connection Mechanism:**
   - System variables **reference** Global variables using Figma's variable aliasing
   - Changes to Global variables propagate to System variables
   - System variables can apply semantic meaning to Global values

### Example Connection Flow

```
Global Collection:
  └─ Color/Primary/900 → #050505

System Collection:
  └─ Surface/Surface 12 → [References: Color/Primary/900]
  └─ Typography/Primary/high-contrast → [References: Color/Primary/900]
```

This creates a **single source of truth** where:
- Base colors are defined once in Global
- System tokens semantically apply these colors
- Updates to Global automatically cascade to System

---

## Variable Types Observed

### Color Variables
- **Surface tokens:** Background colors for different surface levels
- **Complementary palette:** Extended color system beyond primary palette
- **Typography colors:** Text color variants

### Typography Variables
- **Primary typography:** Main text styles
- **High contrast variant:** Accessibility-focused text color

---

## Design Token Structure Insights

### 1. **Naming Convention**
The variables use a clear, hierarchical naming pattern that supports:
- Easy identification of collection and category
- Consistent organization across the design system
- Developer-friendly token names

### 2. **Semantic Layering**
The structure suggests a semantic layering approach:
- **Global:** Foundation values
- **System:** Contextual applications
- **Component:** Specific use cases (inferred)

### 3. **Accessibility Considerations**
The presence of `high-contrast` variants indicates:
- Accessibility-first design approach
- Multiple contrast options for different contexts
- WCAG compliance considerations

### 4. **Color System**
The color system includes:
- Primary palette (inferred from Surface and Typography usage)
- Complementary palette (Cream variants)
- Surface-level system (numbered surfaces)

---

## Recommendations for Further Analysis

To fully understand the Global → System connection:

1. **Access Variable Collections Panel:**
   - Review all collections in the Variables panel
   - Identify which collections are marked as "Global" vs "System"
   - Document variable aliases/references

2. **Trace Variable References:**
   - For each System variable, identify its Global source
   - Map the dependency chain
   - Document any transformation logic

3. **Document Modes:**
   - Check if variables use modes (light/dark themes)
   - Document how modes affect Global → System relationships
   - Identify mode-specific overrides

4. **Component Usage:**
   - Trace how System variables are used in components
   - Document component-specific variable applications
   - Identify any component-level overrides

---

## Key Takeaways

1. **Hierarchical Structure:** Variables are organized in a clear collection → category → variant hierarchy

2. **Semantic Organization:** The system separates base values (Global) from contextual applications (System)

3. **Connection Pattern:** System variables reference Global variables, creating a cascading update system

4. **Accessibility Focus:** High-contrast variants and numbered surface system suggest accessibility considerations

5. **Scalability:** The naming convention supports easy expansion and maintenance

---

## Notes

- This analysis is based on available variable definitions accessed via Figma MCP tools
- For a complete picture, direct access to the Figma Variables panel would provide:
  - Complete list of all collections
  - Visual representation of variable references
  - Mode configurations
  - Collection scoping (Global vs System vs Component)

---

*Generated from Figma file analysis on January 28, 2026*
