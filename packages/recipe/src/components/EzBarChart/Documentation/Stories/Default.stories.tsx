import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import {EzCard} from '../../../EzCard';
import EzBarChart from '../../EzBarChart';
import EzHeading from '../../../EzHeading';

const meta: Meta<typeof EzBarChart> = {
  argTypes: {
    barColor: {
      control: {type: 'select'},
      description:
        'The color of the bars in the bar chart. Supports theme palette properties and colors.',
      options: ['primary', 'secondary', 'neutral', 'common.purple100'],
      table: {
        defaultValue: {summary: 'primary'},
        type: {summary: 'EzThemeColors'},
      },
    },
    data: {
      description:
        'Array of data with `x` and `y` values of type `string`, `number`, `string[]`, or `function`.',
      table: {type: {summary: 'Datum[]'}},
      type: {name: 'other', required: true, value: 'Datum[]'},
    },
    dependentAxisLabelFormatter: {
      control: {type: 'func'},
      description: 'The function to format the dependent axis points.',
      table: {type: {summary: '(t: AxisLabelValue) => void'}},
    },
    dependentAxisLabelValues: {
      control: {type: 'array'},
      description: 'Array of axis label values to customize the dependent axis labels.',
      table: {type: {summary: 'AxisLabelValue[]'}},
    },
    description: {
      description: 'Detailed accessible description for the chart.',
      table: {type: {summary: 'string'}},
      type: {name: 'string', required: true},
    },
    idPrefix: {
      control: {type: 'text'},
      description: 'Deterministic id for the chart.',
      table: {type: {summary: 'string'}},
      type: {name: 'string'},
    },
    independentAxisLabelFormatter: {
      description: 'The function to format the independent axis points.',
      table: {type: {summary: '(t: AxisLabelValue) => void'}},
    },
    independentAxisLabelValues: {
      control: {type: 'array'},
      description: 'Array of axis label values to customize the independent axis labels.',
      table: {type: {summary: 'AxisLabelValue[]'}},
    },
    title: {
      description: 'Accessible title for the chart.',
      table: {type: {summary: 'string'}},
      type: {name: 'string', required: true},
    },
  },
  component: EzBarChart,
  title: 'Data Display/EzBarChart',
};

export default meta;
type Story = StoryObj<typeof EzBarChart>;

export const Default: Story = {
  args: {
    data: [
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
    ],
    description: 'A bar chart for total spend over the last 12 months.',
    idPrefix: 'barChartExample',
    title: 'Total spend over the last 12 months.',
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
            <EzCard
              title="Total spend"
              subtitle="Last 12 months"
              actions={<EzHeading size="1">$899,300</EzHeading>}
            >
              <EzBarChart
                data={DATA}
                description="A bar chart for total spend over the last 12 months."
                idPrefix="barChartExample"
                title="Total spend over the last 12 months."
              />
            </EzCard>
          );
        `,
      },
    },
    playroom: {
      code: dedent`
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
          <EzCard
            title="Total spend"
            subtitle="Last 12 months"
            actions={<EzHeading size="1">$899,300</EzHeading>}
          >
            <EzBarChart
              data={DATA}
              description="A bar chart for total spend over the last 12 months."
              idPrefix="barChartExample"
              title="Total spend over the last 12 months."
            />
          </EzCard>
        );
      })()}
      `,
    },
  },
  render: args => (
    <EzCard
      title="Total spend"
      subtitle="Last 12 months"
      actions={<EzHeading size="1">$899,300</EzHeading>}
    >
      <EzBarChart {...args} />
    </EzCard>
  ),
};
