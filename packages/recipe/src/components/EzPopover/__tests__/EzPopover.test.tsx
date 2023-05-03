import React, {useRef} from 'react';
import {fireEvent} from '@testing-library/react';
import {axe, render, screen, userEvent} from '../../../../test-utils';
import EzPopover from '../EzPopover';
import EzField from '../../EzField';
import {useCloseOnBlur} from '../useCloseOnBlur';

// Not sure why this path is two levels deep instead of one, but 🤷‍♂️
jest.unmock('../../EzPopover');

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

    it('should not call onClose only when clicking within select options inside of the popover', async () => {
      const user = userEvent.setup();
      const onClose = jest.fn();
      const onChange = jest.fn();

      const PopoverExample = () => {
        const ref = React.useRef(null);
        const [visible, setVisible] = React.useState(false);
        return (
          <div>
            <button type="button" ref={ref} onClick={() => setVisible(!visible)}>
              Open popover
            </button>
            <button type="button">outside</button>

            {visible && (
              <EzPopover targetRef={ref} shouldCloseOnBlur onClose={onClose}>
                <EzField
                  type="select"
                  label="Select dropdown"
                  placeholder="Choose..."
                  options={[
                    {label: 'All Upcoming', value: 'upcoming'},
                    {label: 'Today', value: 'today'},
                    {label: 'Tomorrow', value: 'tomorrow'},
                    {label: 'All Time', value: 'all'},
                    {label: 'Yesterday', value: 'yesterday'},
                    {label: 'Last 7 Days', value: 'week'},
                    {label: 'This Month', value: 'month'},
                  ]}
                  value={'yesterday'}
                  onChange={onChange}
                />
              </EzPopover>
            )}
          </div>
        );
      };

      render(<PopoverExample />);

      // open the popover
      await user.click(screen.getByRole('button', {name: /Open popover/i}));

      const input = screen.getByRole('combobox', {name: /Select dropdown/i});

      await user.click(input);

      const option = screen.getByRole('option', {name: /Today/i});

      await user.click(option);

      expect(onChange).toHaveBeenCalled();

      expect(onClose).not.toHaveBeenCalled();
    });
  });

  it('should move focus from trigger to popover and back', async () => {
    const user = userEvent.setup();
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
    await user.tab();
    expect(document.activeElement).toBe(trigger);

    // open the popover
    fireEvent.click(trigger);

    // tab into the popover
    await user.tab();
    expect(document.activeElement).toBe(getByTestId('inside'));

    // tab out of the popover
    await user.tab();
    expect(document.activeElement).toBe(inputAfter);

    // tab back to the trigger button
    await user.tab({shift: true});
    expect(document.activeElement).toBe(trigger);

    // open the popover again
    fireEvent.click(trigger);

    // tab into the popover
    await user.tab();
    expect(document.activeElement).toBe(getByTestId('inside'));

    // tab back out of the popover to the trigger button
    await user.tab({shift: true});
    expect(document.activeElement).toBe(trigger);

    // tab back up to the original input
    await user.tab({shift: true});
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
