import React, { useEffect } from 'react';
import { designTokens } from '../../tokens';
import './Tabs.css';

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

  // Tabs Colors
  root.style.setProperty('--tabs-bg', systemColors.surface.base);
  root.style.setProperty('--tabs-border', systemColors.border.default);
  root.style.setProperty('--tabs-text', systemColors.typography.primary.default);
  root.style.setProperty('--tabs-text-muted', systemColors.typography.secondary.default);
  root.style.setProperty('--tabs-active-bg', systemColors.surface.base);
  root.style.setProperty('--tabs-active-border', systemColors.typography.primary.default);
  root.style.setProperty('--tabs-active-text', systemColors.typography.primary.default);
  root.style.setProperty('--tabs-hover-bg', systemColors.surface['surface-1']);

  // Tabs Spacing
  root.style.setProperty('--tabs-spacing-sm', systemSpacing.component.sm);
  root.style.setProperty('--tabs-spacing-md', systemSpacing.component.md);
  root.style.setProperty('--tabs-spacing-lg', systemSpacing.component.lg);

  // Tabs Typography
  root.style.setProperty('--tabs-font-family', systemTypography.body.base.fontFamily);
  root.style.setProperty('--tabs-font-size', systemTypography.body.base.fontSize);
  root.style.setProperty('--tabs-font-weight', systemTypography.body.base.fontWeight);
};

// Initialize token variables when module loads (if in browser)
if (typeof window !== 'undefined') {
  injectTokenVariables();
}

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  /**
   * Array of tab objects with id, label, and content
   */
  tabs: Tab[];
  
  /**
   * Default active tab ID
   */
  defaultActiveTab?: string;
  
  /**
   * Callback when tab changes
   */
  onTabChange?: (tabId: string) => void;
  
  /**
   * Additional CSS class name
   */
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActiveTab,
  onTabChange,
  className = '',
}) => {
  // Ensure token variables are injected
  useEffect(() => {
    injectTokenVariables();
  }, []);

  const [activeTab, setActiveTab] = React.useState<string>(
    defaultActiveTab || tabs[0]?.id || ''
  );

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  if (tabs.length === 0) {
    return null;
  }

  return (
    <div className={`tabs ${className}`}>
      <div className="tabs__header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tabs__tab ${activeTab === tab.id ? 'tabs__tab--active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className="tabs__content"
        role="tabpanel"
        id={`tabpanel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
      >
        {activeTabContent}
      </div>
    </div>
  );
};
