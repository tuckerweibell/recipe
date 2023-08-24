import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {EzCardExample} from '../EzCardExample';
import {EzContent, EzFooter, EzHeader, EzPreview} from '../../../EzContent';
import EzButton from '../../../EzButton';
import EzCard, {EzCardProps} from '../../EzCard';
import EzHeading from '../../../EzHeading';
import EzIcon from '../../../EzIcon';
import EzLayout from '../../../EzLayout';
import DefaultMeta, {Default} from './Default.stories';
import getJSXString from '../../../../utils/getJSXString';

const meta: Meta<typeof EzCard> = {
  argTypes: DefaultMeta.argTypes,
  component: EzCard,
  title: 'Surface/EzCard/Elements',
};

export default meta;
type Story = StoryObj<typeof EzCard>;

const WithComponentsCard = (args?: EzCardProps) => (
  <EzCard {...args}>
    <EzPreview>
      <img
        src="/images/tacos.jpg"
        alt="Selection of Baja Fish tacos and Beef Barbacoa Tacos"
        style={{
          maxHeight: 200,
          objectFit: 'cover',
        }}
      />
    </EzPreview>
    <EzHeader>
      <EzHeading size="3" subheading="Upscale Authentic Flavor | 6 mi | $$$$">
        Amuleto Mexican Table
      </EzHeading>
    </EzHeader>
    <EzContent>
      We pride ourselves on serving the most authentic Mexican food outside of Mexico.
    </EzContent>
    <EzFooter>
      <EzLayout layout="right">
        <EzButton>Confirm</EzButton>
      </EzLayout>
    </EzFooter>
  </EzCard>
);

export const WithProps: Story = {
  args: {
    ...Default.args,
    titleIcon: (
      <EzIcon
        icon={
          <svg viewBox="0 0 260 245">
            <path d="m56,237 74-228 74,228L10,96h240" />
          </svg>
        }
      />
    ),
  },
  parameters: {
    playroom: {
      code: getJSXString(
        EzCardExample({
          titleIcon: (
            <EzIcon
              icon={
                <svg viewBox="0 0 260 245">
                  <path d="m56,237 74-228 74,228L10,96h240" />
                </svg>
              }
            />
          ),
        } as EzCardProps)
      ),
    },
  },
  render: (args: EzCardProps) => EzCardExample(args),
};

export const WithComponents: Story = {
  args: Default.args,
  parameters: {
    docs: {source: {code: getJSXString(WithComponentsCard())}},
    playroom: {code: getJSXString(WithComponentsCard())},
  },
  render: (args: EzCardProps) => WithComponentsCard(args),
};
