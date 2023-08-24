import React, {useState} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import dedent from 'ts-dedent';
import EzField from '../../EzField';
import DefaultMeta, {Default} from './Default.stories';

const meta: Meta<typeof EzField> = {
  argTypes: DefaultMeta.argTypes,
  component: EzField,
  title: 'Input/EzField/Time',
};

export default meta;
type Story = StoryObj<typeof EzField>;

const TimeJSX = dedent`
  const [time, setTime] = React.useState('12:00 pm');

  return (
    <EzField
      end="5:00 pm"
      label="Delivery time"
      onChange={event => setTime(event.target.value)}
      start="9:00 am"
      type="time"
      value={time}
    />
  );
`;

export const Time: Story = {
  args: Default.args,
  parameters: {
    docs: {source: {code: TimeJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${TimeJSX}
        })()}
      `,
    },
  },
  render: function TimeRender() {
    const [time, setTime] = useState('12:00 pm');

    return (
      <EzField
        end="5:00 pm"
        label="Delivery time"
        onChange={event => setTime(event.target.value)}
        start="9:00 am"
        type="time"
        value={time}
      />
    );
  },
};

const TimeStepJSX = dedent`
  const [time, setTime] = React.useState('12:00 pm');

  return (
    <EzField
      end="5:00 pm"
      label="Delivery time"
      onChange={event => setTime(event.target.value)}
      start="9:00 am"
      step={30}
      type="time"
      value={time}
    />
  );
`;

export const TimeStep: Story = {
  args: Default.args,
  parameters: {
    docs: {source: {code: TimeStepJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${TimeStepJSX}
        })()}
      `,
    },
  },
  render: function TimeStepRender() {
    const [time, setTime] = useState('12:00 pm');

    return (
      <EzField
        end="5:00 pm"
        label="Delivery time"
        onChange={event => setTime(event.target.value)}
        start="9:00 am"
        step={30}
        type="time"
        value={time}
      />
    );
  },
};

const TimeDisplayAsNoonJSX = dedent`
  const [time, setTime] = React.useState('12:00 pm');

  return (
    <EzField
      displayAsNoon
      end="5:00 pm"
      label="Delivery time"
      onChange={event => setTime(event.target.value)}
      start="9:00 am"
      type="time"
      value={time}
    />
  );
`;

export const TimeDisplayAsNoon: Story = {
  args: Default.args,
  parameters: {
    docs: {source: {code: TimeDisplayAsNoonJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${TimeDisplayAsNoonJSX}
        })()}
      `,
    },
  },
  render: function TimeDisplayAsNoonRender() {
    const [time, setTime] = useState('12:00 pm');

    return (
      <EzField
        displayAsNoon
        end="5:00 pm"
        label="Delivery time"
        onChange={event => setTime(event.target.value)}
        start="9:00 am"
        type="time"
        value={time}
      />
    );
  },
};

const TimeFocusLabelJSX = dedent`
  const [time, setTime] = React.useState('');

  return (
    <EzField
      end="5:00 pm"
      focusLabel="5:00 PM"
      label="Delivery time"
      onChange={event => setTime(event.target.value)}
      placeholder="Select..."
      start="9:00 am"
      type="time"
      value={time}
    />
  );
`;

export const TimeFocusLabel: Story = {
  args: Default.args,
  parameters: {
    docs: {source: {code: TimeFocusLabelJSX}},
    playroom: {
      code: dedent`
        {(() => {
          ${TimeFocusLabelJSX}
        })()}
      `,
    },
  },
  render: function TimeFocusRender() {
    const [time, setTime] = useState('');

    return (
      <EzField
        end="5:00 pm"
        focusLabel="5:00 PM"
        label="Delivery time"
        onChange={event => setTime(event.target.value)}
        placeholder="Select..."
        start="9:00 am"
        type="time"
        value={time}
      />
    );
  },
};
