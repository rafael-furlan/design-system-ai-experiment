/**
 * Design System AI Experiment
 * Main entry point for the design system.
 * 
 * This package provides design tokens and React components that mirror
 * the Figma variable structure, ensuring consistency between design and code.
 */

export * from './tokens';
export * from './components';

// Re-export tokens as default for convenience
export { designTokens as default } from './tokens';
