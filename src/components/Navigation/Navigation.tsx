import React, { useEffect, useState } from 'react';
import { 
  ChevronDown, 
  Bell, 
  Lightning, 
  Gear 
} from 'react-bootstrap-icons';
import { designTokens } from '../../tokens';
import './Navigation.css';

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

  // Navigation Background Colors
  root.style.setProperty('--nav-bg-primary', systemColors.surface['surface-12']);
  root.style.setProperty('--nav-bg-secondary', systemColors.surface['surface-11']);
  root.style.setProperty('--nav-bg-active', systemColors.surface['surface-9']);
  root.style.setProperty('--nav-bg-hover', systemColors.surface['surface-10']);

  // Navigation Text Colors
  root.style.setProperty('--nav-text-primary', systemColors.typography.inverse.default);
  root.style.setProperty('--nav-text-secondary', systemColors.typography.inverse.muted);
  root.style.setProperty('--nav-text-active', systemColors.typography.inverse.default);
  root.style.setProperty('--nav-text-disabled', systemColors.typography.primary.disabled);

  // Navigation Accent Colors
  root.style.setProperty('--nav-accent-active', '#10b981'); // Green for active app icon
  root.style.setProperty('--nav-badge-info', '#3b82f6'); // Blue for Meta badge
  root.style.setProperty('--nav-badge-secondary', systemColors.surface['surface-3']);
  root.style.setProperty('--nav-badge-text', systemColors.typography.primary.default);
  root.style.setProperty('--nav-notification-badge', systemColors.semantic.error.default);

  // Navigation Spacing
  root.style.setProperty('--nav-spacing-xs', systemSpacing.component.xs);
  root.style.setProperty('--nav-spacing-sm', systemSpacing.component.sm);
  root.style.setProperty('--nav-spacing-md', systemSpacing.component.md);
  root.style.setProperty('--nav-spacing-lg', systemSpacing.component.lg);
  root.style.setProperty('--nav-spacing-xl', systemSpacing.component.xl);
  root.style.setProperty('--nav-spacing-section', systemSpacing.layout.md);

  // Navigation Typography
  root.style.setProperty('--nav-font-family', systemTypography.body.base.fontFamily);
  root.style.setProperty('--nav-font-size-header', systemTypography.heading.h4.fontSize);
  root.style.setProperty('--nav-font-weight-header', systemTypography.heading.h4.fontWeight);
  root.style.setProperty('--nav-font-size-section', systemTypography.body.large.fontSize);
  root.style.setProperty('--nav-font-weight-section', systemTypography.body.large.fontWeight);
  root.style.setProperty('--nav-font-size-item', systemTypography.body.base.fontSize);
  root.style.setProperty('--nav-font-weight-item', systemTypography.body.base.fontWeight);
  root.style.setProperty('--nav-font-size-badge', systemTypography.label.small.fontSize);
};

// Initialize token variables when module loads (if in browser)
if (typeof window !== 'undefined') {
  injectTokenVariables();
}

export interface NavigationBadge {
  label: string;
  variant?: 'info' | 'secondary';
}

export interface NavigationItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: NavigationBadge;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

export interface NavigationSection {
  id: string;
  title?: string;
  items: NavigationItem[];
  collapsible?: boolean;
  defaultExpanded?: boolean;
}

export interface App {
  id: string;
  name: string;
  icon?: React.ReactNode;
  active?: boolean;
}

export interface NavigationProps {
  /**
   * Application name displayed in header
   */
  appName: string;
  
  /**
   * Workspace/Account identifier (e.g., "WW")
   */
  workspaceLabel?: string;
  
  /**
   * List of available applications for the app switcher
   */
  apps?: App[];
  
  /**
   * Currently active application
   */
  activeApp?: string;
  
  /**
   * Navigation sections
   */
  sections: NavigationSection[];
  
  /**
   * Currently active navigation item ID
   */
  activeItemId?: string;
  
  /**
   * Notification count for bell icon
   */
  notificationCount?: number;
  
  /**
   * Callback when app is selected
   */
  onAppSelect?: (appId: string) => void;
  
  /**
   * Callback when navigation item is clicked
   */
  onItemClick?: (itemId: string) => void;
  
