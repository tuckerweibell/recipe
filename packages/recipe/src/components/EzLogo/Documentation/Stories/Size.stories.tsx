import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {Stack, capitalize} from '@mui/material';
import dedent from 'ts-dedent';
import EzLogo from '../../EzLogo';
import DefaultMeta, {Default} from './Default.stories';
import {EzLogoProps} from '../../EzLogo.types';

const meta: Meta<typeof EzLogo> = {
  argTypes: DefaultMeta.argTypes,
  component: EzLogo,
  title: 'Typography/EzLogo/Size',
};

export default meta;
type Story = StoryObj<typeof EzLogo>;

const sizes: EzLogoProps['size'][] = ['small', 'medium', 'large'];

const SizesRender = (variant: EzLogoProps['variant']) => (
  <Stack>
    {sizes.map(size => (
      <Stack key={size}>
        {capitalize(size)}:
        <div>
          <EzLogo size={size} variant={variant} />
        </div>
      </Stack>
    ))}
    <Stack>
      Inherit:
      <div style={{height: '80px'}}>
        <EzLogo size="inherit" variant={variant} />
      </div>
    </Stack>
  </Stack>
);

const SizesJSX = (variant: EzLogoProps['variant']) =>
  dedent`
    ${sizes.map(size => `<EzLogo size="${size}" variant="${variant}" />`).join('\n')}
    <div style={{height: '80px'}}>
      <EzLogo size="inherit" variant="${variant}" />
    </div>
  `;

export const HorizontalSizes: Story = {
  args: Default.args,
  parameters: {
    docs: {source: {code: SizesJSX('horizontal')}},
    playroom: {code: SizesJSX('horizontal')},
  },
  render: () => SizesRender('horizontal'),
};

export const VerticalSizes: Story = {
  args: {
    ...Default.args,
    variant: 'vertical',
  } as EzLogoProps,
  parameters: {
    docs: {source: {code: SizesJSX('vertical')}},
    playroom: {code: SizesJSX('vertical')},
  },
  render: () => <div style={{marginLeft: '100px'}}>{SizesRender('vertical')}</div>,
};
