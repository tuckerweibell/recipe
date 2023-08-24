import React, {LegacyRef, createRef} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {EzCardExample} from '../EzCardExample';
import EzButton from '../../../EzButton';
import EzCard, {EzCardProps} from '../../EzCard';
import EzCardExpandable from '../../EzCardExpandable';
import EzCardSection from '../../EzCardSection';
import EzField from '../../../EzField';
import EzLayout from '../../../EzLayout';
import Open from '../../../EzField/Open';
import DefaultMeta from './Default.stories';

const meta: Meta<typeof EzCard> = {
  argTypes: DefaultMeta.argTypes,
  component: EzCard,
  title: 'Surface/EzCard/Regression',
};

export default meta;
type Story = StoryObj<typeof EzCard>;

export const ActionAlignment: Story = {
  render: () => EzCardExample(),
};

export const ActionsWrap: Story = {
  decorators: [
    StoryToRender => (
      <div style={{maxWidth: 600}}>
        <StoryToRender />
      </div>
    ),
  ],
  render: () =>
    EzCardExample({
      actions: (
        <EzLayout layout="basic">
          <EzButton variant="outlined" color="destructive">
            Delete
          </EzButton>
          <EzButton variant="outlined">Edit</EzButton>
          <EzButton>View</EzButton>
        </EzLayout>
      ),
    } as EzCardProps),
};

const ExpandableCard = (isExpanded: boolean) => (
  <EzCard
    title="Amuleto Mexican Table"
    subtitle="Upscale Authentic Flavor | 6 mi | $$$$"
    expandable={{
      collapseLabel: 'See less',
      expandLabel: 'See more',
      isExpanded,
      onClick: () => {},
    }}
  >
    <EzCardSection>
      We pride ourselves on serving the most authentic Mexican food outside of Mexico.
      <EzCardExpandable isExpanded={isExpanded}>
        Additional content that is either not frequently used, or is not critical for the user to
        make informed choices.
      </EzCardExpandable>
    </EzCardSection>
  </EzCard>
);

export const ExpandableFooterClosed: Story = {
  render: () => ExpandableCard(false),
};

export const ExpandableFooterOpen: Story = {
  render: () => ExpandableCard(true),
};

const containerRef = createRef();

export const ZIndex: Story = {
  decorators: [
    StoryToRender => (
      <div ref={containerRef as LegacyRef<HTMLDivElement>} style={{height: 430}}>
        <StoryToRender />
      </div>
    ),
  ],
  render: () => (
    <EzCard style={{height: '100%'}}>
      <Open containerRef={containerRef}>
        <EzField
          type="date"
          value="01/01/2020"
          label="Card doesn't clip overflow of absolutely positioned content"
        />
      </Open>
    </EzCard>
  ),
};

const imagePositionArgs = (base: 'left' | 'right' | 'top', medium: 'left' | 'right' | 'top') => ({
  title: `Base ${base}, medium ${medium}`,
  imageSrc: '/images/tacos.jpg',
  imagePosition: {base, medium},
  imageMaxHeight: 200,
});

export const ImageResponsiveBaseLeftMediumRight: Story = {
  args: imagePositionArgs('left', 'top'),
};

export const ImageResponsiveBaseRightMediumTop: Story = {
  args: imagePositionArgs('right', 'top'),
};

export const ImageResponsiveBaseTopMediumLeft: Story = {
  args: imagePositionArgs('top', 'left'),
};

export const ImageResponsiveBaseTopMediumRight: Story = {
  args: imagePositionArgs('top', 'right'),
};

export const QuietCardMediumSize: Story = {
  args: {
    isQuiet: true,
  },
  render: (args: EzCardProps) => EzCardExample({...args, size: 'medium'}),
};
