import React, {useEffect, useRef} from 'react';
import {type Meta, type StoryObj} from '@storybook/react';
import {userEvent, within} from '@storybook/testing-library';
import {expect} from '@storybook/jest';
import dayjs from 'dayjs';
import DefaultMeta from './Default.stories';
import EzButton from '../../../EzButton';
import EzField from '../../EzField';
import EzFormLayout from '../../../EzFormLayout';
import EzLabel from '../../../EzLabel';
import EzLayout from '../../../EzLayout';
import EzSearchInput from '../../../EzSearchInput';
import Open from '../../Open';
import EzModal from '../../../EzModal';

const meta: Meta<typeof EzField> = {
  argTypes: DefaultMeta.argTypes,
  component: EzField,
  title: 'Input/EzField/Regression',
};

export default meta;
type Story = StoryObj<typeof EzField>;

export const ErrorOverlap: Story = {
  render: () => (
    <EzFormLayout style={{maxWidth: '360px'}}>
      <EzLayout layout="basic">
        <EzField
          label="Send to"
          touched
          error="A valid send to email address is required"
          value="Kevi"
          autoFocus
        />
        <EzField label="Reply to" value="ky@sa-pa.com-test" />
      </EzLayout>
      <EzField label="Subject" value="Invoice from SA PA | Vietnamese Kitchen" />
    </EzFormLayout>
  ),
};

export const CustomInputWithError: Story = {
  render: () => (
    <EzField
      type={props => <input {...props} />}
      label="Character Name"
      helperText="Provide the name of your favorite Sesame Street character."
      touched
      error="A valid send to email address is required"
    />
  ),
};

export const InputWithHiddenLabelAndButton: Story = {
  render: () => (
    <EzLayout>
      <EzButton>Click Me</EzButton>
      <EzField type="text" label="Character Name" value="Big Bird" labelHidden />
    </EzLayout>
  ),
};

export const SelectAndSearchInputAlignment: Story = {
  render: () => (
    <EzLayout
      layout={{
        base: 'stack',
        medium: 'basic',
      }}
    >
      <EzField
        type="select"
        label="List"
        labelSize="small"
        options={[
          {label: 'Active Customers', value: 'active'},
          {label: 'All', value: 'all'},
        ]}
        value="active"
        onChange={() => {}}
      />
      <div>
        <EzLabel position="top" use="secondary" htmlFor="customer-search">
          Search
        </EzLabel>
        <EzSearchInput id="customer-search" placeholder="Search customers" />
      </div>
    </EzLayout>
  ),
};

const SelectListRender = (args: any) => (
  <EzField
    type="select"
    label="Select dropdown"
    options={[
      {label: 'All Upcoming', value: 'upcoming'},
      {label: 'Today', value: 'today'},
      {label: 'Tomorrow', value: 'tomorrow'},
      {label: 'All Time', value: 'all'},
      {label: 'Yesterday', value: 'yesterday'},
      {label: 'Last 7 Days', value: 'week'},
    ]}
    value="upcoming"
    {...args}
  />
);

export const SelectList: Story = {
  render: args => SelectListRender(args),
};

export const SelectListOpen: Story = {
  render: function SelectListOpenRender(args) {
    const selectListOpenRef = useRef<HTMLDivElement>();

    return (
      <div ref={selectListOpenRef} style={{height: '400px'}}>
        <Open containerRef={selectListOpenRef}>{SelectListRender(args)}</Open>
      </div>
    );
  },
};

export const SelectListDisabled: Story = {
  render: args => SelectListRender({...args, disabled: true}),
};

export const SelectListPlaceholder: Story = {
  render: args => SelectListRender({...args, placeholder: 'Choose...', value: ''}),
};

export const SelectListError: Story = {
  render: args => SelectListRender({...args, error: 'Please select a past date', touched: true}),
};

export const SelectListErrorMobile: Story = {
  render: args => (
    <div style={{width: '300px'}}>
      {SelectListRender({...args, error: 'Please select a past date', touched: true})}
    </div>
  ),
};

export const SelectListErrorOpen: Story = {
  render: function SelectListErrorOpenRender(args) {
    const selectListErrorOpenRef = useRef<HTMLDivElement>();

    return (
      <div ref={selectListErrorOpenRef} style={{height: '400px'}}>
        <Open containerRef={selectListErrorOpenRef}>
          {SelectListRender({...args, error: 'Please select a past date', touched: true})}
        </Open>
      </div>
    );
  },
};

