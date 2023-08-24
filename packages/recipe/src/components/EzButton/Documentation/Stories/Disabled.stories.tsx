import {type Meta, type StoryObj} from '@storybook/react';
import EzButton from '../../EzButton';
import DefaultMeta, {Default} from './Default.stories';
import {EzButtonMuiProps, EzButtonProps} from '../../EzButton.types';

const meta: Meta<typeof EzButton> = {
  argTypes: DefaultMeta.argTypes,
  component: EzButton,
  title: 'Input/EzButton/Disabled',
};

export default meta;
type Story = StoryObj<typeof EzButton>;

const storyCode = (variant: EzButtonMuiProps['variant']) =>
  `<EzButton disabled variant="${variant}">Disabled</EzButton>`;

export const FilledDisabled: Story = {
  args: {
    ...Default.args,
    children: 'Disabled',
    disabled: true,
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('filled')},
  },
};

export const OutlinedDisabled: Story = {
  args: {
    ...Default.args,
    children: 'Disabled',
    disabled: true,
    variant: 'outlined',
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('outlined')},
  },
};

export const TextDisabled: Story = {
  args: {
    ...Default.args,
    children: 'Disabled',
    disabled: true,
    variant: 'text',
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('text')},
  },
};
