import React, {useRef} from 'react';
import {axe} from 'jest-axe';
import {render, screen, fireEvent} from '@testing-library/react';
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