  /**
   * Callback when workspace switcher is clicked
   */
  onWorkspaceClick?: () => void;
  
  /**
   * Additional CSS class name
   */
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  appName,
  workspaceLabel = 'WW',
  apps = [],
  activeApp,
  sections,
  activeItemId,
  notificationCount,
  onAppSelect,
  onItemClick,
  onWorkspaceClick,
  className = '',
}) => {
  // Ensure token variables are injected
  useEffect(() => {
    injectTokenVariables();
  }, []);

  // Track expanded/collapsed state for collapsible sections
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(sections.filter(s => s.defaultExpanded !== false && s.collapsible).map(s => s.id))
  );

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  };

  const handleAppClick = (appId: string) => {
    if (onAppSelect) {
      onAppSelect(appId);
    }
  };

  const handleItemClick = (item: NavigationItem) => {
    if (item.onClick) {
      item.onClick();
    }
    if (onItemClick) {
      onItemClick(item.id);
    }
  };

  return (
    <nav className={`navigation ${className}`}>
      {/* Left Sidebar - App Switcher */}
      <div className="navigation__sidebar">
        {/* Workspace Switcher */}
        <div className="navigation__workspace" onClick={onWorkspaceClick}>
          <div className="navigation__workspace-avatar">{workspaceLabel}</div>
          <ChevronDown size={12} />
        </div>

        {/* App List */}
        <div className="navigation__apps">
          {apps.map((app) => (
            <button
              key={app.id}
              className={`navigation__app ${app.active || app.id === activeApp ? 'navigation__app--active' : ''}`}
              onClick={() => handleAppClick(app.id)}
              aria-label={app.name}
              title={app.name}
            >
              {app.icon && <span className="navigation__app-icon">{app.icon}</span>}
              <span className="navigation__app-label">{app.name}</span>
            </button>
          ))}
        </div>

        {/* Utility Icons */}
        <div className="navigation__utilities">
          <button className="navigation__utility" aria-label="Notifications">
            <Bell size={20} />
            {notificationCount !== undefined && notificationCount > 0 && (
              <span className="navigation__badge navigation__badge--notification">
                {notificationCount > 99 ? '+99' : notificationCount}
              </span>
            )}
          </button>
          <button className="navigation__utility" aria-label="Quick Actions">
            <Lightning size={20} />
          </button>
          <button className="navigation__utility" aria-label="Settings">
            <Gear size={20} />
          </button>
        </div>
      </div>

      {/* Right Main Navigation */}
      <div className="navigation__main">
        {/* Header */}
        <div className="navigation__header">
          <h1 className="navigation__title">{appName}</h1>
        </div>

        {/* Navigation Sections */}
        <div className="navigation__sections">
          {sections.map((section) => {
            const isExpanded = !section.collapsible || expandedSections.has(section.id);
            const hasTitle = !!section.title;

            return (
              <div key={section.id} className="navigation__section">
                {hasTitle && (
                  <button
                    className={`navigation__section-title ${section.collapsible ? 'navigation__section-title--collapsible' : ''}`}
                    onClick={() => section.collapsible && toggleSection(section.id)}
                    disabled={!section.collapsible}
                  >
                    <span>{section.title}</span>
                    {section.collapsible && (
                      <ChevronDown 
                        size={12} 
                        className={`navigation__chevron ${isExpanded ? 'navigation__chevron--expanded' : ''}`}
                      />
                    )}
                  </button>
                )}

                {isExpanded && (
                  <div className="navigation__items">
                    {section.items.map((item) => {
                      const isActive = item.active || item.id === activeItemId;
                      return (
                        <a
                          key={item.id}
                          href={item.href || '#'}
                          className={`navigation__item ${isActive ? 'navigation__item--active' : ''} ${hasTitle ? 'navigation__item--indented' : ''}`}
                          onClick={(e) => {
                            if (item.href === '#') {
                              e.preventDefault();
                            }
                            handleItemClick(item);
                          }}
                        >
                          {item.icon && <span className="navigation__item-icon">{item.icon}</span>}
                          <span className="navigation__item-label">{item.label}</span>
                          {item.badge && (
                            <span className={`navigation__badge navigation__badge--${item.badge.variant || 'secondary'}`}>
                              {item.badge.label}
                            </span>
                          )}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
