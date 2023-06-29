import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {userEvent, within} from '@storybook/testing-library';
import {expect} from '@storybook/jest';
import dedent from 'ts-dedent';
import {EzCarouselExample, EzCarouselExampleJSX} from '../EzCarouselExample';
import EzCarousel from '../../EzCarousel';
import EzLink from '../../../EzLink';
import DefaultMeta, {Default} from './Default.stories';
import {EzCarouselProps} from '../../EzCarousel.types';

const meta: Meta<typeof EzCarousel> = {
  argTypes: DefaultMeta.argTypes,
  component: EzCarousel,
  title: 'Navigation/EzCarousel/Actions',
};

export default meta;
type Story = StoryObj<typeof EzCarousel>;

export const Link: Story = {
  args: {
    ...Default.args,
    link: (
      <EzLink>
        <a href="https://ezcater.com" target="_blank" rel="noreferrer">
          View All
        </a>
      </EzLink>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          ${EzCarouselExampleJSX(
            `link={
        <EzLink>
          <a href="https://ezcater.com" target="_blank" rel="noreferrer">
            View All
          </a>
        </EzLink>
      }`
          )}
        `,
      },
    },
    playroom: {
      code: dedent`
        {(() => {
          ${EzCarouselExampleJSX(
            `link={
        <EzLink>
          <a href="https://ezcater.com" target="_blank" rel="noreferrer">
            View All
          </a>
        </EzLink>
      }`
          )}
        })()}
      `,
    },
  },
  render: (args: EzCarouselProps) => EzCarouselExample(args),
};

export const PageChange: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    docs: {
      source: {
        code: EzCarouselExampleJSX(
          "onPageChange={(previous, current) => console.log('previous:', previous, 'current:', current)}"
        ),
      },
    },
    playroom: {
      code: dedent`
        {(() => {
          ${EzCarouselExampleJSX(
            "onPageChange={(previous, current) => console.log('previous:', previous, 'current:', current)}"
          )}
        })()}
      `,
    },
  },
  play: async ({args, canvasElement}) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByLabelText('Next Page')[0]);
    expect(args.onPageChange).toHaveBeenCalled();
    await userEvent.click(canvas.getAllByLabelText('Previous Page')[0]);
    expect(args.onPageChange).toHaveBeenCalled();
  },
  render: (args: EzCarouselProps) => EzCarouselExample(args),
};
delete PageChange.args.onPageChange;
