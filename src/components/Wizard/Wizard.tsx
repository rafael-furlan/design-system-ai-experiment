import React, { useEffect } from 'react';
import { ChevronRight } from 'react-bootstrap-icons';
import { RecipientSelector, RecipientSelectorState } from './steps';
import { designTokens } from '../../tokens';
import './Wizard.css';

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

  // MultiRecipientSelector Colors
  root.style.setProperty('--multi-recipient-separator-color', systemColors.typography.secondary.muted);
  root.style.setProperty('--multi-recipient-gap', systemSpacing.component.lg);
};

// Initialize token variables when module loads (if in browser)
if (typeof window !== 'undefined') {
  injectTokenVariables();
}

export interface RecipientConfig {
  /**
   * Unique identifier for this recipient field
   */
  id: string;
  
  /**
   * State of the recipient selector
   */
  state?: RecipientSelectorState;
  
  /**
   * Label text (e.g., "To", "CC", "BCC")
   */
  label: string;
  
  /**
   * Helper text below the label
   */
  helperText?: string;
  
  /**
   * Badge text (shown in loading state)
   */
  badgeText?: string;
  
  /**
   * Click handler for this specific recipient selector
   */
  onClick?: () => void;
}

export interface MultiRecipientSelectorProps {
  /**
   * Array of recipient configurations to display
   */
  recipients: RecipientConfig[];
  
  /**
   * Whether to show chevron separators between recipients
   */
  showSeparators?: boolean;
  
  /**
   * Additional CSS class name
   */
  className?: string;
}

export const MultiRecipientSelector: React.FC<MultiRecipientSelectorProps> = ({
  recipients,
  showSeparators = true,
  className = '',
}) => {
  // Ensure token variables are injected
  useEffect(() => {
    injectTokenVariables();
  }, []);

  if (recipients.length === 0) {
    return null;
  }

  return (
    <div className={`multi-recipient-selector ${className}`}>
      {recipients.map((recipient, index) => (
        <React.Fragment key={recipient.id}>
          <RecipientSelector
            state={recipient.state}
            label={recipient.label}
            helperText={recipient.helperText}
            badgeText={recipient.badgeText}
            onClick={recipient.onClick}
          />
          {showSeparators && index < recipients.length - 1 && (
            <ChevronRight 
              className="multi-recipient-selector__separator"
              size={16}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
