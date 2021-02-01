import React, {useRef} from 'react';
import {axe} from 'jest-axe';
import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EzPopover from '../EzPopover';
import {useCloseOnBlur} from '../useCloseOnBlur';

describe('EzPopover', () => {
  describe('shouldCloseOnBlur', () => {
    it('should call onClose only when clicking outside', () => {
      const onClose = jest.fn();

      const Example = () => {
        const outsideRef = useRef<HTMLButtonElement>();
        const insideRef = useRef<HTMLDivElement>();

        useCloseOnBlur({
          shouldCloseOnBlur: true,
          onClose,
          refs: [insideRef],
        });

        return (
          <div>
            <button type="button" ref={outsideRef}>
              outside
            </button>
            <div ref={insideRef}>
              <button type="button">inside</button>
            </div>
          </div>
        );
      };

      render(<Example />);

      fireEvent.mouseDown(screen.getByRole('button', {name: /inside/i}));

      expect(onClose).not.toHaveBeenCalled();

      fireEvent.mouseDown(screen.getByRole('button', {name: /outside/i}));

      expect(onClose).toHaveBeenCalled();
    });
  });

  it('should move focus from trigger to popover and back', async () => {
    const PopoverExample = () => {
      const ref = React.useRef(null);
      const [visible, setVisible] = React.useState(false);
      return (
        <div>
          <input data-testid="before" />
          <button
            data-testid="trigger"
            type="button"
            ref={ref}
            onClick={() => setVisible(!visible)}
          >
            Open popover
          </button>
          <input data-testid="after" />

          {visible && (
            <EzPopover targetRef={ref} shouldCloseOnBlur onClose={() => setVisible(false)}>
              <input data-testid="inside" />
            </EzPopover>
          )}
        </div>
      );
    };

    const {getByTestId} = render(<PopoverExample />);

    const trigger = getByTestId('trigger');
    const inputBefore = getByTestId('before');
    const inputAfter = getByTestId('after');

    inputBefore.focus();
    expect(document.activeElement).toBe(inputBefore);

    // switch over to the button
    userEvent.tab();
    expect(document.activeElement).toBe(trigger);

    // open the popover
    fireEvent.click(trigger);

    // tab into the popover
    userEvent.tab();
    expect(document.activeElement).toBe(getByTestId('inside'));

    // tab out of the popover
    userEvent.tab();
    expect(document.activeElement).toBe(inputAfter);

    // tab back to the trigger button
    userEvent.tab({shift: true});
    expect(document.activeElement).toBe(trigger);

    // open the popover again
    fireEvent.click(trigger);

    // tab into the popover
    userEvent.tab();
    expect(document.activeElement).toBe(getByTestId('inside'));

    // tab back out of the popover to the trigger button
    userEvent.tab({shift: true});
    expect(document.activeElement).toBe(trigger);

    // tab back up to the original input
    userEvent.tab({shift: true});
    expect(document.activeElement).toBe(inputBefore);
  });

  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <EzPopover targetRef={{current: document.createElement('div')}}>
        <div>Hi!</div>
      </EzPopover>
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });
});
