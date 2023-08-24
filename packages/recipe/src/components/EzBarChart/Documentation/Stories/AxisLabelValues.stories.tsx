import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import {EzCard} from '../../../EzCard';
import EzBarChart from '../../EzBarChart';
import EzLayout from '../../../EzLayout';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzBarChart> = {
  argTypes: DefaultMeta.argTypes,
  component: EzBarChart,
  title: 'Data Display/EzBarChart/Axis Label Values',
};

export default meta;
type Story = StoryObj<typeof EzBarChart>;

const DATA = [
  {x: 1, y: 100000},
  {x: 2, y: 120000},
  {x: 3, y: 145000},
  {x: 4, y: 140000},
  {x: 5, y: 180000},
  {x: 6, y: 145000},
  {x: 7, y: 200000},
  {x: 8, y: 180000},
  {x: 9, y: 200000},
  {x: 10, y: 140000},
  {x: 11, y: 170000},
  {x: 12, y: 180000},
];

export const DependentAxisLabelValues: Story = {
  args: {
    ...Default.args,
    data: DATA,
    dependentAxisLabelValues: [0, 50000, 100000, 150000, 200000, 250000, 300000],
    independentAxisLabelFormatter: (t: number) => {
      const date = new Date();
      date.setMonth(t - 1);
      return date.toLocaleString('en-US', {month: 'short'});
    },
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          const DATA = [
            { x: 1, y: 100000 },
            { x: 2, y: 120000 },
            { x: 3, y: 145000 },
            { x: 4, y: 140000 },
            { x: 5, y: 180000 },
            { x: 6, y: 145000 },
            { x: 7, y: 200000 },
            { x: 8, y: 180000 },
            { x: 9, y: 200000 },
            { x: 10, y: 140000 },
            { x: 11, y: 170000 },
            { x: 12, y: 180000 },
          ];

          const independentAxisLabelFormatter = (t: number) => {
            const date = new Date();
            date.setMonth(t - 1);
            return date.toLocaleString('en-US', {month: 'short'});
          };
          const dependentAxisLabelValues = [0, 50000, 100000, 150000, 200000, 250000, 300000];
          const independentAxisLabelValues = [1, 4, 7, 10];

          return (
            <>
              <EzCard title="With dependent/y-axis label values">
                <EzBarChart
                  data={DATA}
                  dependentAxisLabelValues={dependentAxisLabelValues}
                  description="A bar chart for total spend over the last 12 months."
                  independentAxisLabelFormatter={independentAxisLabelFormatter}
                  title="Total spend over the last 12 months."
                />
              </EzCard>
        `,
      },
    },
    playroom: {
      code: dedent`
        {(() => {
          const DATA = [
            { x: 1, y: 100000 },
            { x: 2, y: 120000 },
            { x: 3, y: 145000 },
            { x: 4, y: 140000 },
            { x: 5, y: 180000 },
            { x: 6, y: 145000 },
            { x: 7, y: 200000 },
            { x: 8, y: 180000 },
            { x: 9, y: 200000 },
            { x: 10, y: 140000 },
            { x: 11, y: 170000 },
            { x: 12, y: 180000 },
          ];

          const independentAxisLabelFormatter = t => {
            const date = new Date();
            date.setMonth(t - 1);
            return date.toLocaleString('en-US', {month: 'short'});
          };
          const dependentAxisLabelValues = [0, 50000, 100000, 150000, 200000, 250000, 300000];
    
          return (
            <EzCard title="With dependent/y-axis label values">
              <EzBarChart
                data={DATA}
                dependentAxisLabelValues={dependentAxisLabelValues}
                description="A bar chart for total spend over the last 12 months."
                independentAxisLabelFormatter={independentAxisLabelFormatter}
                title="Total spend over the last 12 months."
              />
            </EzCard>
          );
        })()}
      `,
    },
  },
  render: args => (
    <EzLayout style={{width: '400px'}}>
      <EzCard title="With dependent/y-axis label values">
        <EzBarChart {...args} />
      </EzCard>
    </EzLayout>
  ),
};

export const IndependentAxisLabelValues: Story = {
  args: {
    ...Default.args,
    data: DATA,
    independentAxisLabelFormatter: DependentAxisLabelValues.args.independentAxisLabelFormatter,
    independentAxisLabelValues: [1, 4, 7, 10],
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
              <EzCard title="With independent/x-axis label values">
                <EzBarChart
                  data={DATA}
                  description="A bar chart for total spend over the last 12 months."
                  independentAxisLabelFormatter={independentAxisLabelFormatter}
                  independentAxisLabelValues={independentAxisLabelValues}
                  title="Total spend over the last 12 months."
                />
              </EzCard>
            </>
          );
        `,
      },
    },
    playroom: {
      code: dedent`
      {(() => {
        const DATA = [
          { x: 1, y: 100000 },
          { x: 2, y: 120000 },
          { x: 3, y: 145000 },
          { x: 4, y: 140000 },
          { x: 5, y: 180000 },
          { x: 6, y: 145000 },
          { x: 7, y: 200000 },
          { x: 8, y: 180000 },
          { x: 9, y: 200000 },
          { x: 10, y: 140000 },
          { x: 11, y: 170000 },
          { x: 12, y: 180000 },
        ];
      
        const independentAxisLabelFormatter = t => {
          const date = new Date();
          date.setMonth(t - 1);
          return date.toLocaleString('en-US', {month: 'short'});
        };
        const independentAxisLabelValues = [1, 4, 7, 10];
      
        return (
          <EzCard title="With independent/x-axis label values">
            <EzBarChart
              data={DATA}
              independentAxisLabelFormatter={independentAxisLabelFormatter}
              independentAxisLabelValues={independentAxisLabelValues}
              description="A bar chart for total spend over the last 12 months."
              title="Total spend over the last 12 months."
            />
          </EzCard>
        );
      })()}
      `,
    },
  },
  render: args => (
    <EzLayout style={{width: '400px'}}>
      <EzCard title="With independent/x-axis label values">
        <EzBarChart {...args} />
      </EzCard>
    </EzLayout>
  ),
};
