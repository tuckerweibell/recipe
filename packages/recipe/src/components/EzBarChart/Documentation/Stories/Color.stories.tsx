import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzBarChart from '../../EzBarChart';
import DefaultMeta, {Default} from './Default.stories';
import {EzCard} from '../../../EzCard';
import EzLayout from '../../../EzLayout';

const sourceCode = (barColor: string) =>
  dedent`
    ${'    '}<EzCard title="With bar color ${barColor}">
    ${'      '}<EzBarChart
    ${'        '}barColor="${barColor}"
    ${'        '}data={DATA}
    ${'        '}description="A bar chart for total spend over the last 12 months."
    ${'        '}title="Total spend over the last 12 months."
    ${'      '}/>
    ${'    '}</EzCard>
  `;

const playroomCode = (barColor: string) =>
  dedent`
    {(() => {
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
        <EzCard title="With bar color ${barColor}">
          <EzBarChart
            barColor="${barColor}"
            data={DATA}
            description="A bar chart for total spend over the last 12 months."
            title="Total spend over the last 12 months."
          />
        </EzCard>
      );
    })()}
  `;

const meta: Meta<typeof EzBarChart> = {
  title: 'Data Display/EzBarChart/Color',
  component: EzBarChart,
  argTypes: DefaultMeta.argTypes,
};

export default meta;
type Story = StoryObj<typeof EzBarChart>;

export const PrimaryColor: Story = {
  args: {
    ...Default.args,
    barColor: 'primary',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
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
            <>
              <EzCard title="With bar color primary">
                <EzBarChart
                  barColor="primary"
                  data={DATA}
                  description="A bar chart for total spend over the last 12 months."
                  title="Total spend over the last 12 months."
                />
              </EzCard>
        `,
      },
    },
    playroom: {code: playroomCode('primary')},
  },
  render: args => (
    <EzLayout style={{width: '400px'}}>
      <EzCard title={`With bar color ${args.barColor}`}>
        <EzBarChart {...args} />
      </EzCard>
    </EzLayout>
  ),
};

export const SecondaryColor: Story = {
  args: {
    ...Default.args,
    barColor: 'secondary',
  },
  parameters: {
    docs: {source: {code: sourceCode('secondary')}},
    playroom: {code: playroomCode('secondary')},
  },
  render: PrimaryColor.render,
};

export const NeutralColor: Story = {
  args: {
    ...Default.args,
    barColor: 'neutral',
  },
  parameters: {
    docs: {source: {code: sourceCode('neutral')}},
    playroom: {code: playroomCode('neutral')},
  },
  render: PrimaryColor.render,
};

export const CommonColor: Story = {
  args: {
    ...Default.args,
    barColor: 'common.purple100',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          ${'    '}<EzCard title="With bar color primary">
          ${'      '}<EzBarChart
          ${'        '}barColor="primary"
          ${'        '}data={DATA}
          ${'        '}description="A bar chart for total spend over the last 12 months."
          ${'        '}title="Total spend over the last 12 months."
          ${'      '}/>
          ${'    '}</EzCard>
          ${'  '}</>
          );
        `,
      },
    },
    playroom: {code: playroomCode('common.purple100')},
  },
  render: PrimaryColor.render,
};
