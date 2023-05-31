import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import dedent from 'ts-dedent';
import EzChip from '../../EzChip';
import EzIcon from '../../../EzIcon';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzChip> = {
  argTypes: DefaultMeta.argTypes,
  component: EzChip,
  title: 'Data Display/EzChip/Icon',
};

export default meta;
type Story = StoryObj<typeof EzChip>;

export const WithIcon: Story = {
  args: {
    ...Default.args,
    icon: <EzIcon icon={faStar} />,
    label: 'With Icon',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          const {faStar} = require('@fortawesome/free-solid-svg-icons/faStar');
          
          <EzChip label="With Icon" icon={<EzIcon icon={faStar} />} />
        `,
      },
    },
    playroom: {
      code: dedent`
        {(() => {
          const {faStar} = require('@fortawesome/free-solid-svg-icons/faStar');
          return <EzChip label="With Icon" icon={<EzIcon icon={faStar} />} />;
        })()}
      `,
    },
  },
};

export const WithInheritedIconSize: Story = {
  args: {
    ...Default.args,
    icon: (
      <div style={{fontSize: '10px', display: 'flex'}}>
        <EzIcon icon={faStar} size="inherit" />
      </div>
    ),
    label: 'With Inherited Icon Size',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          <EzChip
            label="With Icon"
            icon={
              <div style={{fontSize: '10px', display: 'flex'}}>
                <EzIcon icon={faStar} size="inherit" />
              </div>
            }
          />
        `,
      },
    },
    playroom: {
      code: dedent`
        {(() => {
          const {faStar} = require('@fortawesome/free-solid-svg-icons/faStar');
          return (
            <EzChip
              label="With Icon"
              icon={
                <div style={{fontSize: '10px', display: 'flex'}}>
                  <EzIcon icon={faStar} size="inherit" />
                </div>
              }
            />
          );
        })()}
      `,
    },
  },
};
