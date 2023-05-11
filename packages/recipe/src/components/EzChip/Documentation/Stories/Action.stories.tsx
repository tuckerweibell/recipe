import {type Meta, type StoryObj} from '@storybook/react';
import {userEvent, within} from '@storybook/testing-library';
import {expect} from '@storybook/jest';
import EzChip from '../../EzChip';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzChip> = {
  title: 'Data Display/EzChip/Action',
  component: EzChip,
  argTypes: {
    ...DefaultMeta.argTypes,
  },
};

export default meta;
type Story = StoryObj<typeof EzChip>;

export const Clickable: Story = {
  args: {
    ...Default.args,
    label: 'Clickable',
  },
  parameters: {
    docs: {source: {code: '<EzChip label="Clickable" onClick={() => {}} />'}},
    playroom: {code: '<EzChip label="Clickable" onClick={() => {}} />'},
  },
  play: async ({args, canvasElement}) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole('button')[0]);
    expect(args.onClick).toHaveBeenCalled();
  },
};
delete Clickable.args.onClick;

export const Deletable: Story = {
  args: {
    ...Default.args,
    label: 'Deletable',
  },
  parameters: {
    docs: {source: {code: '<EzChip label="Deletable" onDelete={() => {}} />'}},
    playroom: {code: '<EzChip label="Deletable" onDelete={() => {}} />'},
  },
  play: async ({args, canvasElement}) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByTestId('DeleteIcon')[0]);
    expect(args.onDelete).toHaveBeenCalled();
  },
};
delete Deletable.args.onDelete;

export const ClickableAndDeletable: Story = {
  args: {
    ...Default.args,
    label: 'Clickable and Deletable',
  },
  parameters: {
    docs: {
      source: {
        code: '<EzChip label="Clickable and Deletable" onClick={() => {}} onDelete={() => {}} />',
      },
    },
    playroom: {
      code: '<EzChip label="Clickable and Deletable" onClick={() => {}} onDelete={() => {}} />',
    },
  },
  play: async ({args, canvasElement}) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByRole('button')[0]);
    expect(args.onClick).toHaveBeenCalled();
    await userEvent.click(canvas.getAllByTestId('DeleteIcon')[0]);
    expect(args.onDelete).toHaveBeenCalled();
  },
};
delete ClickableAndDeletable.args.onClick;
delete ClickableAndDeletable.args.onDelete;
