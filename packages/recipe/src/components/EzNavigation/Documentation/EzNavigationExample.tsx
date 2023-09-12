import React, {useState} from 'react';
import dedent from 'ts-dedent';
import {EzCard} from '../../EzCard';
import {EzPage} from '../../EzPage';
import EzNavigation, {type EzNavigationProps} from '../EzNavigation';

const EzNavigationExample = (args?: EzNavigationProps) => {
  const [active, setActive] = useState('Orders');

  const handleClick = (event: {preventDefault: () => void}, linkLabel: string) => {
    event.preventDefault();
    setActive(linkLabel);
  };

  const links = args.links.map(link => {
    if ((link as any).links?.length > 0)
      return {
        ...link,
        links: (link as any).links.map((sublink: any) => ({
          ...sublink,
          onClick: (event: {preventDefault: () => void}) => handleClick(event, sublink.label),
          active: sublink.label === active,
        })),
      };
    return {
      ...link,
      onClick: (event: {preventDefault: () => void}) => handleClick(event, link.label),
      active: link.label === active,
    };
  });

  return (
    <EzNavigation {...args} links={links}>
      <EzPage>
        <EzCard title={active}>Content for the {active} page.</EzCard>
      </EzPage>
    </EzNavigation>
  );
};

const EzNavigationExampleJSX = () => dedent`
  const {faCircleInfo} = require('@fortawesome/free-solid-svg-icons/faCircleInfo');

  const [active, setActive] = useState('Orders');

  const handleClick = (event, linkLabel) => {
    event.preventDefault();
    setActive(linkLabel);
  };
  
  return (
    <EzNavigation
      home={{href: '/', label: 'Homepage', logo: {src: ezCaterLogoPath, width: 100}}}
      links={[
        {
          active: active === 'Orders',
          href: '#',
          label: 'Orders',
          notifications: 15,
          onClick: event => handleClick(event, 'Orders'),
        },
        {
          active: active === 'Customers',
          href: '#',
          label: 'Customers',
          notifications: '★',
          onClick: event => handleClick(event, 'Customers'),
        },
        {
          label: 'Reports',
          links: [
            {
              active: active === 'Total orders',
              href: '#',
              label: 'Total orders',
              onClick: event => handleClick(event, 'Total orders'),
            },
            {
              active: active === 'Financial',
              href: '#',
              label: 'Financial',
              onClick: event => handleClick(event, 'Financial'),
            },
            {
              active: active === 'Status',
              href: '#',
              label: 'Status',
              onClick: event => handleClick(event, 'Status'),
            }
          ]
        }
      ]}
      userMenu={{
        icon: <EzIcon icon={faCircleInfo} size="small" title="Settings icon"/>,
        links: [
          {href: '#', label: 'Settings', onClick: () => {}},
          {href: '#', label: 'Sign out', onClick: () => {}}
        ],
        name: 'Settings'
      }}
      utilityLinks={[
        {href: '/chat', label: 'Chat', onClick: () => {}},
        {href: '/support', label: '24/7 Support', onClick: () => {}},
        {
          href: '/info',
          icon: <EzIcon icon={faCircleInfo} size="small" title="More info icon"/>,
          label: 'More Info',
          onClick: () => {}
        }
      ]}
    >
      <EzPage>
        <EzCard title={active}>
          Content for the {active} page.
        </EzCard>
      </EzPage>
    </EzNavigation>
  );
`;

export {EzNavigationExample, EzNavigationExampleJSX};
