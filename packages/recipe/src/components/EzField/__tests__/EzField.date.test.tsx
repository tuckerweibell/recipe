import React from 'react';
import {visualSnapshots} from 'sosia';
import dayjs from 'dayjs';
import {render, fireEvent, act, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ezDateInputTests from './EzDateInput.test.md';
import EzField from '../EzField';
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

      userEvent.click(screen.getByLabelText(inputLabel));

      expect(document.body).toHaveTextContent('January 2019');
    });
    it('should show calendar on current date if value is empty', () => {
      render(<EzField type="date" value="" label={inputLabel} />);

      userEvent.click(screen.getByLabelText(inputLabel));

      expect(document.body).toHaveTextContent(dayjs().format('MMMM YYYY'));
    });
    it('should decrement month on calendar', () => {
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      userEvent.click(screen.getByLabelText(inputLabel));
      fireEvent.click(screen.getByText(/Prev/));

      expect(document.body).toHaveTextContent('December 2018');
    });
    it('should increment month on calendar', () => {
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      userEvent.click(screen.getByLabelText(inputLabel));
      fireEvent.click(screen.getByText(/Next/));

      expect(document.body).toHaveTextContent('February 2019');
    });
    it('should change dates by pressing the left arrow on calendar', () => {
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      userEvent.click(screen.getByLabelText(inputLabel));
      userEvent.tab();

      screen.getByRole('button', {name: /January 1,/}, {exact: false}).focus();
      fireEvent.keyDown(screen.getByRole('button', {name: /January 1,/}, {exact: false}), {
        key: 'ArrowLeft',
      });

      expect(document.body).toHaveTextContent('December 2018');
    });
    it('should change dates by pressing the right arrow on calendar', () => {
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      userEvent.click(screen.getByLabelText(inputLabel));
      userEvent.tab();
      fireEvent.keyDown(screen.getByRole('button', {name: /January 1,/}, {exact: false}), {
        key: 'ArrowRight',
      });

      expect(
        screen.getByRole('button', {name: /January 2,/}, {exact: false}).getAttribute('tabindex')
      ).toBe('0');
    });
    it('should change dates by pressing the down arrow on calendar', () => {
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      userEvent.click(screen.getByLabelText(inputLabel));
      userEvent.tab();
      fireEvent.keyDown(screen.getByRole('button', {name: /January 1,/}, {exact: false}), {
        key: 'ArrowDown',
      });

      expect(
        screen.getByRole('button', {name: /January 8,/}, {exact: false}).getAttribute('tabindex')
      ).toBe('0');
    });
    it('should change dates by pressing the up arrow on calendar', () => {
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      userEvent.click(screen.getByLabelText(inputLabel));
      userEvent.tab();
      fireEvent.keyDown(screen.getByRole('button', {name: /January 1,/}, {exact: false}), {
        key: 'ArrowUp',
      });

      expect(
        screen.getByRole('button', {name: /December 25,/}, {exact: false}).getAttribute('tabindex')
      ).toBe('0');
      expect(document.body).toHaveTextContent('December 2018');
    });
    it('should select change dates by pressing the enter key on calendar', async () => {
      jest.useFakeTimers();

      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      userEvent.click(screen.getByLabelText(inputLabel));
      userEvent.tab();

      fireEvent.keyDown(screen.getByRole('button', {name: /January 1,/}, {exact: false}), {
        key: 'ArrowRight',
      }); // Day
      fireEvent.keyDown(screen.getByRole('button', {name: /January 2,/}, {exact: false}), {
        key: 'ArrowRight',
      }); // Day
      fireEvent.keyDown(screen.getByRole('button', {name: /January 3,/}, {exact: false}), {
        key: 'ArrowRight',
      }); // Day
      fireEvent.keyDown(screen.getByRole('button', {name: /January 4,/}, {exact: false}), {
        key: 'ArrowRight',
      }); // Day
      fireEvent.keyDown(screen.getByRole('button', {name: /January 5,/}, {exact: false}), {
        key: 'Enter',
      });

      act(() => {
        jest.runAllTimers();
      });
      userEvent.click(screen.getByLabelText(inputLabel));
      expect(
        screen.getByRole('button', {name: /January 5,/}, {exact: false}).getAttribute('tabindex')
      ).toBe('0');
    });
    it('should select change dates by pressing the space key on calendar', async () => {
      jest.useFakeTimers();
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      userEvent.click(screen.getByLabelText(inputLabel));
      userEvent.tab();

      fireEvent.keyDown(screen.getByRole('button', {name: /January 1,/}, {exact: false}), {
        key: 'ArrowRight',
      }); // Day
      fireEvent.keyDown(screen.getByRole('button', {name: /January 2,/}, {exact: false}), {
        key: 'ArrowRight',
      }); // Day
      fireEvent.keyDown(screen.getByRole('button', {name: /January 3,/}, {exact: false}), {
        key: 'ArrowRight',
      }); // Day
      fireEvent.keyDown(screen.getByRole('button', {name: /January 4,/}, {exact: false}), {
        key: 'ArrowRight',
      }); // Day
      fireEvent.keyDown(screen.getByRole('button', {name: /January 5,/}, {exact: false}), {
        key: 'Space',
      });

      act(() => {
        jest.runAllTimers();
      });
      userEvent.click(screen.getByLabelText(inputLabel));
      expect(
        screen.getByRole('button', {name: /January 5,/}, {exact: false}).getAttribute('tabindex')
      ).toBe('0');
    });
    it('should fire onchange when day is typed', () => {
      const handleChange = jest.fn();
      const {container} = render(
        <EzField type="date" value="01/01/2019" label={inputLabel} onChange={handleChange} />
      );

      userEvent.click(screen.getByLabelText(inputLabel));

      const input = container.querySelector('input');

      userEvent.type(input, '02/01/2019');

      expect(handleChange).toHaveBeenCalled();
    });
    it('should fire onchange when day is clicked', async () => {
      const handleChange = jest.fn();
      render(<EzField type="date" value="01/01/2019" label={inputLabel} onChange={handleChange} />);

      userEvent.click(screen.getByLabelText(inputLabel));

      act(() => {
        fireEvent.click(screen.getByRole('button', {name: /January 5,/}, {exact: false}));
      });

      expect(handleChange).toHaveBeenCalled();
    });
    it('should hide calendar when day is clicked', () => {
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      userEvent.click(screen.getByLabelText(inputLabel));

      expect(document.body).toHaveTextContent('January 2019');

      fireEvent.click(screen.getByRole('button', {name: /January 1,/}, {exact: false}));

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
      userEvent.click(screen.getByLabelText(inputLabel));

      expect(document.body).toHaveTextContent('January 2020');

      // click on a date that is before the minDate
      act(() => {
        fireEvent.click(screen.getByText('15'));
      });

      // Fast-forward until all timers have been executed
      act(() => {
        jest.runAllTimers();
      });

      // assert calendar is still open
      expect(document.body).toHaveTextContent('January 2020');

      // now try selecting the disabled date with the keyboard
      act(() => {
        fireEvent.keyDown(screen.getByText('20'), {key: 'ArrowLeft'});
        fireEvent.keyDown(screen.getByText('19'), {key: 'Enter'});
      });

      // Fast-forward until all timers have been executed
      act(() => {
        jest.runAllTimers();
      });

      // assert calendar is still open
      expect(document.body).toHaveTextContent('January 2020');
    });
    it('should hide calendar on escape', () => {
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      userEvent.click(screen.getByLabelText(inputLabel));

      expect(document.body).toHaveTextContent('January 2019');

      fireEvent.keyDown(screen.getByLabelText(inputLabel), {key: 'Escape'});

      expect(document.body).not.toHaveTextContent('January 2019');

      userEvent.click(screen.getByLabelText(inputLabel));

      expect(document.body).toHaveTextContent('January 2019');

      // press escape when focused on a day
      fireEvent.keyDown(screen.getByRole('button', {name: /January 3,/}, {exact: false}), {
        key: 'Escape',
      });

      expect(document.body).not.toHaveTextContent('January 2019');
    });
    it('should fire onchange AFTER day is clicked', async () => {
      const handleChange = jest.fn();
      render(<EzField type="date" value="01/01/2019" label={inputLabel} onChange={handleChange} />);

      expect(handleChange).not.toHaveBeenCalled();

      userEvent.click(screen.getByLabelText(inputLabel));

      act(() => {
        fireEvent.click(screen.getByRole('button', {name: /January 5,/}, {exact: false}));
      });

      expect(handleChange).toHaveBeenCalledTimes(1);
    });
    it('should focus calendar when tabbing from date input', async () => {
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      const input = screen.getByLabelText(inputLabel);

      input.focus();

      userEvent.click(input);

      expect(document.body).toHaveTextContent('January 2019');

      expect(document.activeElement).toBe(input);

      userEvent.tab();

      expect(screen.getByRole('dialog')).toContainElement(document.activeElement as HTMLElement);
    });
    it('should call props onFocusCapture and onFocus', () => {
      const onFocus = jest.fn();
      const onFocusCapture = jest.fn();
      render(
        <EzField
          type="date"
          value="01/01/2019"
          label={inputLabel}
          onFocus={onFocus}
          onFocusCapture={onFocusCapture}
        />
      );

      userEvent.click(screen.getByLabelText(inputLabel));

      expect(onFocusCapture).toHaveBeenCalledTimes(1);
      expect(onFocus).toHaveBeenCalledTimes(1);
    });
  });
});
