import React from 'react';
import {visualSnapshots} from 'sosia';
import {axe} from 'jest-axe';
import {getByLabelText, getByText, fireEvent, act} from '@testing-library/react';
import ReactTestUtils from 'react-dom/test-utils';
import Component from 'react-component-component';
import regressionTests from './EzField.test.md';
import ezTextAreaTests from './EzTextArea.test.md';
import ezSelectTests from './EzSelect.test.md';
import markdown from '../EzField.md';
import EzField from '../EzField';
import {useTimeRangeOptions} from '../EzTimeInput';
import {fullRender as render, renderToHtml} from '../../../jest-globals';
import {EzFormLayout, EzLayout} from '../../index';
import Open from '../Open';

const scope = {EzField, EzLayout, EzFormLayout, Component, Open};

describe('EzField', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});
  visualSnapshots({markdown: ezTextAreaTests, scope});
  visualSnapshots({markdown: ezSelectTests, scope: {...scope, fireEvent}});

  it('should render with disabled input', () => {
    const {container} = render(<EzField label="Disabled input" disabled />);

    expect(getByLabelText(container, 'Disabled input')).toHaveAttribute('disabled');
  });

  describe('radio button list', () => {
    const radiobuttonProps = {
      label: 'Single choice list',
      type: 'radio' as 'radio',
      options: [
        {label: 'Choice A', value: 'a'},
        {label: 'Choice B', value: 'b'},
        {label: 'Choice C', value: 'c'},
      ],
    };

    it('should render radio button with correct selection', () => {
      const {container} = render(<EzField {...radiobuttonProps} value="c" />);

      expect(getByLabelText(container, 'Choice A')).toHaveProperty('checked', false);
      expect(getByLabelText(container, 'Choice B')).toHaveProperty('checked', false);
      expect(getByLabelText(container, 'Choice C')).toHaveProperty('checked', true);

      const input = getByLabelText(container, 'Choice B');

      fireEvent.change(input, {target: {checked: true}});

      expect(getByLabelText(container, 'Choice A')).toHaveProperty('checked', false);
      expect(getByLabelText(container, 'Choice B')).toHaveProperty('checked', true);
      expect(getByLabelText(container, 'Choice C')).toHaveProperty('checked', false);
    });

    it('should publish change event with the selected option', () => {
      let value;
      const onChange = e => {
        value = e.target.value;
      };
      const {container} = render(<EzField {...radiobuttonProps} onChange={onChange} value="c" />);

      const input = getByLabelText(container, 'Choice B');

      fireEvent.click(input);

      expect(value).toEqual('b');
    });
  });

  describe('check box list', () => {
    const checkboxProps = {
      label: 'Multiple choice list',
      type: 'checkbox' as 'checkbox',
      multiple: true as true,
      options: [
        {label: 'Choice A', value: 'a'},
        {label: 'Choice B', value: 'b'},
        {label: 'Choice C', value: 'c'},
      ],
    };

    it('should render checklist with correctly selected options', () => {
      const {container} = render(<EzField {...checkboxProps} value={['a', 'c']} />);
      expect(getByLabelText(container, 'Choice A')).toHaveProperty('checked', true);
      expect(getByLabelText(container, 'Choice B')).toHaveProperty('checked', false);
      expect(getByLabelText(container, 'Choice C')).toHaveProperty('checked', true);

      const input = getByLabelText(container, 'Choice C');

      fireEvent.change(input, {target: {checked: false}});

      expect(getByLabelText(container, 'Choice A')).toHaveProperty('checked', true);
      expect(getByLabelText(container, 'Choice B')).toHaveProperty('checked', false);
      expect(getByLabelText(container, 'Choice C')).toHaveProperty('checked', false);
    });

    it('should publish change event with the newly selected options', () => {
      let value;
      const onChange = e => {
        value = e.target.value;
      };
      const {container} = render(
        <EzField {...checkboxProps} value={['a', 'c']} onChange={onChange} />
      );

      fireEvent.click(getByLabelText(container, 'Choice B'));

      expect(value.sort()).toEqual(['a', 'b', 'c']);
    });

    it('should publish change event that does NOT include the unchecked option', () => {
      let value;
      const onChange = e => {
        value = e.target.value;
      };
      const {container} = render(
        <EzField {...checkboxProps} value={['a', 'c']} onChange={onChange} />
      );

      fireEvent.click(getByLabelText(container, 'Choice C'));

      expect(value).toEqual(['a']);
    });
  });

  describe('select list', () => {
    const inputLabel = 'Select dropdown';
    const options = [
      {label: 'All Upcoming', value: 'upcoming'},
      {label: 'Today', value: 'today'},
      {label: 'Tomorrow', value: 'tomorrow'},
      {label: 'All Time', value: 'all'},
      {label: 'Yesterday', value: 'yesterday'},
      {label: 'Last 7 Days', value: 'week'},
      {label: 'This Month', value: 'month'},
    ];

    it('should suppress default browser behavior to select input text when tab focused', () => {
      const {container} = render(
        <EzField type="select" label={inputLabel} options={options} value="upcoming" />
      );

      const input = getByLabelText(container, inputLabel) as HTMLInputElement;

      // NOTE: We can't actually simulate the tab key causing the focus/select behavior
      // as firing events does not change focus
      // see: https://github.com/jsdom/jsdom/issues/2102#issuecomment-355340966
      input.select();
      act(() => ReactTestUtils.Simulate.select(input));

      expect(input.selectionEnd - input.selectionStart).toEqual(0);
    });

    it('should move virtual focus with arrow keys', () => {
      const {container} = render(
        <EzField type="select" label={inputLabel} options={options} value="upcoming" />
      );

      const input = getByLabelText(container, inputLabel) as HTMLInputElement;

      const keyDown = key => fireEvent.keyDown(input, {key});

      keyDown('ArrowDown');

      const option1 = getByText(container, 'All Upcoming');
      const option2 = getByText(container, 'Today');
      const lastOption = getByText(container, 'This Month');

      expect(option1).toHaveAttribute('aria-selected', 'true');
      expect(option2).toHaveAttribute('aria-selected', 'false');

      keyDown('ArrowDown');

      expect(option1).toHaveAttribute('aria-selected', 'false');
      expect(option2).toHaveAttribute('aria-selected', 'true');

      keyDown('ArrowUp');

      expect(option1).toHaveAttribute('aria-selected', 'true');
      expect(option2).toHaveAttribute('aria-selected', 'false');

      keyDown('ArrowUp');

      expect(lastOption).toHaveAttribute('aria-selected', 'true');
      expect(option1).toHaveAttribute('aria-selected', 'false');

      keyDown('ArrowDown');

      expect(option1).toHaveAttribute('aria-selected', 'true');
      expect(lastOption).toHaveAttribute('aria-selected', 'false');
    });

    it('should move virtual focus by matching typed characters to an option', () => {
      const {container} = render(
        <EzField type="select" label={inputLabel} options={options} value="today" />
      );

      const input = getByLabelText(container, inputLabel) as HTMLInputElement;

      const keyDown = key => fireEvent.keyDown(input, {key});

      // open the menu
      keyDown('ArrowDown');

      const optionAllUpcoming = getByText(container, 'All Upcoming');
      const optionAllTime = getByText(container, 'All Time');

      expect(optionAllUpcoming).toHaveAttribute('aria-selected', 'false');
      expect(optionAllTime).toHaveAttribute('aria-selected', 'false');

      keyDown('a');

      expect(optionAllUpcoming).toHaveAttribute('aria-selected', 'true');
      expect(optionAllTime).toHaveAttribute('aria-selected', 'false');

      keyDown('l');
      keyDown('l');
      keyDown(' ');
      keyDown('t');

      expect(optionAllUpcoming).toHaveAttribute('aria-selected', 'false');
      expect(optionAllTime).toHaveAttribute('aria-selected', 'true');

      // ignore subsequent "misses"
      keyDown('z');

      expect(optionAllUpcoming).toHaveAttribute('aria-selected', 'false');
      expect(optionAllTime).toHaveAttribute('aria-selected', 'true');

      // ignore non-alphanumeric characters
      keyDown('*');

      expect(optionAllUpcoming).toHaveAttribute('aria-selected', 'false');
      expect(optionAllTime).toHaveAttribute('aria-selected', 'true');
    });

    it('should close the dropdown when escape is pressed', () => {
      const {container, queryByText} = render(
        <EzField type="select" label={inputLabel} options={options} value="upcoming" />
      );

      const input = getByLabelText(container, inputLabel) as HTMLInputElement;

      const keyDown = key => fireEvent.keyDown(input, {key});

      fireEvent.mouseDown(input);

      expect(queryByText('Today')).not.toBeNull();

      keyDown('Escape');

      expect(queryByText('Today')).toBeNull();
    });

    it('should trigger onChange for the current item when enter is pressed', () => {
      const onChange = jest.fn();

      const {container} = render(
        <EzField
          type="select"
          label={inputLabel}
          options={options}
          value="upcoming"
          onChange={onChange}
        />
      );

      const input = getByLabelText(container, inputLabel) as HTMLInputElement;

      const keyDown = key => fireEvent.keyDown(input, {key});

      // open the menu
      keyDown('ArrowDown');

      // select the second next option (value is "today")
      keyDown('ArrowDown');

      keyDown('Enter');

      expect(onChange).toHaveBeenCalled();

      const lastCall = onChange.mock.calls[onChange.mock.calls.length - 1];

      expect(lastCall[0].target.value).toEqual('today');
    });

    it('should trigger onChange for the current item when space is pressed', () => {
      const onChange = jest.fn();

      const {container} = render(
        <EzField
          type="select"
          label={inputLabel}
          options={options}
          value="upcoming"
          onChange={onChange}
        />
      );

      const input = getByLabelText(container, inputLabel) as HTMLInputElement;

      const keyDown = key => fireEvent.keyDown(input, {key});

      // open the menu
      keyDown('ArrowDown');

      // select the second next option (value is "today")
      keyDown('ArrowDown');

      keyDown(' ');

      expect(onChange).toHaveBeenCalled();

      const lastCall = onChange.mock.calls[onChange.mock.calls.length - 1];

      expect(lastCall[0].target.value).toEqual('today');
    });

    it('should trigger onChange for the current item when clicked', () => {
      const onChange = jest.fn();

      const {container} = render(
        <EzField
          type="select"
          label={inputLabel}
          options={options}
          value="upcoming"
          onChange={onChange}
        />
      );

      const input = getByLabelText(container, inputLabel) as HTMLInputElement;

      // open the menu
      fireEvent.mouseDown(input);

      const option2 = getByText(container, 'Today');

      fireEvent.mouseOver(option2);

      fireEvent.click(option2);

      expect(onChange).toHaveBeenCalled();

      const lastCall = onChange.mock.calls[onChange.mock.calls.length - 1];

      expect(lastCall[0].target.value).toEqual('today');
    });

    it('prevents the default event propogation on mouseDown on an option', () => {
      const onChange = jest.fn();

      const {container} = render(
        <EzField
          type="select"
          label={inputLabel}
          options={options}
          value="upcoming"
          onChange={onChange}
        />
      );

      const input = getByLabelText(container, inputLabel) as HTMLInputElement;

      // open the menu
      fireEvent.mouseDown(input);

      const option2 = getByText(container, 'Today');
      fireEvent.mouseOver(option2);
      const mockEvent = new MouseEvent('mousedown', {bubbles: true});
      Object.assign(mockEvent, {preventDefault: jest.fn()});

      fireEvent(option2, mockEvent);

      expect(mockEvent.preventDefault).toHaveBeenCalled();
    });

    it('should not trigger onChange on the initial render', () => {
      const onChange = jest.fn();

      render(
        <EzField
          type="select"
          label={inputLabel}
          options={options}
          value="upcoming"
          onChange={onChange}
        />
      );

      expect(onChange).not.toHaveBeenCalled();
    });

    it('should trigger onChange after matching typed characters to an option, even with the list is closed', () => {
      const onChange = jest.fn();

      const {container} = render(
        <EzField
          type="select"
          label={inputLabel}
          options={options}
          value="today"
          onChange={onChange}
        />
      );

      const input = getByLabelText(container, inputLabel) as HTMLInputElement;

      const keyDown = key => fireEvent.keyDown(input, {key});

      keyDown('y');

      expect(onChange).toHaveBeenCalled();

      const lastCall = onChange.mock.calls[onChange.mock.calls.length - 1];

      expect(lastCall[0].target.value).toEqual('yesterday');
    });

    it('should not trigger onChange when re-rendered with new props', () => {
      const onChange = jest.fn();

      const {rerender} = render(
        <EzField
          type="select"
          label={inputLabel}
          options={options}
          value="upcoming"
          onChange={onChange}
        />
      );
      // change to a new value
      rerender(
        <EzField
          type="select"
          label={inputLabel}
          options={options}
          value="tomorrow"
          onChange={onChange}
        />
      );
      // "reset" back to original value
      rerender(
        <EzField
          type="select"
          label={inputLabel}
          options={options}
          value="upcoming"
          onChange={onChange}
        />
      );

      expect(onChange).not.toHaveBeenCalled();
    });
  });

  it('should generate the correct time range options', () => {
    const timeRange = useTimeRangeOptions({start: '9:00 am', end: '5:00 pm', step: 60});

    expect(timeRange.length).toBe(9);
  });

  it('should generate the correct time range options (without space between time and meridiem)', () => {
    const timeRange = useTimeRangeOptions({start: '9:00am', end: '5:00pm', step: 60});

    expect(timeRange.length).toBe(9);
  });

  it('should update character count as the user enters text', () => {
    const {container} = render(<EzField label="Character Name" maxLength={120} />);

    expect(container).toHaveTextContent('0/120');

    const input = getByLabelText(container, 'Character Name');

    fireEvent.change(input, {target: {value: 'Oscar the grouch'}});

    expect(container).toHaveTextContent('16/120');
  });

  it('should call provided onChange handler if the input changes', () => {
    const spy = jest.fn();
    const {container} = render(<EzField label="Basic Text" onChange={spy} />);

    const input = getByLabelText(container, 'Basic Text');

    fireEvent.change(input, {target: {value: 'new value'}});

    expect(spy).toHaveBeenCalled();
  });

  it('should NOT update character count if the provided onChange handler prevents default', () => {
    const {container} = render(
      <EzField label="Character Name" maxLength={120} onChange={e => e.preventDefault()} />
    );

    expect(container).toHaveTextContent('0/120');

    const input = getByLabelText(container, 'Character Name');

    fireEvent.change(input, {target: {value: 'Oscar the grouch'}});

    expect(container).toHaveTextContent('0/120');
  });

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<EzField label="Basic text" />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
