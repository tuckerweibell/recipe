import React, {useState} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzCard, {EzCardProps} from '../../EzCard';
import EzCardExpandable from '../../EzCardExpandable';
import EzCardSection from '../../EzCardSection';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzCard> = {
  argTypes: DefaultMeta.argTypes,
  component: EzCard,
  title: 'Surface/EzCard/Expandable',
};

export default meta;
type Story = StoryObj<typeof EzCard>;

const ExpandableCard = (args?: EzCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = (event: {preventDefault: () => void}) => {
    event.preventDefault();
    setIsExpanded(!isExpanded);
  };
  return (
    <EzCard
      {...args}
      title="Amuleto Mexican Table"
      subtitle="Upscale Authentic Flavor | 6 mi | $$$$"
      expandable={{
        collapseLabel: 'See less',
        expandLabel: 'See more',
        isExpanded,
        onClick: handleClick,
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
};

const ExpandableJSX = dedent`
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = event => {
    event.preventDefault();
    setIsExpanded(!isExpanded);
  };
  return (
    <EzCard
      title="Amuleto Mexican Table"
      subtitle="Upscale Authentic Flavor | 6 mi | $$$$"
      expandable={{
        collapseLabel: 'See less',
        expandLabel: 'See more',
        isExpanded,
        onClick: handleClick,
      }}
    >
      <EzCardSection>
        We pride ourselves on serving the most authentic Mexican food outside of Mexico.
        <EzCardExpandable isExpanded={isExpanded}>
          Additional content that is either not frequently used, or is not critical for the user
          to make informed choices.
        </EzCardExpandable>
      </EzCardSection>
    </EzCard>
  );
`;

export const Expandable: Story = {
  args: {
    ...Default.args,
    expandable: {
      expandLabel: 'See more',
      collapseLabel: 'See less',
      onClick: () => {},
      isExpanded: false,
    },
  },
  parameters: {
    docs: {source: {code: ExpandableJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${ExpandableJSX}
        })()}
      `,
    },
  },
  render: (args: EzCardProps) => ExpandableCard(args),
};
