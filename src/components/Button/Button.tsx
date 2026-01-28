import React, { useEffect } from 'react';
import { designTokens } from '../../tokens';
import './Button.css';

// Extract token values for use in CSS
const tokens = designTokens;

// Inject CSS variables from design tokens (singleton pattern - only runs once)
let tokenVariablesInjected = false;

const injectTokenVariables = () => {
  if (typeof document === 'undefined' || tokenVariablesInjected) return;
  
  tokenVariablesInjected = true;
  const root = document.documentElement;
  const systemColors = tokens.system.colors;

  // Primary Button Colors
  root.style.setProperty('--button-primary-bg', systemColors.surface['surface-12']);
  root.style.setProperty('--button-primary-hover-bg', systemColors.surface['surface-11']);
  root.style.setProperty('--button-primary-active-bg', systemColors.surface['surface-11']);
  root.style.setProperty('--button-primary-disabled-bg', systemColors.surface['surface-7']);
  root.style.setProperty('--button-primary-text', systemColors.typography.inverse.default);
  root.style.setProperty('--button-primary-disabled-text', systemColors.typography.inverse.default);

  // Secondary Button Colors
  root.style.setProperty('--button-secondary-bg', systemColors.surface.base);
  root.style.setProperty('--button-secondary-hover-bg', systemColors.surface['surface-1']);
  root.style.setProperty('--button-secondary-active-bg', systemColors.surface['surface-2']);
  root.style.setProperty('--button-secondary-disabled-bg', systemColors.surface['surface-2']);
  root.style.setProperty('--button-secondary-text', systemColors.typography.primary.default);
  root.style.setProperty('--button-secondary-disabled-text', systemColors.typography.primary.disabled);
  root.style.setProperty('--button-secondary-border', systemColors.typography.primary.default);
  root.style.setProperty('--button-secondary-disabled-border', systemColors.border.muted);

  // Tertiary Button Colors
  root.style.setProperty('--button-tertiary-text', systemColors.typography.secondary.default);
  root.style.setProperty('--button-tertiary-disabled-text', systemColors.typography.primary.disabled);
  root.style.setProperty('--button-tertiary-hover-bg', 'rgba(0, 0, 0, 0.05)');
  root.style.setProperty('--button-tertiary-active-bg', 'rgba(0, 0, 0, 0.1)');

  // Focus Color
  root.style.setProperty('--button-focus-color', systemColors.border.focus);
};

// Initialize token variables when module loads (if in browser)
if (typeof window !== 'undefined') {
  injectTokenVariables();
}

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonState = 'default' | 'hover' | 'active' | 'disabled' | 'loading' | 'focus';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant style
   * - primary: Solid dark background
   * - secondary: Outlined or light fill
   * - tertiary: Ghost/text-only
   */
  variant?: ButtonVariant;
  
  /**
   * Button size
   */
  size?: ButtonSize;
  
  /**
   * Button state
   */
  state?: ButtonState;
  
  /**
   * Show loading spinner
   */
  loading?: boolean;
  
  /**
   * Icon-only button (circular)
   */
  iconOnly?: boolean;
  
  /**
   * Icon element (for icon-only buttons or buttons with icons)
   */
  icon?: React.ReactNode;
  
  /**
   * Button content
   */
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  state,
  loading = false,
  iconOnly = false,
  icon,
  children,
  className = '',
  disabled,
  ...props
}) => {
  // Ensure token variables are injected (backup in case module load didn't work)
  useEffect(() => {
    injectTokenVariables();
  }, []);

  const isDisabled = disabled || state === 'disabled';
  const isLoading = loading || state === 'loading';
  const isFocused = state === 'focus';
  
  // Determine actual state
  const actualState = state || (isDisabled ? 'disabled' : isLoading ? 'loading' : 'default');
  
  const buttonClasses = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    iconOnly && 'button--icon-only',
    actualState !== 'default' && `button--${actualState}`,
    isFocused && 'button--focused',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={isDisabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="button__spinner" aria-label="Loading">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8"
              cy="8"
              r="7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="43.98"
              strokeDashoffset="43.98"
            >
              <animate
                attributeName="stroke-dasharray"
                dur="1.4s"
                values="0 43.98;21.99 21.99;0 43.98;0 43.98"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-dashoffset"
                dur="1.4s"
                values="0;-21.99;-43.98;-43.98"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </span>
      ) : (
        <>
          {icon && <span className="button__icon">{icon}</span>}
          {!iconOnly && children && <span className="button__text">{children}</span>}
        </>
      )}
    </button>
  );
};
