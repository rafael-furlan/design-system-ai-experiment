import type { Meta, StoryObj } from '@storybook/react';
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
  Envelope,
  Box
} from 'react-bootstrap-icons';
import { Navigation } from './Navigation';

// Custom app icons (keeping custom SVG for brand logos)
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

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    appName: {
      control: 'text',
    },
    workspaceLabel: {
      control: 'text',
    },
    notificationCount: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

// Default Navigation
export const Default: Story = {
  args: {
    appName: 'Shopify Influencer Hub',
    workspaceLabel: 'WW',
    activeApp: 'shopify',
    notificationCount: 99,
    apps: [
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
    ],
    sections: [
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
    ],
    activeItemId: 'home',
  },
};

// Full Navigation Example
export const FullNavigation: Story = {
  args: {
    appName: 'Shopify Influencer Hub',
    workspaceLabel: 'WW',
    activeApp: 'shopify',
    notificationCount: 99,
    apps: [
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
    ],
    sections: [
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
    ],
    activeItemId: 'super-boring-creators',
  },
};

// With Collapsed Sections
export const CollapsedSections: Story = {
  args: {
    appName: 'Shopify Influencer Hub',
    workspaceLabel: 'WW',
    activeApp: 'shopify',
    apps: [
      {
        id: 'shopify',
        name: 'Shopify',
        icon: <ShopifyIcon />,
        active: true,
      },
    ],
    sections: [
      {
        id: 'main',
        items: [
          { id: 'home', label: 'Home', icon: <House size={20} />, active: true },
          { id: 'insights', label: 'Insights', icon: <BarChart size={20} /> },
        ],
      },
      {
        id: 'program-management',
        title: 'Program Management',
        collapsible: true,
        defaultExpanded: false,
        items: [
          { id: 'super-boring-creators', label: 'Super Boring Creators' },
          { id: 'sign-up-requests', label: 'Sign-up requests' },
        ],
      },
    ],
    activeItemId: 'home',
  },
};

// With Badges
export const WithBadges: Story = {
  args: {
    appName: 'Shopify Influencer Hub',
    workspaceLabel: 'WW',
    activeApp: 'shopify',
    apps: [
      {
        id: 'shopify',
        name: 'Shopify',
        icon: <ShopifyIcon />,
        active: true,
      },
    ],
    sections: [
      {
        id: 'main',
        items: [
          {
            id: 'content-rights',
            label: 'Content Rights',
            icon: <FileText size={20} />,
            badge: { label: 'Meta', variant: 'info' },
          },
          {
            id: 'insights',
            label: 'Insights',
            icon: <BarChart size={20} />,
            badge: { label: 'Beta', variant: 'secondary' },
          },
        ],
      },
    ],
  },
};
