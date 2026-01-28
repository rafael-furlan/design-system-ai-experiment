import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Navigation } from '../components/Navigation';
import { Tabs } from '../components/Tabs';
import { RecipientSelector } from '../components/Wizard/steps';
import { MultiRecipientSelector } from '../components/Wizard';
import { 
  House, 
  BarChart, 
  Gear, 
  People, 
  Wallet2, 
  FileText,
  Search,
  Wifi,
  Gift,
  Box,
  Star,
  Lightning
} from 'react-bootstrap-icons';
import './ComponentShowcase.css';

const StarIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// Custom app icons
const ShopifyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#10b981" />
    <path
      d="M16 8C12.69 8 10 10.69 10 14C10 17.31 12.69 20 16 20C19.31 20 22 17.31 22 14C22 10.69 19.31 8 16 8Z"
      fill="white"
    />
  </svg>
);

const MetaIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 8C12.69 8 10 10.69 10 14C10 17.31 12.69 20 16 20C19.31 20 22 17.31 22 14C22 10.69 19.31 8 16 8Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

export const ComponentShowcase: React.FC = () => {
  const [clickedButton, setClickedButton] = useState<string>('');

  const handleClick = (label: string) => {
    setClickedButton(label);
    setTimeout(() => setClickedButton(''), 1000);
  };

  const tabs = [
    {
      id: 'button',
      label: 'Button',
      content: (
        <div className="showcase-content">
          <div className="showcase-section">
            <h2>Primary Buttons</h2>
            <div className="showcase-group">
              <Button variant="primary" onClick={() => handleClick('Primary Default')}>
                Button
              </Button>
              <Button variant="primary" state="hover" onClick={() => handleClick('Primary Hover')}>
                Button
              </Button>
              <Button variant="primary" state="disabled">Button</Button>
              <Button variant="primary" loading>Button</Button>
              <Button variant="primary" state="focus" onClick={() => handleClick('Primary Focus')}>
                Button
              </Button>
            </div>
          </div>

          <div className="showcase-section">
            <h2>Secondary Buttons</h2>
            <div className="showcase-group">
              <Button variant="secondary" onClick={() => handleClick('Secondary Default')}>
                Button
              </Button>
              <Button variant="secondary" state="hover" onClick={() => handleClick('Secondary Hover')}>
                Button
              </Button>
              <Button variant="secondary" state="disabled">Button</Button>
              <Button variant="secondary" loading>Button</Button>
              <Button variant="secondary" state="focus" onClick={() => handleClick('Secondary Focus')}>
                Button
              </Button>
            </div>
          </div>

          <div className="showcase-section">
            <h2>Tertiary Buttons</h2>
            <div className="showcase-group">
              <Button variant="tertiary" onClick={() => handleClick('Tertiary Default')}>
                Button
              </Button>
              <Button variant="tertiary" state="hover" onClick={() => handleClick('Tertiary Hover')}>
                Button
              </Button>
              <Button variant="tertiary" state="disabled">Button</Button>
              <Button variant="tertiary" loading>Button</Button>
              <Button variant="tertiary" state="focus" onClick={() => handleClick('Tertiary Focus')}>
                Button
              </Button>
            </div>
          </div>

          <div className="showcase-section">
            <h2>Button Sizes</h2>
            <div className="showcase-group">
              <Button variant="primary" size="small" onClick={() => handleClick('Small')}>
                Small
              </Button>
              <Button variant="primary" size="medium" onClick={() => handleClick('Medium')}>
                Medium
              </Button>
              <Button variant="primary" size="large" onClick={() => handleClick('Large')}>
                Large
              </Button>
            </div>
          </div>

          <div className="showcase-section">
            <h2>Icon-only Buttons</h2>
            <div className="showcase-group">
              <Button
                variant="primary"
                iconOnly
                size="large"
                icon={<StarIcon size={20} />}
                onClick={() => handleClick('Icon Large')}
              />
              <Button
                variant="primary"
                iconOnly
                size="medium"
                icon={<StarIcon size={16} />}
                onClick={() => handleClick('Icon Medium')}
              />
              <Button
                variant="primary"
                iconOnly
                size="small"
                icon={<StarIcon size={14} />}
                onClick={() => handleClick('Icon Small')}
              />
            </div>
          </div>

          <div className="showcase-section">
            <h2>Buttons with Icons</h2>
            <div className="showcase-group">
              <Button variant="primary" icon={<StarIcon size={16} />} onClick={() => handleClick('With Icon')}>
                Button
              </Button>
              <Button variant="secondary" icon={<StarIcon size={16} />} onClick={() => handleClick('Secondary with Icon')}>
                Button
              </Button>
              <Button variant="tertiary" icon={<StarIcon size={16} />} onClick={() => handleClick('Tertiary with Icon')}>
                Button
              </Button>
            </div>
          </div>

          {clickedButton && (
            <div className="click-feedback">
              Clicked: <strong>{clickedButton}</strong>
            </div>
          )}
        </div>
      ),
    },
    {
      id: 'navigation',
      label: 'Navigation',
      content: (
        <div className="showcase-content">
          <div className="showcase-section">
            <h2>Full Navigation Example</h2>
            <div className="navigation-showcase">
              <Navigation
                appName="Shopify Influencer Hub"
                workspaceLabel="WW"
                activeApp="shopify"
                notificationCount={99}
                apps={[
                  {
                    id: 'shopify',
                    name: 'Shopify',
                    icon: <ShopifyIcon />,
                    active: true,
                  },
                  {
                    id: 'meta',
                    name: 'Meta Ads',
                    icon: <MetaIcon />,
                  },
                ]}
                sections={[
                  {
                    id: 'main',
                    items: [
                      { id: 'home', label: 'Home', icon: <House size={20} /> },
                      { id: 'insights', label: 'Insights', icon: <BarChart size={20} /> },
                      { id: 'automations', label: 'Automations', icon: <Gear size={20} /> },
                      { id: 'superfiliates', label: 'Superfiliates', icon: <People size={20} /> },
                      { id: 'payments', label: 'Payments', icon: <Wallet2 size={20} /> },
                      {
                        id: 'content-rights',
                        label: 'Content Rights',
                        icon: <FileText size={20} />,
                        badge: { label: 'Meta', variant: 'info' },
                      },
                    ],
                  },
                  {
                    id: 'social-discovery',
                    title: 'Social Discovery',
                    items: [
                      { id: 'instagram-discovery', label: 'Instagram Discovery', icon: <Search size={20} /> },
                      { id: 'social-listening', label: 'Social Listening', icon: <Wifi size={20} /> },
                    ],
                  },
                  {
                    id: 'campaign-management',
                    title: 'Campaign Management',
                    items: [
                      { id: 'superbrief', label: 'SuperBrief', icon: <FileText size={20} /> },
                      { id: 'gifting', label: 'Gifting', icon: <Gift size={20} /> },
                    ],
                  },
                  {
                    id: 'program-management',
                    title: 'Program Management',
                    collapsible: true,
                    defaultExpanded: true,
                    items: [
                      { id: 'super-boring-creators', label: 'Super Boring Creators', active: true },
                      { id: 'sign-up-requests', label: 'Sign-up requests' },
                      { id: 'experiences', label: 'Experiences' },
                      { id: 'promotions', label: 'Promotions' },
                      { id: 'settings', label: 'Settings' },
                    ],
                  },
                  {
                    id: 'catalog',
                    title: 'Catalog',
                    items: [
                      { id: 'product-management', label: 'Product Management', icon: <Box size={20} /> },
                    ],
                  },
                ]}
                activeItemId="super-boring-creators"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'recipient-selector',
      label: 'Recipient Selector',
      content: (
        <div className="showcase-content">
          <div className="showcase-section">
            <h2>All States</h2>
            <div className="showcase-group" style={{ flexDirection: 'column', alignItems: 'stretch', maxWidth: '400px' }}>
              <RecipientSelector
                state="default"
                label="To"
                helperText="Select who will receive"
              />
              <RecipientSelector
                state="active"
                label="To"
                helperText="Select who will receive"
              />
              <RecipientSelector
                state="success"
                label="To"
                helperText="Select who will receive"
              />
              <RecipientSelector
                state="loading"
                label="To"
                helperText="Select who will receive"
                badgeText="Importing list"
              />
            </div>
          </div>

          <div className="showcase-section">
            <h2>Interactive Examples</h2>
            <div className="showcase-group" style={{ flexDirection: 'column', alignItems: 'stretch', maxWidth: '400px' }}>
              <RecipientSelector
                state="default"
                label="To"
                helperText="Select who will receive"
                onClick={() => alert('Recipient selector clicked!')}
              />
              <RecipientSelector
                state="default"
                label="CC"
                helperText="Select who will be copied"
                onClick={() => alert('CC selector clicked!')}
              />
              <RecipientSelector
                state="default"
                label="BCC"
                helperText="Select who will be blind copied"
                onClick={() => alert('BCC selector clicked!')}
              />
            </div>
          </div>

          <div className="showcase-section">
            <h2>Multi Recipient Selector</h2>
            <div className="showcase-group" style={{ flexDirection: 'column', gap: '2rem', alignItems: 'stretch' }}>
              <div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>Four Recipients (Default)</h3>
                <MultiRecipientSelector
                  recipients={[
                    {
                      id: 'to',
                      state: 'default',
                      label: 'To',
                      helperText: 'Select who will receive',
                    },
                    {
                      id: 'cc',
                      state: 'default',
                      label: 'CC',
                      helperText: 'Select who will receive',
                    },
                    {
                      id: 'bcc',
                      state: 'default',
                      label: 'BCC',
                      helperText: 'Select who will receive',
                    },
                    {
                      id: 'reply-to',
                      state: 'default',
                      label: 'Reply To',
                      helperText: 'Select who will receive',
                    },
                  ]}
                  showSeparators={true}
                />
              </div>

              <div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>With Different States</h3>
                <MultiRecipientSelector
                  recipients={[
                    {
                      id: 'to',
                      state: 'active',
                      label: 'To',
                      helperText: 'Select who will receive',
                    },
                    {
                      id: 'cc',
                      state: 'success',
                      label: 'CC',
                      helperText: 'Select who will receive',
                    },
                    {
                      id: 'bcc',
                      state: 'loading',
                      label: 'BCC',
                      helperText: 'Select who will receive',
                      badgeText: 'Importing list',
                    },
                    {
                      id: 'reply-to',
                      state: 'default',
                      label: 'Reply To',
                      helperText: 'Select who will receive',
                    },
                  ]}
                  showSeparators={true}
                />
              </div>

              <div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.125rem', fontWeight: 600 }}>All Success States</h3>
                <MultiRecipientSelector
                  recipients={[
                    {
                      id: 'to',
                      state: 'success',
                      label: 'To',
                      helperText: 'Select who will receive',
                    },
                    {
                      id: 'cc',
                      state: 'success',
                      label: 'CC',
                      helperText: 'Select who will receive',
                    },
                    {
                      id: 'bcc',
                      state: 'success',
                      label: 'BCC',
                      helperText: 'Select who will receive',
                    },
                    {
                      id: 'reply-to',
                      state: 'success',
                      label: 'Reply To',
                      helperText: 'Select who will receive',
                    },
                  ]}
                  showSeparators={true}
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'tabs',
      label: 'Tabs',
      content: (
        <div className="showcase-content">
          <div className="showcase-section">
            <h2>Tabs Component</h2>
            <Tabs
              tabs={[
                {
                  id: 'tab1',
                  label: 'Tab 1',
                  content: (
                    <div>
                      <h3>Content for Tab 1</h3>
                      <p>This is the content displayed when Tab 1 is selected.</p>
                    </div>
                  ),
                },
                {
                  id: 'tab2',
                  label: 'Tab 2',
                  content: (
                    <div>
                      <h3>Content for Tab 2</h3>
                      <p>This is the content displayed when Tab 2 is selected.</p>
                    </div>
                  ),
                },
                {
                  id: 'tab3',
                  label: 'Tab 3',
                  content: (
                    <div>
                      <h3>Content for Tab 3</h3>
                      <p>This is the content displayed when Tab 3 is selected.</p>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="component-showcase">
      <header className="showcase-header">
        <h1>Design System Components</h1>
        <p>Explore all available components in the design system</p>
      </header>
      <main className="showcase-main">
        <Tabs tabs={tabs} defaultActiveTab="button" />
      </main>
    </div>
  );
};