export const SelectListLong: Story = {
  render: function SelectListLongRender() {
    const selectListLongRef = useRef<HTMLDivElement>();

    return (
      <div ref={selectListLongRef} style={{height: '400px'}}>
        <Open containerRef={selectListLongRef}>
          <EzField
            type="select"
            label="Select dropdown"
            options={'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
              .split('')
              .map(letter => ({label: letter, value: letter}))}
            value="D"
          />
        </Open>
      </div>
    );
  },
};

export const SelectListLongContent: Story = {
  render: () => (
    <EzLayout>
      <EzField
        type="select"
        label="Select dropdown"
        placeholder="Choose..."
        options={[{label: 'Short value', value: 1}]}
        value={1}
      />
      <EzField
        type="select"
        label="Select dropdown"
        placeholder="Choose..."
        options={[{label: 'Super ridiculously exaggerated value for an option', value: 1}]}
        value={1}
      />
    </EzLayout>
  ),
};

export const SelectListLongContentOpen: Story = {
  play: ({canvasElement}) => {
    const canvas = within(canvasElement);
    const firstInput = canvas.getAllByRole('combobox')[0];
    const secondInput = canvas.getAllByRole('combobox')[1];

    // both inputs should exist
    expect(canvas.queryAllByDisplayValue(/short value/i)[0]).toBeInTheDocument();
    expect(
      canvas.queryAllByDisplayValue(/super ridiculously exaggerated value for an option/i)[0]
    ).toBeInTheDocument();

    // neither input should be expanded
    expect(firstInput).toHaveAttribute('aria-expanded', 'false');
    expect(secondInput).toHaveAttribute('aria-expanded', 'false');

    // the first input should expand when clicked
    userEvent.click(firstInput);
    expect(firstInput).toHaveAttribute('aria-expanded', 'true');
    expect(secondInput).toHaveAttribute('aria-expanded', 'false');

    // the second input should expand when clicked
    userEvent.click(secondInput);
    expect(firstInput).toHaveAttribute('aria-expanded', 'false');
    expect(secondInput).toHaveAttribute('aria-expanded', 'true');
  },
  render: function SelectListLongContentOpenRender() {
    const selectListLongContentOpenRef = useRef<HTMLDivElement>();

    return (
      <EzLayout alignY="top">
        <EzField
          type="select"
          label="Select dropdown"
          placeholder="Choose..."
          options={[{label: 'Short value', value: 1}]}
          value={1}
        />
        <div ref={selectListLongContentOpenRef} style={{height: '400px'}}>
          <Open containerRef={selectListLongContentOpenRef}>
            <EzField
              type="select"
              label="Select dropdown"
              placeholder="Choose..."
              options={[{label: 'Super ridiculously exaggerated value for an option', value: 1}]}
              value={1}
            />
          </Open>
        </div>
      </EzLayout>
    );
  },
};

export const SelectListGroups: Story = {
  render: function SelectListGroupsRender() {
    const selectListGroupsRef = useRef<HTMLDivElement>();

    return (
      <div ref={selectListGroupsRef} style={{height: '400px'}}>
        <Open containerRef={selectListGroupsRef}>
          <EzField
            type="select"
            label="Select dropdown with groups"
            options={[
              {label: 'All Upcoming', value: 'upcoming', group: 'Upcoming'},
              {label: 'Today', value: 'today', group: 'Upcoming'},
              {label: 'Tomorrow', value: 'tomorrow', group: 'Upcoming'},
              {label: 'All Time', value: 'all', group: 'Past'},
              {label: 'Yesterday', value: 'yesterday', group: 'Past'},
              {label: 'Last 7 Days', value: 'week', group: 'Past'},
              {label: 'This Month', value: 'month', group: 'Past'},
            ]}
            value="tomorrow"
          />
        </Open>
      </div>
    );
  },
};

export const SelectListOrdered: Story = {
  render: function SelectListOrderedRender() {
    const selectListOrderedRef = useRef<HTMLDivElement>();

    return (
      <div ref={selectListOrderedRef} style={{height: '400px'}}>
        <Open containerRef={selectListOrderedRef}>
          <EzField
            type="select"
            label="Select dropdown with groups"
            options={[
              {label: 'All Upcoming', value: 'upcoming', group: 'Upcoming'},
              {label: 'All Time', value: 'all', group: 'Past'},
              {label: 'Today', value: 'today', group: 'Upcoming'},
              {label: 'Tomorrow', value: 'tomorrow', group: 'Upcoming'},
              {label: 'Yesterday', value: 'yesterday', group: 'Past'},
              {label: 'Last 7 Days', value: 'week', group: 'Past'},
              {label: 'This Month', value: 'month', group: 'Past'},
            ]}
            value="tomorrow"
          />
        </Open>
      </div>
    );
  },
};

