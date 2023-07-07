import React from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {userEvent, within} from '@storybook/testing-library';
import {expect} from '@storybook/jest';
import {Box} from '@mui/material';
import dedent from 'ts-dedent';
import EzCheckbox from '../../EzCheckbox';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzCheckbox> = {
  argTypes: DefaultMeta.argTypes,
  component: EzCheckbox,
  title: 'Input/EzCheckbox/Variant',
};

export default meta;
type Story = StoryObj<typeof EzCheckbox>;

const defaultArgsWithoutActions = Default.args;
delete defaultArgsWithoutActions.onBlur;
delete defaultArgsWithoutActions.onChange;
delete defaultArgsWithoutActions.onFocus;

export const Filled: Story = {
  args: {
    ...defaultArgsWithoutActions,
    defaultChecked: true,
    variant: 'filled',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          // For use with dark backgrounds
          <EzCheckbox
            defaultChecked
            variant="filled"
          />
        `,
      },
    },
    playroom: {
      code: dedent`
        <div style={{backgroundColor: '#034a34'}}>
          <EzCheckbox defaultChecked variant="filled" />
        </div>
      `,
    },
  },
  render: args => (
    <Box bgcolor="#034a34">
      <EzCheckbox {...args} />
    </Box>
  ),
  play: ({args, canvasElement}) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getAllByRole('checkbox')[0];
    expect(checkbox).toBeChecked();

    userEvent.click(checkbox);
    expect(args.onChange).toHaveBeenCalled();
    expect(checkbox).not.toBeChecked();

    userEvent.click(checkbox);
    expect(args.onChange).toHaveBeenCalled();
    expect(checkbox).toBeChecked();
  },
};

export const FilledInverse: Story = {
  args: {
    ...defaultArgsWithoutActions,
    defaultChecked: true,
    variant: 'filled-inverse',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          // For use with light backgrounds
          <EzCheckbox
            defaultChecked
            variant="filled-inverse"
          />
        `,
      },
    },
    playroom: {code: '<EzCheckbox defaultChecked variant="filled-inverse" />'},
  },
  play: ({args, canvasElement}) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getAllByRole('checkbox')[0];
    expect(checkbox).toBeChecked();

    userEvent.click(checkbox);
    expect(args.onChange).toHaveBeenCalled();
    expect(checkbox).not.toBeChecked();

    userEvent.click(checkbox);
    expect(args.onChange).toHaveBeenCalled();
    expect(checkbox).toBeChecked();
  },
};

export const Outlined: Story = {
  args: {
    ...defaultArgsWithoutActions,
    defaultChecked: true,
    variant: 'outlined',
  },
  parameters: {
    docs: {
      source: {
        code: dedent`
          // Default
          <EzCheckbox
            defaultChecked
            variant="outlined"
          />
        `,
      },
    },
    playroom: {code: '<EzCheckbox defaultChecked variant="outlined" />'},
  },
  play: ({args, canvasElement}) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getAllByRole('checkbox')[0];
    expect(checkbox).toBeChecked();

    userEvent.click(checkbox);
    expect(args.onChange).toHaveBeenCalled();
    expect(checkbox).not.toBeChecked();

    userEvent.click(checkbox);
    expect(args.onChange).toHaveBeenCalled();
    expect(checkbox).toBeChecked();
  },
};
