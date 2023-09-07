import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {FileDownload, Printer} from '@ezcater/icons';
import dedent from 'ts-dedent';
import {EzPageHeaderExample, EzPageHeaderExampleJSX} from '../EzPageHeaderExample';
import EzButton from '../../../EzButton';
import EzChip from '../../../EzChip';
import EzIcon from '../../../EzIcon';
import EzLayout from '../../../EzLayout';
import EzPageHeader, {EzPageHeaderProps} from '../../EzPageHeader';

const meta: Meta<typeof EzPageHeader> = {
  argTypes: {
    actions: {
      control: {type: 'node'},
      description: 'The actions of the page header.',
      table: {type: {summary: 'ReactNode'}},
    },
    breadcrumb: {
      control: {type: 'object'},
      description: 'The breadcrumb labelled link of the page header.',
      table: {type: {summary: 'LabelledLink'}},
    },
    status: {
      control: {type: 'node'},
      description: '',
      table: {type: {summary: 'ReactNode'}},
    },
    subheader: {
      control: {type: 'node'},
      description: 'The subheader actions of the page header.',
      table: {type: {summary: 'ReactNode'}},
    },
    subnav: {
      control: {type: 'node'},
      description: 'The subnavigation options of the page header.',
      table: {type: {summary: 'SubNavProps<TabType>'}},
    },
    title: {
      control: {type: 'text'},
      description: 'The title of the page header.',
      table: {type: {summary: 'string'}},
      type: {name: 'string', required: true},
    },
  },
  component: EzPageHeader,
  title: 'Layout/EzPageHeader',
};

export default meta;
type Story = StoryObj<typeof EzPageHeader>;

export const Default: Story = {
  args: {
    actions: <EzButton>Accept Order</EzButton>,
    breadcrumb: {
      label: 'Back to Orders',
      accessibilityLabel: 'Orders list',
      onClick: () => {},
    },
    status: <EzChip label="Verified" variant="success" />,
    subheader: (
      <EzLayout layout="right">
        <EzButton variant="text" startIcon={<EzIcon icon={Printer} />}>
          Print
        </EzButton>
        <EzButton variant="text" startIcon={<EzIcon icon={FileDownload} />}>
          Download
        </EzButton>
      </EzLayout>
    ),
    title: 'Order # XYZ-123',
  },
  parameters: {
    playroom: {
      code: dedent`
        {(() => {
          ${EzPageHeaderExampleJSX()}
        })()}
      `,
    },
  },
  render: (args: EzPageHeaderProps) => EzPageHeaderExample(args),
};
