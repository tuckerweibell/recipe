import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {Stack} from '@mui/material';
import dedent from 'ts-dedent';
import EzLogo from '../../EzLogo';
import DefaultMeta, {Default} from './Default.stories';
import {EzLogoProps} from '../../EzLogo.types';
import {ezColors} from '../../../../themes/ezColors';

const meta: Meta<typeof EzLogo> = {
  argTypes: DefaultMeta.argTypes,
  component: EzLogo,
  title: 'Typography/EzLogo/Color',
};

export default meta;
type Story = StoryObj<typeof EzLogo>;

const ColorsRender = (variant: EzLogoProps['variant']) => (
  <Stack alignItems="center" direction="row" gap={5}>
    <EzLogo color="default" variant={variant} />
    <EzLogo color="black" variant={variant} />
    <Stack bgcolor={ezColors.green.green100.color} p={2}>
      <EzLogo color="white" variant={variant} />
    </Stack>
  </Stack>
);

const ColorsJSX = (variant: EzLogoProps['variant']) => dedent`
  <EzLogo color="default" variant="${variant}" />
  <EzLogo color="black" variant="${variant}" />
  <div style={{backgroundColor: '${ezColors.green.green100.color}', padding: '16px'}}>
    <EzLogo color="white" variant="${variant}" />
  </div>
`;

export const HorizontalColors: Story = {
  args: Default.args,
  parameters: {
    docs: {source: {code: ColorsJSX('horizontal')}},
    playroom: {code: ColorsJSX('horizontal')},
  },
  render: () => ColorsRender('horizontal'),
};

export const VerticalColors: Story = {
  args: {
    ...Default.args,
    variant: 'vertical',
  } as EzLogoProps,
  parameters: {
    docs: {source: {code: ColorsJSX('vertical')}},
    playroom: {code: ColorsJSX('vertical')},
  },
  render: () => ColorsRender('vertical'),
};
