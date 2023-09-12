import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import {EzCard} from '../../EzCard';
import {EzPage, EzPageSection} from '../../EzPage';
import EzButton from '../../EzButton';
import EzLayout from '../../EzLayout';
import EzLogo from '../../EzLogo';
import EzNavigation from '../../EzNavigation';
import EzPageHeader from '../../EzPageHeader';

const RenderedChildrenJSX = (
  <EzNavigation
    home={{
      href: '#',
      label: 'Homepage',
      logo: {component: <EzLogo />},
    }}
    links={[
      {href: '#', label: 'Orders'},
      {href: '#', label: 'Customers'},
      {href: '#', label: 'Reports'},
    ]}
  >
    <EzPageHeader
      title="Reviews"
      actions={
        <EzLayout
          layout={{
            base: 'stack',
            medium: 'basic',
          }}
          className="responsive"
        >
          <EzButton>Change store or group</EzButton>
        </EzLayout>
      }
    />

    <EzPage>
      <EzPageSection use="aside">
        <EzCard title="Card (in aside)">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus,
            in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus,
            in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
          </p>
        </EzCard>
      </EzPageSection>
      <EzPageSection use="main">
        <EzCard title="Card (in main)">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices finibus purus,
            in maximus diam molestie nec. Aenean maximus eget lacus sed lobortis.
          </p>
        </EzCard>
      </EzPageSection>
    </EzPage>
  </EzNavigation>
);

const RenderedChildren = () => RenderedChildrenJSX;

export const RenderedChildrenCode = reactElementToJSXString(RenderedChildrenJSX);

export default RenderedChildren;
