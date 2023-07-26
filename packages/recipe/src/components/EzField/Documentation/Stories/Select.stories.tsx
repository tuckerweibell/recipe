import React, {useState} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzField from '../../EzField';
import {Props as EzFieldProps} from '../../EzField.types';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzField> = {
  argTypes: DefaultMeta.argTypes,
  component: EzField,
  title: 'Input/EzField/Select',
};

export default meta;
type Story = StoryObj<typeof EzField>;

const SelectJSX = dedent`
  const [selectedOption, setSelectedOption] = React.useState(undefined);

  return (
    <EzField
      label="Select dropdown"
      onSelectionChange={setSelectedOption}
      options={[
        {label: 'All Upcoming', value: 'upcoming'},
        {label: 'Today', value: 'today'},
        {label: 'Tomorrow', value: 'tomorrow'},
        {label: 'All Time', value: 'all'},
        {label: 'Yesterday', value: 'yesterday'},
        {label: 'Last 7 Days', value: 'week'},
        {label: 'This Month', value: 'month'},
      ]}
      placeholder="Select option..."
      type="select"
      value={selectedOption}
    />
  );
`;

export const Select: Story = {
  args: {
    ...Default.args,
    label: 'Select dropdown',
    placeholder: 'Select option...',
    value: undefined,
  },
  parameters: {
    docs: {source: {code: SelectJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${SelectJSX}
        })()}
      `,
    },
  },
  render: function SelectRender(args: EzFieldProps) {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
      <EzField
        {...args}
        onSelectionChange={setSelectedOption}
        options={[
          {label: 'All Upcoming', value: 'upcoming'},
          {label: 'Today', value: 'today'},
          {label: 'Tomorrow', value: 'tomorrow'},
          {label: 'All Time', value: 'all'},
          {label: 'Yesterday', value: 'yesterday'},
          {label: 'Last 7 Days', value: 'week'},
          {label: 'This Month', value: 'month'},
        ]}
        type="select"
        value={selectedOption}
      />
    );
  },
};

const SelectGroupJSX = dedent`
  const [selectedOption, setSelectedOption] = React.useState(undefined);

  return (
    <EzField
      label="Select dropdown"
      onSelectionChange={setSelectedOption}
      options={[
        {label: 'All Upcoming', value: 'upcoming', group: 'Upcoming'},
        {label: 'Today', value: 'today', group: 'Upcoming'},
        {label: 'Tomorrow', value: 'tomorrow', group: 'Upcoming'},
        {label: 'All Time', value: 'all', group: 'Past'},
        {label: 'Yesterday', value: 'yesterday', group: 'Past'},
        {label: 'Last 7 Days', value: 'week', group: 'Past'},
        {label: 'This Month', value: 'month', group: 'Past'},
      ]}
      placeholder="Select option..."
      type="select"
      value={selectedOption}
    />
  );
`;

export const SelectGroup: Story = {
  args: {
    ...Default.args,
    label: 'Select dropdown with groups',
    placeholder: 'Select option...',
    value: undefined,
  },
  parameters: {
    docs: {source: {code: SelectGroupJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${SelectGroupJSX}
        })()}
      `,
    },
  },
  render: function SelectRender(args: EzFieldProps) {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
      <EzField
        {...args}
        onSelectionChange={setSelectedOption}
        options={[
          {label: 'All Upcoming', value: 'upcoming', group: 'Upcoming'},
          {label: 'Today', value: 'today', group: 'Upcoming'},
          {label: 'Tomorrow', value: 'tomorrow', group: 'Upcoming'},
          {label: 'All Time', value: 'all', group: 'Past'},
          {label: 'Yesterday', value: 'yesterday', group: 'Past'},
          {label: 'Last 7 Days', value: 'week', group: 'Past'},
          {label: 'This Month', value: 'month', group: 'Past'},
        ]}
        type="select"
        value={selectedOption}
      />
    );
  },
};
