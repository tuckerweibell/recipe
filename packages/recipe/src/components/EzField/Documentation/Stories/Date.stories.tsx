import React, {useState} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import dayjs from 'dayjs';
import EzButton from '../../../EzButton';
import EzField from '../../EzField';
import EzLayout from '../../../EzLayout';
import {Props as EzFieldProps} from '../../EzField.types';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzField> = {
  argTypes: DefaultMeta.argTypes,
  component: EzField,
  title: 'Input/EzField/Date',
};

export default meta;
type Story = StoryObj<typeof EzField>;

const DateJSX = dedent`
  const [date, setDate] = React.useState('01/01/2023');

  return (
    <EzField
      label="Delivery date"
      onChange={selectedDate => setDate(selectedDate)}
      type="date"
      value={date}
    />
  );
`;

export const Date: Story = {
  args: {
    ...Default.args,
    label: 'Delivery date',
    value: undefined,
  },
  parameters: {
    docs: {source: {code: DateJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${DateJSX}
        })()}
      `,
    },
  },
  render: function DateRender(args: EzFieldProps) {
    const [date, setDate] = useState('01/01/2023');

    return (
      <EzField
        {...args}
        type="date"
        onChange={selectedDate => setDate(selectedDate as any)}
        value={date}
      />
    );
  },
};

const DateRangeJSX = dedent`
  const [date, setDate] = React.useState('01/01/2023');

  return (
    <EzField
      label="Delivery date"
      maxDate="01/06/2023"
      minDate="01/02/2023"
      onChange={selectedDate => setDate(selectedDate)}
      type="date"
      value={date}
    />
  );
`;

export const DateRange: Story = {
  args: {
    ...Default.args,
    label: 'Delivery date',
    value: undefined,
  },
  parameters: {
    docs: {source: {code: DateRangeJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${DateRangeJSX}
        })()}
      `,
    },
  },
  render: function DateRangeRender(args: EzFieldProps) {
    const [date, setDate] = useState('01/02/2023');

    return (
      <EzField
        {...args}
        maxDate="01/06/2023"
        minDate="01/02/2023"
        onChange={selectedDate => setDate(selectedDate as any)}
        type="date"
        value={date}
      />
    );
  },
};

const DateFilterJSX = dedent`
  const {dayjs} = require('dayjs');

  const [date, setDate] = React.useState('01/20/2023');

  const isWeekday = dateToTest => {
    const day = dayjs(dateToTest).day();
    return day !== 0 && day !== 6;
  };

  return (
    <EzField
      filterDate={isWeekday}
      label="Deliver date"
      onChange={selectedDate => setDate(selectedDate)}
      type="date"
      value={date}
    />
  );
`;

export const DateFilter: Story = {
  args: {
    ...Default.args,
    label: 'Delivery date',
    value: undefined,
  },
  parameters: {
    docs: {source: {code: DateFilterJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${DateFilterJSX}
        })()}
      `,
    },
  },
  render: function DateFilterRender(args: EzFieldProps) {
    const [date, setDate] = useState('01/20/2023');

    const isWeekday = (dateToTest: any) => {
      const day = dayjs(dateToTest).day();
      return day !== 0 && day !== 6;
    };

    return (
      <EzField
        {...args}
        filterDate={isWeekday}
        onChange={selectedDate => setDate(selectedDate as any)}
        type="date"
        value={date}
      />
    );
  },
};

const DateClearJSX = dedent`
  const [date, setDate] = useState('01/01/2023');
  const handleClear = () => setDate('');

  return (
    <EzLayout alignY="bottom">
      <EzField
        label="Deliver date"
        onChange={selectedDate => setDate(selectedDate)}
        type="date"
        value={date}
      />
      <EzButton onClick={handleClear}>Clear</EzButton>
    </EzLayout>
  );
`;

export const DateClear: Story = {
  args: {
    ...Default.args,
    label: 'Delivery date',
    value: undefined,
  },
  parameters: {
    docs: {source: {code: DateClearJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${DateClearJSX}
        })()}
      `,
    },
  },
  render: function DateClearRender(args: EzFieldProps) {
    const [date, setDate] = useState('01/01/2023');
    const handleClear = () => setDate('');

    return (
      <EzLayout alignY="bottom">
        <EzField
          {...args}
          onChange={selectedDate => setDate(selectedDate as any)}
          type="date"
          value={date}
        />
        <EzButton onClick={handleClear}>Clear</EzButton>
      </EzLayout>
    );
  },
};
