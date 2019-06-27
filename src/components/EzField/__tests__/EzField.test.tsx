import React from 'react';
import {visualSnapshots} from 'sosia';
import dayjs from 'dayjs';
import {axe} from 'jest-axe';
import 'jest-dom/extend-expect';
import {act} from 'react-test-renderer';
import {getByLabelText, getByText, fireEvent} from 'react-testing-library';
import Component from 'react-component-component';
import ezDateInputTests from './EzDateInput.test.md';
import regressionTests from './EzField.test.md';
import markdown from '../EzField.md';
import EzField from '../EzField';
import {fullRender as render, renderToHtml} from '../../../jest-globals';
import {EzFormLayout, EzLayout} from '../../index';

const scope = {EzField, EzLayout, EzFormLayout, Component};

describe('EzField', () => {
  visualSnapshots({markdown, scope});
  visualSnapshots({markdown: regressionTests, scope});
  visualSnapshots({markdown: ezDateInputTests, scope});

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

  describe('date picker', () => {
    const inputLabel = 'Select delievery date';
    it('should show calendar on focus', () => {
      const {container} = render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.focus(getByLabelText(container, inputLabel));

      expect(container).toHaveTextContent('January 2019');
    });
    it('should show calendar on current date if value is empty', () => {
      const {container} = render(<EzField type="date" value="" label={inputLabel} />);

      fireEvent.focus(getByLabelText(container, inputLabel));

      expect(container).toHaveTextContent(dayjs().format('MMMM YYYY'));
    });
    it('should decrement month on calendar', () => {
      const {container} = render(
        <EzField type="date" value="01/01/2019" label={inputLabel} autoFocus />
      );

      fireEvent.click(getByText(container, /Prev/));

      expect(container).toHaveTextContent('December 2018');
    });
    it('should increment month on calendar', () => {
      const {container} = render(
        <EzField type="date" value="01/01/2019" label={inputLabel} autoFocus />
      );

      fireEvent.click(getByText(container, /Next/));

      expect(container).toHaveTextContent('February 2019');
    });
    it('should change dates by pressing the left arrow on calendar', () => {
      const {container} = render(
        <EzField type="date" value="01/01/2019" label={inputLabel} autoFocus />
      );

      fireEvent.keyDown(getByText(container, '1'), {key: 'ArrowLeft'});

      expect(container).toHaveTextContent('December 2018');
    });
    it('should change dates by pressing the right arrow on calendar', () => {
      const {container} = render(
        <EzField type="date" value="01/01/2019" label={inputLabel} autoFocus />
      );

      fireEvent.keyDown(getByText(container, '1'), {key: 'ArrowRight'});

      expect(getByText(container, '2').getAttribute('tabindex')).toBe('0');
    });
    it('should change dates by pressing the down arrow on calendar', () => {
      const {container} = render(
        <EzField type="date" value="01/01/2019" label={inputLabel} autoFocus />
      );

      fireEvent.keyDown(getByText(container, '1'), {key: 'ArrowDown'});

      expect(getByText(container, '8').getAttribute('tabindex')).toBe('0');
    });
    it('should change dates by pressing the up arrow on calendar', () => {
      const {container} = render(
        <EzField type="date" value="01/01/2019" label={inputLabel} autoFocus />
      );

      fireEvent.keyDown(getByText(container, '1'), {key: 'ArrowUp'});

      expect(getByText(container, '25').getAttribute('tabindex')).toBe('0');
      expect(container).toHaveTextContent('December 2018');
    });
    it('should select change dates by pressing the enter key on calendar', async () => {
      const {container} = render(
        <EzField type="date" value="01/01/2019" label={inputLabel} autoFocus />
      );

      fireEvent.keyDown(getByText(container, '1'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(getByText(container, '2'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(getByText(container, '3'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(getByText(container, '4'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(getByText(container, '5'), {key: 'Enter'});

      fireEvent.focus(getByLabelText(container, inputLabel));
      expect(getByText(container, '5').getAttribute('tabindex')).toBe('0');
    });
    it('should select change dates by pressing the space key on calendar', async () => {
      const {container} = render(
        <EzField type="date" value="01/01/2019" label={inputLabel} autoFocus />
      );

      fireEvent.keyDown(getByText(container, '1'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(getByText(container, '2'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(getByText(container, '3'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(getByText(container, '4'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(getByText(container, '5'), {key: 'Space'});

      fireEvent.focus(getByLabelText(container, inputLabel));
      expect(getByText(container, '5').getAttribute('tabindex')).toBe('0');
    });
    it('should fire onchange when day is typed', () => {
      const handleChange = jest.fn();
      const {container} = render(
        <EzField
          type="date"
          value="01/01/2019"
          label={inputLabel}
          autoFocus
          onChange={handleChange}
        />
      );

      const input = container.querySelector('input');

      act(() => {
        fireEvent.change(input, {target: {value: '02/01/2019'}});
      });

      expect(handleChange).toHaveBeenCalled();
    });
    it('should fire onchange when day is clicked', async () => {
      const handleChange = jest.fn();
      const {container} = render(
        <EzField
          type="date"
          value="01/01/2019"
          label={inputLabel}
          autoFocus
          onChange={handleChange}
        />
      );

      act(() => {
        fireEvent.click(getByText(container, '5'));
      });

      expect(handleChange).toHaveBeenCalled();
    });
    it('should hide calendar when day is clicked', async () => {
      const {container} = render(
        <EzField type="date" value="01/01/2019" label={inputLabel} autoFocus />
      );

      expect(container).toHaveTextContent('January 2019');

      act(() => {
        fireEvent.click(getByText(container, '1'));
      });

      // Calendar is still visible for 100 milliseconds to make clicking feel more solid
      expect(container).toHaveTextContent('January 2019');

      await new Promise(resolve => {
        setTimeout(() => {
          // Calendar has closed after 100 milliseconds
          expect(container).not.toHaveTextContent('January 2019');
          resolve();
        }, 200);
      });
    });
    it('should hide calendar on escape', () => {
      const {container} = render(
        <EzField type="date" value="01/01/2019" autoFocus label={inputLabel} />
      );

      expect(container).toHaveTextContent('January 2019');

      fireEvent.keyDown(getByLabelText(container, inputLabel), {key: 'Escape'});

      expect(container).not.toHaveTextContent('January 2019');

      fireEvent.focus(getByLabelText(container, inputLabel));

      expect(container).toHaveTextContent('January 2019');

      // press escape when focused on a day
      fireEvent.keyDown(getByText(container, '3'), {key: 'Escape'});

      expect(container).not.toHaveTextContent('January 2019');
    });
    it('should hide calendar on escape and then open after click inside input', () => {
      const {container} = render(
        <EzField type="date" value="01/01/2019" autoFocus label={inputLabel} />
      );

      expect(container).toHaveTextContent('January 2019');

      fireEvent.keyDown(getByLabelText(container, inputLabel), {key: 'Escape'});

      expect(container).not.toHaveTextContent('January 2019');

      fireEvent.click(getByLabelText(container, inputLabel));

      expect(container).toHaveTextContent('January 2019');
    });
    it('should toggle calendar on enter', () => {
      const {container} = render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      expect(container).not.toHaveTextContent('January 2019');

      fireEvent.keyDown(getByLabelText(container, inputLabel), {key: 'Enter'});

      expect(container).toHaveTextContent('January 2019');

      fireEvent.keyDown(getByLabelText(container, inputLabel), {key: 'Enter'});

      expect(container).not.toHaveTextContent('January 2019');

      fireEvent.keyDown(getByLabelText(container, inputLabel), {key: 'Enter'});

      expect(container).toHaveTextContent('January 2019');
    });
    it('should hide calendar on click outside', async () => {
      const {container} = render(
        <>
          <button type="button">Outside Button</button>
          <EzField type="date" value="01/01/2019" autoFocus label={inputLabel} />
        </>
      );

      expect(container).toHaveTextContent('January 2019');

      fireEvent.mouseDown(getByText(container, /Outside Button/));

      await new Promise(resolve => {
        setTimeout(() => {
          expect(container).not.toHaveTextContent('January 2019');
          resolve();
        }, 100);
      });
    });
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
