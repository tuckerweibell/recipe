import {type Meta, type StoryObj} from '@storybook/react';
import {fireEvent, userEvent, within} from '@storybook/testing-library';
import {expect} from '@storybook/jest';
import EzButton from '../../EzButton';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzButton> = {
  argTypes: DefaultMeta.argTypes,
  component: EzButton,
  title: 'Input/EzButton/Action',
};

export default meta;
type Story = StoryObj<typeof EzButton>;

export const Clickable: Story = {
  args: {
    ...Default.args,
    children: 'Save',
  },
  parameters: {
    playroom: {code: '<EzButton onClick={() => {}}>Save</EzButton>'},
  },
  play: ({args, canvasElement}) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getAllByRole('button')[0]);
    expect(args.onClick).toHaveBeenCalled();
  },
};
delete Clickable.args.onClick;

export const ClickableDestructive: Story = {
  args: {
    ...Default.args,
    children: 'Delete',
    color: 'destructive',
  },
  parameters: {
    playroom: {code: '<EzButton color="destructive" onClick={() => {}}>Delete</EzButton>'},
  },
  play: ({args, canvasElement}) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getAllByRole('button')[0]);
    expect(args.onClick).toHaveBeenCalled();
  },
};
delete ClickableDestructive.args.onClick;

export const KeyDown: Story = {
  args: {
    ...Default.args,
    children: 'Press Enter',
    onKeyDown: event => event.key === 'Enter' && {},
  },
  parameters: {
    playroom: {
      code: "<EzButton onKeyDown={event => event.key === 'Enter' && {}}>Press Enter</EzButton>",
    },
  },
  play: ({args, canvasElement}) => {
    const canvas = within(canvasElement);
    const button = canvas.getAllByRole('button')[0];
    fireEvent.keyDown(button, {key: 'Enter', charCode: 13});
    expect(args.onKeyDown).toHaveBeenCalled();
  },
};
delete KeyDown.args.onKeyDown;
