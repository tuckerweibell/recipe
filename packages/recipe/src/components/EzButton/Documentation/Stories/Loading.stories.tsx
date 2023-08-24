import {type Meta, type StoryObj} from '@storybook/react';
import EzButton from '../../EzButton';
import DefaultMeta, {Default} from './Default.stories';
import {EzButtonMuiProps, EzButtonProps} from '../../EzButton.types';

const meta: Meta<typeof EzButton> = {
  argTypes: DefaultMeta.argTypes,
  component: EzButton,
  title: 'Input/EzButton/Loading',
};

export default meta;
type Story = StoryObj<typeof EzButton>;

const storyCode = (variant: EzButtonMuiProps['variant']) =>
  `<EzButton loading variant="${variant}">Loading</EzButton>`;

export const FilledLoading: Story = {
  args: {
    ...Default.args,
    children: 'Loading',
    loading: true,
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('filled')},
  },
};

export const OutlinedLoading: Story = {
  args: {
    ...Default.args,
    children: 'Loading',
    loading: true,
    variant: 'outlined',
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('outlined')},
  },
};

export const TextLoading: Story = {
  args: {
    ...Default.args,
    children: 'Loading',
    loading: true,
    variant: 'text',
  } as EzButtonProps,
  parameters: {
    playroom: {code: storyCode('text')},
  },
};
