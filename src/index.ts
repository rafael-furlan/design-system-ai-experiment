/**
 * Design System AI Experiment
 * Main entry point for the design system.
 * 
 * This package provides design tokens that mirror the Figma variable structure,
 * ensuring consistency between design and code.
 */

export * from './tokens';

// Re-export tokens as default for convenience
export { designTokens as default } from './tokens';
