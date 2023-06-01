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
  title: 'Data Display/EzBarChart/Axis Label Formatter',
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

export const DependentAxisLabelFormatter: Story = {
  args: {
    ...Default.args,
    data: DATA,
    dependentAxisLabelFormatter: (t: number) =>
      `${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(t)}`,
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

          const dependentAxisLabelFormatter = (t: number) =>
            new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(t);
          
          const independentAxisLabelFormatter = (t: string) => t.toUpperCase();

          return (
            <>
              <EzCard title="With dependent/y-axis label formatter">
                <EzBarChart
                  data={DATA}
                  dependentAxisLabelFormatter={dependentAxisLabelFormatter}
                  description="A bar chart for total spend over the last 12 months."
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

          const dependentAxisLabelFormatter = t =>
            new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(t);
    
          return (
            <EzCard title="With dependent/y-axis label formatter">
              <EzBarChart
                data={DATA}
                dependentAxisLabelFormatter={dependentAxisLabelFormatter}
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
      <EzCard title="With dependent/y-axis label formatter">
        <EzBarChart {...args} />
      </EzCard>
    </EzLayout>
  ),
};

export const IndependentAxisLabelFormatter: Story = {
  args: {
    ...Default.args,
    data: DATA,
    independentAxisLabelFormatter: (t: string) => `${t.toUpperCase()}`,
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
              <EzCard title="With independent/x-axis label formatter">
                <EzBarChart
                  data={DATA}
                  description="A bar chart for total spend over the last 12 months."
                  independentAxisLabelFormatter={independentAxisLabelFormatter}
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

        const independentAxisLabelFormatter = t => t.toUpperCase();
  
        return (
          <EzCard title="With independent/x-axis label formatter">
            <EzBarChart
              data={DATA}
              independentAxisLabelFormatter={independentAxisLabelFormatter}
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
      <EzCard title="With independent/x-axis label formatter">
        <EzBarChart {...args} />
      </EzCard>
    </EzLayout>
  ),
};
