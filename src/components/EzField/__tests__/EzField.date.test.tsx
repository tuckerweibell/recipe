import React from 'react';
import {visualSnapshots} from 'sosia';
import dayjs from 'dayjs';
import {getByLabelText, getByText, fireEvent, act} from '@testing-library/react';
import ezDateInputTests from './EzDateInput.test.md';
import EzField from '../EzField';
import {fullRender as render} from '../../../jest-globals';
import {EzFormLayout, EzLayout} from '../../index';
import Open from '../Open';

const scope = {EzField, EzLayout, EzFormLayout, Open};

describe('EzField', () => {
  visualSnapshots({markdown: ezDateInputTests, scope});

  describe('date picker', () => {
    const inputLabel = 'Select delivery date';
    afterEach(jest.useRealTimers);
    it('should show calendar on click', () => {
      const {container} = render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.mouseDown(getByLabelText(container, inputLabel));

      expect(container).toHaveTextContent('January 2019');
    });
    it('should show calendar on current date if value is empty', () => {
      const {container} = render(<EzField type="date" value="" label={inputLabel} />);

      fireEvent.mouseDown(getByLabelText(container, inputLabel));

      expect(container).toHaveTextContent(dayjs().format('MMMM YYYY'));
    });
    it('should decrement month on calendar', () => {
      const {container} = render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.mouseDown(getByLabelText(container, inputLabel));

      fireEvent.click(getByText(container, /Prev/));

      expect(container).toHaveTextContent('December 2018');
    });
    it('should increment month on calendar', () => {
      const {container} = render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.mouseDown(getByLabelText(container, inputLabel));

      fireEvent.click(getByText(container, /Next/));

      expect(container).toHaveTextContent('February 2019');
    });
    it('should change dates by pressing the left arrow on calendar', () => {
      const {container} = render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.mouseDown(getByLabelText(container, inputLabel));

      fireEvent.keyDown(getByText(container, '1'), {key: 'ArrowLeft'});

      expect(container).toHaveTextContent('December 2018');
    });
    it('should change dates by pressing the right arrow on calendar', () => {
      const {container} = render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.mouseDown(getByLabelText(container, inputLabel));

      fireEvent.keyDown(getByText(container, '1'), {key: 'ArrowRight'});

      expect(getByText(container, '2').getAttribute('tabindex')).toBe('0');
    });
    it('should change dates by pressing the down arrow on calendar', () => {
      const {container} = render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.mouseDown(getByLabelText(container, inputLabel));

      fireEvent.keyDown(getByText(container, '1'), {key: 'ArrowDown'});

      expect(getByText(container, '8').getAttribute('tabindex')).toBe('0');
    });
    it('should change dates by pressing the up arrow on calendar', () => {
      const {container} = render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.mouseDown(getByLabelText(container, inputLabel));

      fireEvent.keyDown(getByText(container, '1'), {key: 'ArrowUp'});

      expect(getByText(container, '25').getAttribute('tabindex')).toBe('0');
      expect(container).toHaveTextContent('December 2018');
    });
    it('should select change dates by pressing the enter key on calendar', async () => {
      jest.useFakeTimers();
      const {container} = render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.mouseDown(getByLabelText(container, inputLabel));

      fireEvent.keyDown(getByText(container, '1'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(getByText(container, '2'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(getByText(container, '3'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(getByText(container, '4'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(getByText(container, '5'), {key: 'Enter'});

      act(jest.runAllTimers);
      fireEvent.mouseDown(getByLabelText(container, inputLabel));
      expect(getByText(container, '5').getAttribute('tabindex')).toBe('0');
    });
    it('should select change dates by pressing the space key on calendar', async () => {
      jest.useFakeTimers();
      const {container} = render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.mouseDown(getByLabelText(container, inputLabel));

      fireEvent.keyDown(getByText(container, '1'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(getByText(container, '2'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(getByText(container, '3'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(getByText(container, '4'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(getByText(container, '5'), {key: 'Space'});

      act(jest.runAllTimers);
      fireEvent.mouseDown(getByLabelText(container, inputLabel));
      expect(getByText(container, '5').getAttribute('tabindex')).toBe('0');
    });
    it('should fire onchange when day is typed', () => {
      const handleChange = jest.fn();
      const {container} = render(
        <EzField type="date" value="01/01/2019" label={inputLabel} onChange={handleChange} />
      );

      fireEvent.mouseDown(getByLabelText(container, inputLabel));

      const input = container.querySelector('input');

      act(() => {
        fireEvent.change(input, {target: {value: '02/01/2019'}});
      });

      expect(handleChange).toHaveBeenCalled();
    });
    it('should fire onchange when day is clicked', async () => {
      const handleChange = jest.fn();
      const {container} = render(
        <EzField type="date" value="01/01/2019" label={inputLabel} onChange={handleChange} />
      );

      fireEvent.mouseDown(getByLabelText(container, inputLabel));

      act(() => {
        fireEvent.click(getByText(container, '5'));
      });

      expect(handleChange).toHaveBeenCalled();
    });
    it('should hide calendar when day is clicked', () => {
      jest.useFakeTimers();

      const {container} = render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.mouseDown(getByLabelText(container, inputLabel));

      expect(container).toHaveTextContent('January 2019');

      act(() => {
        fireEvent.click(getByText(container, '1'));
      });

      // Calendar is still visible for 100 milliseconds to make clicking feel more solid
      expect(container).toHaveTextContent('January 2019');

      // Fast-forward until all timers have been executed
      act(jest.runAllTimers);

      expect(container).not.toHaveTextContent('January 2019');
    });
    it('should hide calendar on escape', () => {
      const {container} = render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.mouseDown(getByLabelText(container, inputLabel));

      expect(container).toHaveTextContent('January 2019');

      fireEvent.keyDown(getByLabelText(container, inputLabel), {key: 'Escape'});

      expect(container).not.toHaveTextContent('January 2019');

      fireEvent.mouseDown(getByLabelText(container, inputLabel));

      expect(container).toHaveTextContent('January 2019');

      // press escape when focused on a day
      fireEvent.keyDown(getByText(container, '3'), {key: 'Escape'});

      expect(container).not.toHaveTextContent('January 2019');
    });
    it('should hide calendar on click outside', async () => {
      const {container} = render(
        <>
          <button type="button">Outside Button</button>
          <EzField type="date" value="01/01/2019" label={inputLabel} />
        </>
      );

      fireEvent.mouseDown(getByLabelText(container, inputLabel));

      expect(container).toHaveTextContent('January 2019');

      fireEvent.mouseDown(getByText(container, /Outside Button/));

      expect(container).not.toHaveTextContent('January 2019');
    });
  });
});
