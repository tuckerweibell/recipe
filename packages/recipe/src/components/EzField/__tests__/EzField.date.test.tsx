import React from 'react';
import dayjs from 'dayjs';
import {render, fireEvent, act, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EzField from '../EzField';

describe('EzField', () => {
  describe('date picker', () => {
    const inputLabel = 'Select delivery date';
    afterEach(jest.useRealTimers);

    it('should show calendar on click', async () => {
      const user = userEvent.setup();
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      await user.click(screen.getByLabelText(inputLabel));

      expect(document.body).toHaveTextContent('January 2019');
    });

    it('should show calendar by pressing the enter key', () => {
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      const container = screen.getByLabelText(inputLabel);

      fireEvent.keyDown(container, {key: 'Enter'});

      expect(document.body).toHaveTextContent('January 2019');
    });

    it('should show calendar on current date if value is empty', async () => {
      const user = userEvent.setup();
      render(<EzField type="date" value="" label={inputLabel} />);

      await user.click(screen.getByLabelText(inputLabel));

      expect(document.body).toHaveTextContent(dayjs().format('MMMM YYYY'));
    });

    it('should decrement month on calendar', async () => {
      const user = userEvent.setup();
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      await user.click(screen.getByLabelText(inputLabel));
      await user.click(screen.getByText(/Prev/));

      expect(document.body).toHaveTextContent('December 2018');
    });

    it('should increment month on calendar', async () => {
      const user = userEvent.setup();
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      await user.click(screen.getByLabelText(inputLabel));
      await user.click(screen.getByText(/Next/));

      expect(document.body).toHaveTextContent('February 2019');
    });

    it('should change dates by pressing the left arrow on calendar', async () => {
      const user = userEvent.setup();
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      await user.click(screen.getByLabelText(inputLabel));
      await user.tab();

      screen.getByRole('button', {name: /January 1,/}).focus();
      fireEvent.keyDown(screen.getByRole('button', {name: /January 1,/}), {
        key: 'ArrowLeft',
      });

      expect(document.body).toHaveTextContent('December 2018');
    });

    it('should change dates by pressing the right arrow on calendar', async () => {
      const user = userEvent.setup();
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      await user.click(screen.getByLabelText(inputLabel));
      await user.tab();
      fireEvent.keyDown(screen.getByRole('button', {name: /January 1,/}), {
        key: 'ArrowRight',
      });

      expect(screen.getByRole('button', {name: /January 2,/}).getAttribute('tabindex')).toBe('0');
    });

    it('should change dates by pressing the down arrow on calendar', async () => {
      const user = userEvent.setup();
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      await user.click(screen.getByLabelText(inputLabel));
      await user.tab();
      fireEvent.keyDown(screen.getByRole('button', {name: /January 1,/}), {
        key: 'ArrowDown',
      });

      expect(screen.getByRole('button', {name: /January 8,/}).getAttribute('tabindex')).toBe('0');
    });

    it('should change dates by pressing the up arrow on calendar', async () => {
      const user = userEvent.setup();
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      await user.click(screen.getByLabelText(inputLabel));
      await user.tab();
      fireEvent.keyDown(screen.getByRole('button', {name: /January 1,/}), {
        key: 'ArrowUp',
      });

      expect(screen.getByRole('button', {name: /December 25,/}).getAttribute('tabindex')).toBe('0');
      expect(document.body).toHaveTextContent('December 2018');
    });

    it('should select change dates by pressing the enter key on calendar', async () => {
      jest.useFakeTimers();

      const user = userEvent.setup({delay: null});
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      await user.click(screen.getByLabelText(inputLabel));
      await user.tab();

      fireEvent.keyDown(screen.getByRole('button', {name: /January 1,/}), {
        key: 'ArrowRight',
      }); // Day
      fireEvent.keyDown(screen.getByRole('button', {name: /January 2,/}), {
        key: 'ArrowRight',
      }); // Day
      fireEvent.keyDown(screen.getByRole('button', {name: /January 3,/}), {
        key: 'ArrowRight',
      }); // Day
      fireEvent.keyDown(screen.getByRole('button', {name: /January 4,/}), {
        key: 'ArrowRight',
      }); // Day
      fireEvent.keyDown(screen.getByRole('button', {name: /January 5,/}), {
        key: 'Enter',
      });

      act(() => {
        jest.runAllTimers();
      });
      await user.click(screen.getByLabelText(inputLabel));
      expect(screen.getByRole('button', {name: /January 5,/}).getAttribute('tabindex')).toBe('0');
    });

    it('should select change dates by pressing the space key on calendar', async () => {
      jest.useFakeTimers();

      const user = userEvent.setup({delay: null});
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      await user.click(screen.getByLabelText(inputLabel));
      await user.tab();

      fireEvent.keyDown(screen.getByRole('button', {name: /January 1,/}), {
        key: 'ArrowRight',
      }); // Day
      fireEvent.keyDown(screen.getByRole('button', {name: /January 2,/}), {
        key: 'ArrowRight',
      }); // Day
      fireEvent.keyDown(screen.getByRole('button', {name: /January 3,/}), {
        key: 'ArrowRight',
      }); // Day
      fireEvent.keyDown(screen.getByRole('button', {name: /January 4,/}), {
        key: 'ArrowRight',
      }); // Day
      fireEvent.keyDown(screen.getByRole('button', {name: /January 5,/}), {
        key: 'Space',
      });

      act(() => {
        jest.runAllTimers();
      });

      await user.click(screen.getByLabelText(inputLabel));

      expect(screen.getByRole('button', {name: /January 5,/}).getAttribute('tabindex')).toBe('0');
    });

    it('should fire onchange when day is typed', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      const {container} = render(
        <EzField type="date" value="01/01/2019" label={inputLabel} onChange={handleChange} />
      );

      await user.click(screen.getByLabelText(inputLabel));

      const input = container.querySelector('input');

      await user.type(input, '02/01/2019');

      expect(handleChange).toHaveBeenCalled();
    });

    it('should fire onchange when day is clicked', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<EzField type="date" value="01/01/2019" label={inputLabel} onChange={handleChange} />);

      await user.click(screen.getByLabelText(inputLabel));

      act(() => {
        fireEvent.click(screen.getByRole('button', {name: /January 5,/}));
      });

      expect(handleChange).toHaveBeenCalled();
    });

    it('should hide calendar when day is clicked', async () => {
      const user = userEvent.setup();
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      await user.click(screen.getByLabelText(inputLabel));

      expect(document.body).toHaveTextContent('January 2019');

      await user.click(screen.getByRole('button', {name: /January 1,/}));

      expect(document.body).not.toHaveTextContent('January 2019');
    });

    it('should ignore clicks and enter key on disabled dates', async () => {
      jest.useFakeTimers();

      const user = userEvent.setup({delay: null});

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
      await user.click(screen.getByLabelText(inputLabel));

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

    it('should hide calendar on escape', async () => {
      const user = userEvent.setup();
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      await user.click(screen.getByLabelText(inputLabel));

      expect(document.body).toHaveTextContent('January 2019');

      fireEvent.keyDown(screen.getByLabelText(inputLabel), {key: 'Escape'});

      expect(document.body).not.toHaveTextContent('January 2019');

      await user.click(screen.getByLabelText(inputLabel));

      expect(document.body).toHaveTextContent('January 2019');

      // press escape when focused on a day
      fireEvent.keyDown(screen.getByRole('button', {name: /January 3,/}), {
        key: 'Escape',
      });

      expect(document.body).not.toHaveTextContent('January 2019');
    });

    it('should fire onchange AFTER day is clicked', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(<EzField type="date" value="01/01/2019" label={inputLabel} onChange={handleChange} />);

      expect(handleChange).not.toHaveBeenCalled();

      await user.click(screen.getByLabelText(inputLabel));

      act(() => {
        fireEvent.click(screen.getByRole('button', {name: /January 5,/}));
      });

      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should focus calendar when tabbing from date input', async () => {
      const user = userEvent.setup();
      render(<EzField type="date" value="01/01/2019" label={inputLabel} />);

      const input = screen.getByLabelText(inputLabel);

      input.focus();

      await user.click(input);

      expect(document.body).toHaveTextContent('January 2019');

      expect(document.activeElement).toBe(input);

      await user.tab();

      expect(screen.getByRole('dialog')).toContainElement(document.activeElement as HTMLElement);
    });

    it('should call props onFocusCapture and onFocus', async () => {
      const user = userEvent.setup();
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

      await user.click(screen.getByLabelText(inputLabel));

      expect(onFocusCapture).toHaveBeenCalledTimes(1);
      expect(onFocus).toHaveBeenCalledTimes(1);
    });
  });
});
