import React from 'react';
import {visualSnapshots} from 'sosia';
import {getByLabelText, getByText, fireEvent, act} from '@testing-library/react';
import ReactTestUtils from 'react-dom/test-utils';
import ezSelectTests from './EzSelect.test.md';
import EzField from '../EzField';
import {fullRender as render} from '../../../jest-globals';
import {EzFormLayout, EzLayout} from '../../index';
import Open from '../Open';

const scope = {EzField, EzLayout, EzFormLayout, Open};

describe('EzField', () => {
  visualSnapshots({markdown: ezSelectTests, scope: {...scope, fireEvent}});

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

    it('prevents the default event propagation on mouseDown on an option', () => {
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

    it('should support choices with numeric values', () => {
      const onChange = jest.fn();

      const optionsWithNumericValues = [
        {label: 'Short', value: 5},
        {label: 'Medium', value: 10},
        {label: 'Long', value: 15},
      ];

      const {container} = render(
        <EzField
          type="select"
          label={inputLabel}
          options={optionsWithNumericValues}
          value={5}
          onChange={onChange}
        />
      );

      const input = getByLabelText(container, inputLabel) as HTMLInputElement;

      const keyDown = key => fireEvent.keyDown(input, {key});

      // open the menu
      keyDown('ArrowDown');

      // select the second next option (value is "Medium")
      keyDown('ArrowDown');

      keyDown('Enter');

      expect(onChange).toHaveBeenCalled();

      const lastCall = onChange.mock.calls[onChange.mock.calls.length - 1];

      expect(lastCall[0].target.value).toEqual(10);
    });
  });
});
