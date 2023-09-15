import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import dedent from 'ts-dedent';
import {EzNavigationExample, EzNavigationExampleJSX} from '../EzNavigationExample';
import EzIcon from '../../../EzIcon';
import EzLogo from '../../../EzLogo';
import EzNavigation, {EzNavigationProps} from '../../EzNavigation';

const meta: Meta<typeof EzNavigation> = {
  argTypes: {
    home: {
      control: {type: 'object'},
      description: 'The home link options for the navigation.',
      table: {type: {summary: 'HomeLink'}},
      type: {name: 'other', value: 'HomeLink', required: true},
    },
    links: {
      control: {type: 'array'},
      description: 'Array of links for the navigation.',
      table: {type: {summary: 'NavLink[]'}},
      type: {name: 'other', value: 'NavLink[]', required: true},
    },
    utilityLinks: {
      control: {type: 'array'},
      description: 'Array of utility links for the navigation.',
      table: {type: {summary: 'UtilityLink[]'}},
    },
    userMenu: {
      control: {type: 'object'},
      description: 'The user menu options for the navigation.',
      table: {type: {summary: 'UserMenu'}},
    },
  },
  component: EzNavigation,
  title: 'Navigation/EzNavigation',
};

export default meta;
type Story = StoryObj<typeof EzNavigation>;

export const Default: Story = {
  args: {
    home: {href: '/', label: 'Homepage', logo: {component: <EzLogo />}},
    links: [
      {href: '#', label: 'Orders', notifications: 15},
      {href: '#', label: 'Customers', notifications: '★'},
      {
        label: 'Reports',
        links: [
          {href: '#', label: 'Total orders'},
          {href: '#', label: 'Financial'},
          {href: '#', label: 'Status'},
        ],
      },
    ],
    utilityLinks: [
      {href: '/chat', onClick: e => e.preventDefault(), label: 'Chat'},
      {href: '/support', onClick: e => e.preventDefault(), label: '24/7 Support'},
      {
        href: '/info',
        onClick: e => e.preventDefault(),
        label: 'More Info',
        icon: <EzIcon icon={faCircleInfo} title="More info icon" />,
      },
    ],
    userMenu: {
      links: [
        {href: '#', label: 'Settings', onClick: event => event.preventDefault()},
        {href: '#', label: 'Sign out', onClick: event => event.preventDefault()},
      ],
      name: 'Settings',
    },
  },
  parameters: {
    playroom: {
      code: dedent`
        {(() => {
          ${EzNavigationExampleJSX()}
        })()}
      `,
    },
  },
  render: (args: EzNavigationProps) => EzNavigationExample(args),
};
