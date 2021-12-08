import React, {ComponentPropsWithoutRef} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import EzNavigation from './EzNavigation';

export default {
  title: 'EzNavigation',
  component: EzNavigation,
} as ComponentMeta<typeof EzNavigation>;

// eslint-disable-next-line
const Link = (props: ComponentPropsWithoutRef<'a'>) => <a {...props} />;

export const Basic: ComponentStory<typeof EzNavigation> = () => {
  return (
    <EzNavigation
      home={{label: 'Home', to: '/', as: Link}}
      links={[]}
      userMenu={{
        name: 'Senor de la Fraise',
        links: [
          {
            label: 'Sign out',
            to: '/sign-out',
            as: Link,
          },
        ],
      }}
    />
  );
};