const AutosuggestRender = (args: any) => (
  <EzField
    type="autosuggest"
    label="Autosuggest"
    options={[
      {label: 'All Upcoming', value: 'upcoming'},
      {label: 'Today', value: 'today'},
      {label: 'Tomorrow', value: 'tomorrow'},
      {label: 'All Time', value: 'all'},
      {label: 'Yesterday', value: 'yesterday'},
      {label: 'Last 7 Days', value: 'week'},
    ]}
    {...args}
  />
);

export const Autosuggest: Story = {
  render: () => AutosuggestRender({value: 'upcoming'}),
};

export const AutosuggestOpen: Story = {
  render: function AutosuggestOpenRender() {
    const autosuggestOpenRef = useRef<HTMLDivElement>();

    return (
      <div ref={autosuggestOpenRef} style={{height: '400px'}}>
        <Open containerRef={autosuggestOpenRef}>{AutosuggestRender({value: 'upcoming'})}</Open>
      </div>
    );
  },
};

export const AutosuggestEmpty: Story = {
  render: () => AutosuggestRender({options: []}),
};

export const AutosuggestPlaceholder: Story = {
  render: () => AutosuggestRender({options: [], placeholder: 'Choose...'}),
};

export const AutosuggestDisabled: Story = {
  render: () => AutosuggestRender({disabled: true, value: 'upcoming'}),
};

export const AutosuggestError: Story = {
  render: () =>
    AutosuggestRender({error: 'Value must be in the future', touched: true, value: 'yesterday'}),
};

export const AutosuggestErrorOpen: Story = {
  render: function AutosuggestErrorOpenRender() {
    const autosuggestErrorOpenRef = useRef<HTMLDivElement>();

    return (
      <div ref={autosuggestErrorOpenRef} style={{height: '400px'}}>
        <Open containerRef={autosuggestErrorOpenRef}>
          {AutosuggestRender({
            error: 'Value must be in the future',
            touched: true,
            value: 'yesterday',
          })}
        </Open>
      </div>
    );
  },
};

export const AutosuggestLong: Story = {
  render: function AutoSuggestLongRender() {
    const autosuggestLongRef = useRef<HTMLDivElement>();

    return (
      <div ref={autosuggestLongRef} style={{height: '400px'}}>
        <Open containerRef={autosuggestLongRef}>
          <EzField
            type="autosuggest"
            label="Autosuggest"
            options={'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
              .split('')
              .map(letter => ({label: letter, value: letter}))}
            value="D"
          />
        </Open>
      </div>
    );
  },
};

export const AutosuggestLongContent: Story = {
  play: SelectListLongContentOpen.play,
  render: function AutosuggestLongContentRender() {
    const autosuggestLongContentRef = useRef<HTMLDivElement>();

    return (
      <EzLayout alignY="top">
        <EzField
          type="autosuggest"
          label="Autosuggest"
          options={[{label: 'Short value', value: 1}]}
          value={1}
        />
        <div ref={autosuggestLongContentRef} style={{height: '400px'}}>
          <Open containerRef={autosuggestLongContentRef}>
            <EzField
              type="autosuggest"
              label="Autosuggest"
              options={[{label: 'Super ridiculously exaggerated value for an option', value: 1}]}
              value={1}
            />
          </Open>
        </div>
      </EzLayout>
    );
  },
};

export const AutosuggestHighlight: Story = {
  render: function AutoSuggestHighlightRender() {
    const autosuggestHighlightRef = useRef<HTMLDivElement>();

    function setNativeValue(element: HTMLInputElement, value: string) {
      const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
      const prototype = Object.getPrototypeOf(element);
      const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

      if (valueSetter && valueSetter !== prototypeValueSetter) {
        prototypeValueSetter.call(element, value);
      } else {
        valueSetter.call(element, value);
      }
    }

    const TypeInField = ({children}) => {
      useEffect(() => {
        const input = autosuggestHighlightRef.current.querySelector('input');
        setNativeValue(input, 'to');
        input.dispatchEvent(new Event('change', {bubbles: true}));
      }, []);
      return children;
    };

    return (
      <div ref={autosuggestHighlightRef} style={{height: '400px'}}>
        <Open containerRef={autosuggestHighlightRef}>
          <TypeInField>
            <EzField
              type="autosuggest"
              label="Autosuggest"
              options={[
                {label: 'Today', value: 'today'},
                {label: 'Tomorrow', value: 'tomorrow'},
              ]}
              value={null}
            />
          </TypeInField>
        </Open>
      </div>
    );
  },
};

const DateInputRender = (args: any) => (
  <EzField type="date" label="Order date" value="01/01/2023" {...args} />
);

export const DateInput: Story = {
  render: () => DateInputRender({}),
};

