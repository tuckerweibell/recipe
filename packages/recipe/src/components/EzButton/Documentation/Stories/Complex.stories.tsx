import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzButton from '../../EzButton';
import EzLayout from '../../../EzLayout';
import EzTooltip from '../../../EzTooltip';
import DefaultMeta, {Default} from './Default.stories';
import {EzButtonProps} from '../../EzButton.types';

const meta: Meta<typeof EzButton> = {
  argTypes: DefaultMeta.argTypes,
  component: EzButton,
  title: 'Input/EzButton/Complex',
};

export default meta;
type Story = StoryObj<typeof EzButton>;

export const ComplexChildren: Story = {
  args: {
    ...Default.args,
    children: (
      <EzLayout layout="split" style={{width: '250px'}}>
        View Cart
        <EzLayout layout="stack">
          <div style={{textAlign: 'right'}}>$13.45</div>
          <div style={{fontSize: '0.8em', fontWeight: 'normal', marginTop: '-20px'}}>
            $13.45/person
          </div>
        </EzLayout>
      </EzLayout>
    ),
    color: 'info',
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: dedent`
          <EzButton color="info">
            <EzLayout layout="split" style={{width: '250px'}}>
              View Cart
              <EzLayout layout="stack">
                <div style={{textAlign: 'right'}}>$13.45</div>
                <div style={{fontSize: '0.8em', fontWeight: 'normal', marginTop: '-20px'}}>
                  $13.45/person
                </div>
              </EzLayout>
            </EzLayout>
          </EzButton>
        `,
      },
    },
    playroom: {
      code: dedent`
        <EzButton color="info">
          <EzLayout layout="split" style={{width: '250px'}}>
            View Cart
            <EzLayout layout="stack">
              <div style={{textAlign: 'right'}}>$13.45</div>
              <div style={{fontSize: '0.8em', fontWeight: 'normal', marginTop: '-20px'}}>
                $13.45/person
              </div>
            </EzLayout>
          </EzLayout>
        </EzButton>
      `,
    },
  },
};

export const ComplexTooltip: Story = {
  args: {
    ...Default.args,
    disabled: true,
  } as EzButtonProps,
  parameters: {
    docs: {
      source: {
        code: dedent`
          <EzTooltip message="This button is disabled">
            <span>
              <EzButton disabled>Disabled With Tooltip</EzButton>
            </span>
          </EzTooltip>
        `,
      },
    },
    playroom: {
      code: dedent`
        <EzTooltip message="This button is disabled">
          <span>
            <EzButton disabled>Disabled With Tooltip</EzButton>
          </span>
        </EzTooltip>
      `,
    },
  },
  render: args => (
    <EzTooltip message="This button is disabled">
      <span>
        <EzButton {...args}>Disabled With Tooltip</EzButton>
      </span>
    </EzTooltip>
  ),
};
