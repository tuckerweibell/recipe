import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {Stack, capitalize} from '@mui/material';
import dedent from 'ts-dedent';
import EzButton from '../../EzButton';
import DefaultMeta, {Default} from './Default.stories';
import {EzButtonMuiProps} from '../../EzButton.types';

const meta: Meta<typeof EzButton> = {
  argTypes: DefaultMeta.argTypes,
  component: EzButton,
  title: 'Input/EzButton/Font Size',
};

export default meta;
type Story = StoryObj<typeof EzButton>;

const fontSizes: EzButtonMuiProps['fontSize'][] = ['small', 'medium', 'large'];

const FontSizesRender = (variant: EzButtonMuiProps['variant']) => (
  <Stack alignItems="center" direction="row" gap={2}>
    <div>{capitalize(variant)}:</div>
    {fontSizes.map(fontSize => (
      <EzButton key={fontSize} fontSize={fontSize} variant={variant}>
        {capitalize(fontSize)}
      </EzButton>
    ))}
    <div style={{fontSize: '20px'}}>
      <EzButton fontSize="inherit" variant={variant}>
        Inherit
      </EzButton>
    </div>
  </Stack>
);

const FontSizesJSX = (variant: EzButtonMuiProps['variant']) => {
  return fontSizes
    .map(
      fontSize =>
        `<EzButton fontSize="${fontSize}" variant="${variant}">${capitalize(fontSize)}</EzButton>`
    )
    .join('\n').concat(dedent`
      \n
      <div style={{fontSize: '20px'}}>
        <EzButton fontSize="inherit" variant="${variant}">
          Inherit
        </EzButton>
      </div>
    `);
};

export const FilledFontSizes: Story = {
  args: {
    ...Default.args,
    variant: 'filled',
  } as EzButtonMuiProps,
  parameters: {
    docs: {source: {code: FontSizesJSX('filled')}},
    playroom: {code: FontSizesJSX('filled')},
  },
  render: () => FontSizesRender('filled'),
};

export const OutlinedFontSizes: Story = {
  args: {
    ...Default.args,
    variant: 'outlined',
  } as EzButtonMuiProps,
  parameters: {
    docs: {source: {code: FontSizesJSX('outlined')}},
    playroom: {code: FontSizesJSX('outlined')},
  },
  render: () => FontSizesRender('outlined'),
};

export const TextFontSizes: Story = {
  args: {
    ...Default.args,
    variant: 'text',
  } as EzButtonMuiProps,
  parameters: {
    docs: {source: {code: FontSizesJSX('text')}},
    playroom: {code: FontSizesJSX('text')},
  },
  render: () => FontSizesRender('text'),
};

export const InlineFontSizes: Story = {
  args: {
    ...Default.args,
    variant: 'inline',
  } as EzButtonMuiProps,
  parameters: {
    docs: {source: {code: FontSizesJSX('inline')}},
    playroom: {code: FontSizesJSX('inline')},
  },
  render: () => FontSizesRender('inline'),
};
