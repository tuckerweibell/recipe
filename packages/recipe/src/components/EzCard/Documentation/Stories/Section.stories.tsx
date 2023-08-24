import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import EzCard, {EzCardProps} from '../../EzCard';
import EzCardSection from '../../EzCardSection';
import DefaultMeta, {Default} from './Default.stories';
import getJSXString from '../../../../utils/getJSXString';

const meta: Meta<typeof EzCard> = {
  argTypes: DefaultMeta.argTypes,
  component: EzCard,
  title: 'Surface/EzCard/Sections',
};

export default meta;
type Story = StoryObj<typeof EzCard>;

const SectionsCard = (args?: EzCardProps) => (
  <EzCard {...args}>
    <EzCardSection subtitle="Upscale Authentic Flavor | 6 mi | $$$$" title="Amuleto Mexican Table">
      We pride ourselves on serving the most authentic Mexican food outside of Mexico.
    </EzCardSection>
    <EzCardSection subtitle="Upscale Authentic Flavor | 6 mi | $$$$" title="Amuleto Mexican Table">
      We pride ourselves on serving the most authentic Mexican food outside of Mexico.
    </EzCardSection>
  </EzCard>
);

export const VerticalSections: Story = {
  args: Default.args,
  parameters: {
    docs: {source: {code: getJSXString(SectionsCard())}},
    playroom: {code: getJSXString(SectionsCard())},
  },
  render: (args: EzCardProps) => SectionsCard(args),
};

export const HorizontalSections: Story = {
  args: {
    ...Default.args,
    horizontal: true,
  },
  parameters: {
    docs: {
      source: {
        code: getJSXString(SectionsCard({horizontal: true} as EzCardProps)),
      },
    },
    playroom: {
      code: getJSXString(SectionsCard({horizontal: true} as EzCardProps)),
    },
  },
  render: (args: EzCardProps) => SectionsCard({...args, horizontal: true}),
};
