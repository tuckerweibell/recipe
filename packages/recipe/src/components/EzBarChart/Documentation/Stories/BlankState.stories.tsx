import React, {useState} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {userEvent, within} from '@storybook/testing-library';
import {expect} from '@storybook/jest';
import dedent from 'ts-dedent';
import {EzCard} from '../../../EzCard';
import EzBarChart from '../../EzBarChart';
import EzLayout from '../../../EzLayout';
import DefaultMeta, {Default} from './Default.stories';
import EzButton from '../../../EzButton';
import EzBlankState from '../../../EzBlankState';

const meta: Meta<typeof EzBarChart> = {
  argTypes: DefaultMeta.argTypes,
  component: EzBarChart,
  title: 'Data Display/EzBarChart/Blank State',
};

export default meta;
type Story = StoryObj<typeof EzBarChart>;

const DATA = [
  {x: 'Jan', y: 100000},
  {x: 'Feb', y: 120000},
  {x: 'Mar', y: 145000},
  {x: 'Apr', y: 140000},
  {x: 'May', y: 180000},
  {x: 'Jun', y: 145000},
  {x: 'Jul', y: 200000},
  {x: 'Aug', y: 180000},
  {x: 'Sep', y: 200000},
  {x: 'Oct', y: 140000},
  {x: 'Nov', y: 170000},
  {x: 'Dec', y: 180000},
];

const BlankStateCode = dedent`
  const [data, setData] = React.useState([]);

  const DATA = [
    {x: 'Jan', y: 100000},
    {x: 'Feb', y: 120000},
    {x: 'Mar', y: 145000},
    {x: 'Apr', y: 140000},
    {x: 'May', y: 180000},
    {x: 'Jun', y: 145000},
    {x: 'Jul', y: 200000},
    {x: 'Aug', y: 180000},
    {x: 'Sep', y: 200000},
    {x: 'Oct', y: 140000},
    {x: 'Nov', y: 170000},
    {x: 'Dec', y: 180000},
  ];

  return (
    <EzCard
      actions={
        <EzButton onClick={() => setData(data.length === 0 ? DATA : [])}>Toggle Data</EzButton>
      }
      title="With blank state"
    >
      {data.length === 0 ? (
        <EzBlankState
          title="No data available"
          message="We may not have enough information yet."
        />
      ) : (
        <EzBarChart
          data={data}
          description="A bar chart for total spend over the last 12 months."
          title="Total spend over the last 12 months."
        />
      )}
    </EzCard>
  );
`;

export const BlankState: Story = {
  args: {
    ...Default.args,
    data: [],
  },
  parameters: {
    docs: {
      source: {
        code: BlankStateCode,
      },
    },
    playroom: {
      code: dedent`
        {(() => {
          ${BlankStateCode}
        })()}
      `,
    },
  },
  play: ({canvasElement}) => {
    const canvas = within(canvasElement);
    const firstButton = canvas.getAllByRole('button', {name: /Toggle Data/i})[0];
    const secondButton = canvas.getAllByRole('button', {name: /Toggle Data/i})[1];
    expect(canvas.getAllByText('No data available')[0]).toBeInTheDocument();
    expect(canvas.queryByText('Jan')).not.toBeInTheDocument();
    userEvent.click(firstButton);
    if (secondButton) userEvent.click(secondButton);
    expect(canvas.queryByText('No data available')).not.toBeInTheDocument();
    expect(canvas.getAllByText('Jan')[0]).toBeInTheDocument();
    userEvent.click(firstButton);
    if (secondButton) userEvent.click(secondButton);
  },
  render: function BlankStateRender(args) {
    const [data, setData] = useState([]);
    return (
      <EzLayout>
        <EzCard
          actions={
            <EzButton onClick={() => setData(data.length === 0 ? DATA : [])}>Toggle Data</EzButton>
          }
          title="With blank state"
        >
          {data.length === 0 ? (
            <EzBlankState
              title="No data available"
              message="We may not have enough information yet."
            />
          ) : (
            <EzBarChart {...args} data={data} />
          )}
        </EzCard>
      </EzLayout>
    );
  },
};
