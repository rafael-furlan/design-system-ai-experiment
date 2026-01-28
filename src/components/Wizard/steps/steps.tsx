import React, { useEffect } from 'react';
import { PersonPlusFill, CheckCircleFill } from 'react-bootstrap-icons';
import { designTokens } from '../../../tokens';
import './steps.css';

// Extract token values for use in CSS
const tokens = designTokens;

// Inject CSS variables from design tokens (singleton pattern - only runs once)
let tokenVariablesInjected = false;

const injectTokenVariables = () => {
  if (typeof document === 'undefined' || tokenVariablesInjected) return;
  
  tokenVariablesInjected = true;
  const root = document.documentElement;
  const systemColors = tokens.system.colors;
  const systemSpacing = tokens.system.spacing;
  const systemTypography = tokens.system.typography;

  // RecipientSelector Colors
  root.style.setProperty('--recipient-bg', systemColors.surface.base);
  root.style.setProperty('--recipient-border-default', systemColors.border.muted);
  root.style.setProperty('--recipient-border-active', systemColors.typography.primary.default);
  root.style.setProperty('--recipient-icon-bg-default', systemColors.surface['surface-2']);
  root.style.setProperty('--recipient-icon-bg-success', systemColors.semantic.success.light);
  root.style.setProperty('--recipient-icon-color-default', systemColors.typography.secondary.default);
  root.style.setProperty('--recipient-icon-color-active', systemColors.typography.primary.default);
  root.style.setProperty('--recipient-icon-color-success', systemColors.semantic.success.default);
  root.style.setProperty('--recipient-icon-border-success', systemColors.semantic.success.light);
  root.style.setProperty('--recipient-label-text', systemColors.typography.primary.default);
  root.style.setProperty('--recipient-helper-text', systemColors.typography.secondary.default);
  root.style.setProperty('--recipient-badge-bg', systemColors.semantic.info.default);
  root.style.setProperty('--recipient-badge-text', systemColors.typography.inverse.default);
  root.style.setProperty('--recipient-spinner-color', systemColors.semantic.info.default);

  // RecipientSelector Spacing
  root.style.setProperty('--recipient-spacing-sm', systemSpacing.component.sm);
  root.style.setProperty('--recipient-spacing-md', systemSpacing.component.md);
  root.style.setProperty('--recipient-spacing-lg', systemSpacing.component.lg);

  // RecipientSelector Typography
  root.style.setProperty('--recipient-font-family', systemTypography.body.base.fontFamily);
  root.style.setProperty('--recipient-label-size', systemTypography.body.base.fontSize);
  root.style.setProperty('--recipient-label-weight', '600');
  root.style.setProperty('--recipient-helper-size', systemTypography.body.small.fontSize);
  root.style.setProperty('--recipient-helper-weight', systemTypography.body.small.fontWeight);
  root.style.setProperty('--recipient-badge-size', systemTypography.label.small.fontSize);
};

// Initialize token variables when module loads (if in browser)
if (typeof window !== 'undefined') {
  injectTokenVariables();
}

export type RecipientSelectorState = 'default' | 'active' | 'success' | 'loading';

export interface RecipientSelectorProps {
  /**
   * State of the recipient selector
   */
  state?: RecipientSelectorState;
  
  /**
   * Label text (default: "To")
   */
  label?: string;
  
  /**
   * Helper text below the label
   */
  helperText?: string;
  
  /**
   * Badge text (shown in loading state)
   */
  badgeText?: string;
  
  /**
   * Click handler
   */
  onClick?: () => void;
  
  /**
   * Additional CSS class name
   */
  className?: string;
}

export const RecipientSelector: React.FC<RecipientSelectorProps> = ({
  state = 'default',
  label = 'To',
  helperText = 'Select who will receive',
  badgeText = 'Importing list',
  onClick,
  className = '',
}) => {
  // Ensure token variables are injected
  useEffect(() => {
    injectTokenVariables();
  }, []);

  const renderIcon = () => {
    switch (state) {
      case 'success':
        return (
          <div className="recipient-selector__icon recipient-selector__icon--success">
            <CheckCircleFill size={20} />
          </div>
        );
      case 'loading':
        return (
          <div className="recipient-selector__icon recipient-selector__icon--loading">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10"
                cy="10"
                r="8"
                stroke="currentColor"
                strokeWidth="2"
                strokeOpacity="0.2"
                fill="none"
              />
              <circle
                cx="10"
                cy="10"
                r="8"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="37.7"
                strokeDashoffset="9.4"
                fill="none"
                strokeLinecap="round"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 10 10"
                  to="360 10 10"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>
        );
      default:
        return (
          <div className={`recipient-selector__icon ${state === 'active' ? 'recipient-selector__icon--active' : ''}`}>
            <PersonPlusFill size={20} />
          </div>
        );
    }
  };

  return (
    <div
      className={`recipient-selector recipient-selector--${state} ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      {renderIcon()}
      <div className="recipient-selector__content">
        <div className="recipient-selector__label-row">
          <span className="recipient-selector__label">{label}</span>
          {state === 'loading' && badgeText && (
            <span className="recipient-selector__badge">{badgeText}</span>
          )}
        </div>
        <span className="recipient-selector__helper">{helperText}</span>
      </div>
    </div>
  );
};