export const DateInputOpen: Story = {
  render: function DateInputOpenRender() {
    const dateInputOpenRef = useRef<HTMLDivElement>();

    return (
      <div ref={dateInputOpenRef} style={{height: '400px'}}>
        <Open containerRef={dateInputOpenRef}>{DateInputRender({})}</Open>
      </div>
    );
  },
};

export const DateInputEmpty: Story = {
  render: () => DateInputRender({value: null}),
};

export const DateInputDisabled: Story = {
  render: () => DateInputRender({disabled: true}),
};

export const DateInputError: Story = {
  render: () => DateInputRender({error: 'Please select a past date', touched: true}),
};

export const DateInputRange: Story = {
  render: function DateInputRangeRender() {
    const dateInputRangeRef = useRef<HTMLDivElement>();

    return (
      <div ref={dateInputRangeRef} style={{height: '400px'}}>
        <Open containerRef={dateInputRangeRef}>
          {DateInputRender({maxDate: '01/06/2023', minDate: '01/02/2023', value: '01/02/2023'})}
        </Open>
      </div>
    );
  },
};

export const DateInputFilter: Story = {
  render: function DateInputFilterRender() {
    const dateInputFilterRef = useRef<HTMLDivElement>();

    const isWeekday = (dateToTest: any) => {
      const day = dayjs(dateToTest).day();
      return day !== 0 && day !== 6;
    };

    return (
      <div ref={dateInputFilterRef} style={{height: '400px'}}>
        <Open containerRef={dateInputFilterRef}>
          {DateInputRender({filterDate: isWeekday, value: '01/02/2023'})}
        </Open>
      </div>
    );
  },
};

export const DateInputModal: Story = {
  render: function DateInputModalRender() {
    const dateInputModalRef = useRef<HTMLDivElement>();

    return (
      <div style={{height: '700px'}}>
        <EzModal isOpen submitLabel="Submit" headerText="Modal header">
          <div ref={dateInputModalRef} style={{height: '400px'}}>
            <Open containerRef={dateInputModalRef}>{DateInputRender({})}</Open>
          </div>
        </EzModal>
      </div>
    );
  },
};

const TimeInputRender = (args: any) => (
  <EzField end="5:00pm" label="Order time" start="9:00am" type="time" value="1:00 PM" {...args} />
);

export const TimeInput: Story = {
  render: () => TimeInputRender({}),
};

export const TimeInputOpen: Story = {
  render: function TimeInputOpenRender() {
    const timeInputOpenRef = useRef<HTMLDivElement>();

    return (
      <div ref={timeInputOpenRef} style={{height: '400px'}}>
        <Open containerRef={timeInputOpenRef}>{TimeInputRender({})}</Open>
      </div>
    );
  },
};

export const TimeInputEmpty: Story = {
  render: () => TimeInputRender({placeholder: 'Choose...', value: null}),
};

export const TimeInputDisabled: Story = {
  render: () => TimeInputRender({disabled: true}),
};

export const TimeInputError: Story = {
  render: () => TimeInputRender({error: 'Please select a future time', touched: true}),
};

export const TimeInputDisplayAsNoon: Story = {
  render: () => TimeInputRender({displayAsNoon: true, value: '12:00 PM'}),
};

export const TimeInputModal: Story = {
  render: function TimeInputModalRender() {
    const timeInputModalRef = useRef<HTMLDivElement>();

    return (
      <div style={{height: '700px'}}>
        <EzModal isOpen submitLabel="Submit" headerText="Modal header">
          <div ref={timeInputModalRef} style={{height: '400px'}}>
            <Open containerRef={timeInputModalRef}>{TimeInputRender({})}</Open>
          </div>
        </EzModal>
      </div>
    );
  },
};

export const TimeInputOverlap: Story = {
  render: function TimeInputOverlapRender() {
    const timeInputOverlapRef = useRef<HTMLDivElement>();

    return (
      <EzLayout layout="stack" style={{height: '420px'}}>
        <div ref={timeInputOverlapRef}>
          <Open containerRef={timeInputOverlapRef}>{TimeInputRender({})}</Open>
        </div>
        {TimeInputRender({})}
      </EzLayout>
    );
  },
};

export const TimeInputFocusLabel: Story = {
  render: function TimeInputFocusLabelRender() {
    const timeInputFocusLabelRef = useRef<HTMLDivElement>();

    return (
      <div ref={timeInputFocusLabelRef} style={{height: '400px'}}>
        <Open containerRef={timeInputFocusLabelRef}>
          {TimeInputRender({focusLabel: '5:00 PM', placeholder: 'Choose...', value: null})}
        </Open>
      </div>
    );
  },
};
