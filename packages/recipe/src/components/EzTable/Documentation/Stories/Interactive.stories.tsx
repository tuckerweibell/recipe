import React, {type MouseEvent} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import dedent from 'ts-dedent';
import {getItems} from '../EzTableExample';
import DefaultMeta from './Default.stories';
import EzIcon from '../../../EzIcon';
import EzLink from '../../../EzLink';
import EzTable from '../../EzTable';
import EzTextStyle from '../../../EzTextStyle';
import EzTooltip from '../../../EzTooltip';

const meta: Meta<typeof EzTable> = {
  argTypes: DefaultMeta.argTypes,
  component: EzTable,
  excludeStories: /.*Example$/,
  title: 'Data Display/EzTable/Interactive',
};

export default meta;
type Story = StoryObj<typeof EzTable>;

const EzTableInteractiveCellExample = () => {
  const handleClick = (event: MouseEvent, store: string) => {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    alert(`The cell link was clicked for ${store}`);
  };

  const StoreName = ({item: {store, id}}) => (
    <div>
      <EzLink>
        <a href="/" onClick={event => handleClick(event, store)}>
          {store}
        </a>
      </EzLink>
      <div>
        <EzTextStyle use="subdued">{id}</EzTextStyle>
      </div>
    </div>
  );

  return (
    <EzTable
      title="All Stores"
      columns={[
        {heading: 'Store name', key: 'store', component: StoreName},
        {
          heading: 'Total sales',
          key: 'total',
          icon: (
            <EzTooltip message="Gross sales in the last 12 months">
              <EzIcon icon={faCircleInfo} size="inherit" />
            </EzTooltip>
          ),
          numeric: true,
        },
        {heading: 'Average order value', key: 'average', numeric: true},
      ]}
      items={getItems(['average', 'store', 'total'])}
    />
  );
};

const EzTableInteractiveCellExampleJSX = dedent`
  const {faCircleInfo} = require('@fortawesome/free-solid-svg-icons/faCircleInfo');

  const handleClick = (event, store) => {
    event.preventDefault();
    alert(\`The cell link was clicked for $\{store}\`);
  };

  // declare any component to define your custom column template
  const StoreName = ({item: {store, id}}) => (
    <div>
      <EzLink>
        <a href="/" onClick={event => handleClick(event, store)}>{store}</a>
      </EzLink>
      <div>
        <EzTextStyle use="subdued">{id}</EzTextStyle>
      </div>
    </div>
  );

  return (
    <EzTable
      title="All Stores"
      columns={[
        {heading: 'Store name', key: 'store', component: StoreName},
        {
          heading: 'Total sales',
          key: 'total',
          icon: (
            <EzTooltip message="Gross sales in the last 12 months">
              <EzIcon icon={faCircleInfo} size="inherit" />
            </EzTooltip>
          ),
          numeric: true,
        },
        {heading: 'Average order value', key: 'average', numeric: true},
      ]}
      items={[
        {id: '#001', store: 'Ten Forward', total: 23267, average: 327.79},
        {id: '#002', store: "Sisko's Creole Kitchen", total: 22788, average: 367.55},
        {id: '#003', store: "Quark's Bar", total: 12392, average: 210.21},
      ]}
    />
  );
`;

const EzTableInteractiveRowExample = () => {
  const handleClick = (event: MouseEvent, store: string) => {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    alert(`The row was clicked for ${store}`);
  };

  const StoreName = ({item: {store, id}, linkRef}) => (
    <div>
      <EzLink>
        <a href="/" onClick={event => handleClick(event, store)} ref={linkRef}>
          {store}
        </a>
      </EzLink>
      <div>
        <EzTextStyle use="subdued">{id}</EzTextStyle>
      </div>
    </div>
  );

  return (
    <EzTable
      title="All Stores"
      columns={[
        {heading: 'Store name', key: 'store', component: StoreName},
        {
          heading: 'Total sales',
          key: 'total',
          icon: (
            <EzTooltip message="Gross sales in the last 12 months">
              <EzIcon icon={faCircleInfo} size="inherit" />
            </EzTooltip>
          ),
          numeric: true,
        },
        {heading: 'Average order value', key: 'average', numeric: true},
      ]}
      items={getItems(['average', 'store', 'total'])}
    />
  );
};

const EzTableInteractiveRowExampleJSX = dedent`
  const {faCircleInfo} = require('@fortawesome/free-solid-svg-icons/faCircleInfo');

  const handleClick = (event, store) => {
    event.preventDefault();
    alert(\`The row was clicked for $\{store}\`);
  };

  // declare any component to define your custom column template
  const StoreName = ({item: {store, id}, linkRef}) => (
    <div>
      <EzLink>
        <a href="/" onClick={event => handleClick(event, store)} ref={linkRef}>
          {store}
        </a>
      </EzLink>
      <div>
        <EzTextStyle use="subdued">{id}</EzTextStyle>
      </div>
    </div>
  );

  return (
    <EzTable
      title="All Stores"
      columns={[
        {heading: 'Store name', key: 'store', component: StoreName},
        {
          heading: 'Total sales',
          key: 'total',
          icon: (
            <EzTooltip message="Gross sales in the last 12 months">
              <EzIcon icon={faCircleInfo} size="inherit" />
            </EzTooltip>
          ),
          numeric: true,
        },
        {heading: 'Average order value', key: 'average', numeric: true},
      ]}
      items={[
        {id: '#001', store: 'Ten Forward', total: 23267, average: 327.79},
        {id: '#002', store: "Sisko's Creole Kitchen", total: 22788, average: 367.55},
        {id: '#003', store: "Quark's Bar", total: 12392, average: 210.21},
      ]}
    />
  );
`;

export const InteractiveCell: Story = {
  args: {},
  parameters: {
    docs: {source: {code: EzTableInteractiveCellExampleJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${EzTableInteractiveCellExampleJSX}
        })()}
      `,
    },
  },
  render: EzTableInteractiveCellExample,
};

export const InteractiveRow: Story = {
  args: {},
  parameters: {
    docs: {source: {code: EzTableInteractiveRowExampleJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${EzTableInteractiveRowExampleJSX}
        })()}
      `,
    },
  },
  render: EzTableInteractiveRowExample,
};
