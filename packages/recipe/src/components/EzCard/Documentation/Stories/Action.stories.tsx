import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {userEvent, within} from '@storybook/testing-library';
import dedent from 'ts-dedent';
import {expect} from '@storybook/jest';
import {EzCardSimpleExample} from '../EzCardExample';
import EzButton from '../../../EzButton';
import EzCard, {EzCardProps} from '../../EzCard';
import EzLayout from '../../../EzLayout';
import DefaultMeta, {Default} from './Default.stories';
import getJSXString from '../../../../utils/getJSXString';
import {EzContent, EzHeader} from '../../../EzContent';
import EzLink from '../../../EzLink';
import EzHeading from '../../../EzHeading';

const meta: Meta<typeof EzCard> = {
  argTypes: DefaultMeta.argTypes,
  component: EzCard,
  title: 'Surface/EzCard/Actions',
};

export default meta;
type Story = StoryObj<typeof EzCard>;

const ViewAction = <EzButton>View</EzButton>;
const DeleteAction = (
  <EzButton color="destructive" variant="outlined">
    Delete
  </EzButton>
);

export const SingleAction: Story = {
  args: {
    ...Default.args,
    actions: ViewAction,
  },
  parameters: {
    playroom: {code: getJSXString(EzCardSimpleExample({actions: ViewAction} as EzCardProps))},
  },
  render: (args: EzCardProps) => EzCardSimpleExample(args),
};

export const MultipleActions: Story = {
  args: {
    ...Default.args,
    actions: (
      <EzLayout>
        {DeleteAction}
        {ViewAction}
      </EzLayout>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
        <EzCard
          actions={
            <EzLayout>
              <EzButton color="destructive" variant="outlined">Delete</EzButton>
              <EzButton>View</EzButton>
            </EzLayout>
          }
          data-testid="ez-card"
          subtitle="Upscale Authentic Flavor | 6 mi | $$$$"
          title="Amuleto Mexican Table"
        >
          We pride ourselves on serving the most authentic Mexican food outside of Mexico.
        </EzCard>
        `,
      },
    },
    playroom: {
      code: dedent`
      <EzCard
        actions={
          <EzLayout>
            <EzButton color="destructive" variant="outlined">Delete</EzButton>
            <EzButton>View</EzButton>
          </EzLayout>
        }
        data-testid="ez-card"
        subtitle="Upscale Authentic Flavor | 6 mi | $$$$"
        title="Amuleto Mexican Table"
      >
        We pride ourselves on serving the most authentic Mexican food outside of Mexico.
      </EzCard>
      `,
    },
  },
  render: (args: EzCardProps) => EzCardSimpleExample(args),
};

export const Clickable: Story = {
  args: {
    ...Default.args,
    clickable: true,
  },
  parameters: {
    playroom: {
      code: dedent`
        <EzCard
          clickable
          data-testid="ez-card"
          onClick={() => {}}
          subtitle="Upscale Authentic Flavor | 6 mi | $$$$"
          title="Amuleto Mexican Table"
        >
          We pride ourselves on serving the most authentic Mexican food outside of Mexico.
        </EzCard>
      `,
    },
  },
  play: ({args, canvasElement}) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getAllByTestId('ez-card')[0]);
    expect(args.onClick).toHaveBeenCalled();
  },
  render: (args: EzCardProps) => EzCardSimpleExample(args),
};
delete Clickable.args.onClick;

const ClickableHeaderLinkCard = (args?: EzCardProps, includeCTA?: boolean) => (
  <EzCard
    {...args}
    data-testid="ez-card"
    imageSrc="/images/tacos.jpg"
    imagePosition="left"
    imageMaxWidth={200}
    onClick={event => {
      // find the primary link within this card, and click it
      // NOTE: Using querySelector for simplicity - you could bind a ref to the link instead
      const link = event.currentTarget.querySelector('a');

      // if the click target is the link, we don't need to do anything else
      if (event.target !== link) link.click();
    }}
  >
    <EzHeader>
      <EzLink
        href="/orders"
        use="reset"
        onClick={event => {
          // avoid triggering navigation for this code example
          event.preventDefault();
          // eslint-disable-next-line no-console
          console.log('Card clicked.');
        }}
      >
        <EzHeading size="3" subheading="Upscale Authentic Flavor  |  10 mi  |  $$$">
          Amuleto Mexican Table
        </EzHeading>
      </EzLink>
    </EzHeader>
    <EzContent>
      <EzLayout layout="stack" alignX="left">
        We pride ourselves on serving the most authentic Mexican food outside of Mexico.
        {includeCTA && (
          <EzButton variant="text" ariaHidden id="order-now-btn">
            ← Order now
          </EzButton>
        )}
      </EzLayout>
    </EzContent>
  </EzCard>
);

const ClickableHeaderLinkCardJSX = (includeCTA?: boolean) => dedent`
  <EzCard
    clickable
    data-testid="ez-card"
    imageSrc="/images/tacos.jpg"
    imagePosition="left"
    imageMaxWidth={200}
    onClick={event => {
      // find the primary link within this card, and click it
      // NOTE: Using querySelector for simplicity - you could bind a ref to the link instead
      const link = event.currentTarget.querySelector('a');

      // if the click target is the link, we don't need to do anything else
      if (event.target !== link) link.click();
    }}
  >
    <EzHeader>
      <EzLink
        href="/orders"
        use="reset"
        onClick={event => {
          // avoid triggering navigation for this code example
          event.preventDefault();
          console.log('Card clicked.');
        }}
      >
        <EzHeading size="3" subheading="Upscale Authentic Flavor  |  10 mi  |  $$$">
          Amuleto Mexican Table
        </EzHeading>
      </EzLink>
    </EzHeader>
    <EzContent>
      ${
        includeCTA
          ? `<EzLayout layout="stack" alignX="left">
  We pride ourselves on serving the most authentic Mexican food outside of Mexico.
  <EzButton variant="text" ariaHidden id="order-now-btn">
    ← Order now
  </EzButton>
</EzLayout>`
          : `We pride ourselves on serving the most authentic Mexican food outside of Mexico.`
      }
    </EzContent>
  </EzCard>
`;

export const ClickableHeaderLink: Story = {
  args: {
    ...Default.args,
    clickable: true,
  },
  parameters: {
    docs: {source: {code: ClickableHeaderLinkCardJSX()}},
    playroom: {code: ClickableHeaderLinkCardJSX()},
  },
  render: (args: EzCardProps) => ClickableHeaderLinkCard(args),
};

export const ClickableCTA: Story = {
  args: {
    ...Default.args,
    clickable: true,
  },
  parameters: {
    docs: {source: {code: ClickableHeaderLinkCardJSX(true)}},
    playroom: {code: ClickableHeaderLinkCardJSX(true)},
  },
  render: (args: EzCardProps) => ClickableHeaderLinkCard(args, true),
};
