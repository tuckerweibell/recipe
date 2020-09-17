import React from 'react';
import {visualSnapshots} from 'sosia';
import dayjs from 'dayjs';
import {fireEvent, act, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ezDateInputTests from './EzDateInput.test.md';
import EzField from '../EzField';
import {fullRender as render} from '../../../jest-globals';
import {EzFormLayout, EzLayout} from '../../index';
import Open from '../Open';
import Media from '../Media';
import EzModal from '../../EzModal';

const scope = {EzField, EzLayout, EzFormLayout, Open, Media, EzModal};

describe('EzField', () => {
  visualSnapshots({markdown: ezDateInputTests, scope});

  describe('date picker', () => {
    const inputLabel = 'Select delivery date';
    afterEach(jest.useRealTimers);
    it('should show calendar on click', () => {
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.mouseDown(screen.getByLabelText(inputLabel));

      expect(document.body).toHaveTextContent('January 2019');
    });
    it('should show calendar on current date if value is empty', () => {
      render(<EzField type="date" value="" label={inputLabel} />);

      fireEvent.mouseDown(screen.getByLabelText(inputLabel));

      expect(document.body).toHaveTextContent(dayjs().format('MMMM YYYY'));
    });
    it('should decrement month on calendar', () => {
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.mouseDown(screen.getByLabelText(inputLabel));
      fireEvent.click(screen.getByText(/Prev/));

      expect(document.body).toHaveTextContent('December 2018');
    });
    it('should increment month on calendar', () => {
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.mouseDown(screen.getByLabelText(inputLabel));
      fireEvent.click(screen.getByText(/Next/));

      expect(document.body).toHaveTextContent('February 2019');
    });
    it('should change dates by pressing the left arrow on calendar', () => {
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.mouseDown(screen.getByLabelText(inputLabel));
      fireEvent.keyDown(screen.getByText('1'), {key: 'ArrowLeft'});

      expect(document.body).toHaveTextContent('December 2018');
    });
    it('should change dates by pressing the right arrow on calendar', () => {
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.mouseDown(screen.getByLabelText(inputLabel));
      fireEvent.keyDown(screen.getByText('1'), {key: 'ArrowRight'});

      expect(screen.getByText('2').getAttribute('tabindex')).toBe('0');
    });
    it('should change dates by pressing the down arrow on calendar', () => {
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.mouseDown(screen.getByLabelText(inputLabel));
      fireEvent.keyDown(screen.getByText('1'), {key: 'ArrowDown'});

      expect(screen.getByText('8').getAttribute('tabindex')).toBe('0');
    });
    it('should change dates by pressing the up arrow on calendar', () => {
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.mouseDown(screen.getByLabelText(inputLabel));
      fireEvent.keyDown(screen.getByText('1'), {key: 'ArrowUp'});

      expect(screen.getByText('25').getAttribute('tabindex')).toBe('0');
      expect(document.body).toHaveTextContent('December 2018');
    });
    it('should select change dates by pressing the enter key on calendar', async () => {
      jest.useFakeTimers();

      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.mouseDown(screen.getByLabelText(inputLabel));

      fireEvent.keyDown(screen.getByText('1'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(screen.getByText('2'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(screen.getByText('3'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(screen.getByText('4'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(screen.getByText('5'), {key: 'Enter'});

      act(jest.runAllTimers);
      fireEvent.mouseDown(screen.getByLabelText(inputLabel));
      expect(screen.getByText('5').getAttribute('tabindex')).toBe('0');
    });
    it('should select change dates by pressing the space key on calendar', async () => {
      jest.useFakeTimers();
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.mouseDown(screen.getByLabelText(inputLabel));

      fireEvent.keyDown(screen.getByText('1'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(screen.getByText('2'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(screen.getByText('3'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(screen.getByText('4'), {key: 'ArrowRight'}); // Day
      fireEvent.keyDown(screen.getByText('5'), {key: 'Space'});

      act(jest.runAllTimers);
      fireEvent.mouseDown(screen.getByLabelText(inputLabel));
      expect(screen.getByText('5').getAttribute('tabindex')).toBe('0');
    });
    it('should fire onchange when day is typed', () => {
      const handleChange = jest.fn();
      const {container} = render(
        <EzField type="date" value="01/01/2019" label={inputLabel} onChange={handleChange} />
      );

      fireEvent.mouseDown(screen.getByLabelText(inputLabel));

      const input = container.querySelector('input');

      userEvent.type(input, '02/01/2019');

      expect(handleChange).toHaveBeenCalled();
    });
    it('should fire onchange when day is clicked', async () => {
      const handleChange = jest.fn();
      render(<EzField type="date" value="01/01/2019" label={inputLabel} onChange={handleChange} />);

      fireEvent.mouseDown(screen.getByLabelText(inputLabel));

      act(() => {
        fireEvent.click(screen.getByText('5'));
      });

      expect(handleChange).toHaveBeenCalled();
    });
    it('should hide calendar when day is clicked', () => {
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.mouseDown(screen.getByLabelText(inputLabel));

      expect(document.body).toHaveTextContent('January 2019');

      fireEvent.click(screen.getByText('1'));

      expect(document.body).not.toHaveTextContent('January 2019');
    });
    it('should ignore clicks and enter key on disabled dates', () => {
      jest.useFakeTimers();

      render(
        <EzField
          type="date"
          value="01/20/2020"
          minDate={'01/20/2020'}
          maxDate={'01/24/2020'}
          label={inputLabel}
        />
      );

      // open the calendar picker
      fireEvent.mouseDown(screen.getByLabelText(inputLabel));

      expect(document.body).toHaveTextContent('January 2020');

      // click on a date that is before the minDate
      act(() => {
        fireEvent.click(screen.getByText('15'));
      });

      // Fast-forward until all timers have been executed
      act(jest.runAllTimers);

      // assert calendar is still open
      expect(document.body).toHaveTextContent('January 2020');

      // now try selecting the disabled date with the keyboard
      act(() => {
        fireEvent.keyDown(screen.getByText('20'), {key: 'ArrowLeft'});
        fireEvent.keyDown(screen.getByText('19'), {key: 'Enter'});
      });

      // Fast-forward until all timers have been executed
      act(jest.runAllTimers);

      // assert calendar is still open
      expect(document.body).toHaveTextContent('January 2020');
    });
    it('should hide calendar on escape', () => {
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      fireEvent.mouseDown(screen.getByLabelText(inputLabel));

      expect(document.body).toHaveTextContent('January 2019');

      fireEvent.keyDown(screen.getByLabelText(inputLabel), {key: 'Escape'});

      expect(document.body).not.toHaveTextContent('January 2019');

      fireEvent.mouseDown(screen.getByLabelText(inputLabel));

      expect(document.body).toHaveTextContent('January 2019');

      // press escape when focused on a day
      fireEvent.keyDown(screen.getByText('3'), {key: 'Escape'});

      expect(document.body).not.toHaveTextContent('January 2019');
    });
    it('should fire onchange AFTER day is clicked', async () => {
      const handleChange = jest.fn();
      render(<EzField type="date" value="01/01/2019" label={inputLabel} onChange={handleChange} />);

      expect(handleChange).not.toHaveBeenCalled();

      fireEvent.mouseDown(screen.getByLabelText(inputLabel));

      act(() => {
        fireEvent.click(screen.getByText('5'));
      });

      expect(handleChange).toHaveBeenCalledTimes(1);
    });
    it('should focus calendar when tabbing from date input', async () => {
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      const input = screen.getByLabelText(inputLabel);

      input.focus();

      fireEvent.mouseDown(input);

      expect(document.body).toHaveTextContent('January 2019');

      expect(document.activeElement).toBe(input);

      userEvent.tab();

      expect(screen.getByRole('dialog')).toContainElement(document.activeElement as HTMLElement);
    });
  });
});
