import React from 'react';
import ReactDOM from 'react-dom';
import {fireEvent, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FocusScope from '../FocusScope';

describe('FocusScope', () => {
  beforeEach(() => {
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb: any) => cb());
  });

  afterEach(() => {
    (window.requestAnimationFrame as any).mockRestore();
  });

  describe('focus containment', () => {
    it('should contain focus within the scope', () => {
      const {getByTestId} = render(
        <FocusScope contain>
          <input data-testid="input1" />
          <input data-testid="input2" />
          <input data-testid="input3" />
        </FocusScope>
      );

      const input1 = getByTestId('input1');
      const input2 = getByTestId('input2');
      const input3 = getByTestId('input3');

      input1.focus();
      expect(document.activeElement).toBe(input1);

      fireEvent.keyDown(document.activeElement, {key: 'Tab'});
      expect(document.activeElement).toBe(input2);

      fireEvent.keyDown(document.activeElement, {key: 'Tab'});
      expect(document.activeElement).toBe(input3);

      fireEvent.keyDown(document.activeElement, {key: 'Tab'});
      expect(document.activeElement).toBe(input1);

      fireEvent.keyDown(document.activeElement, {key: 'Tab', shiftKey: true});
      expect(document.activeElement).toBe(input3);

      fireEvent.keyDown(document.activeElement, {key: 'Tab', shiftKey: true});
      expect(document.activeElement).toBe(input2);

      fireEvent.keyDown(document.activeElement, {key: 'Tab', shiftKey: true});
      expect(document.activeElement).toBe(input1);
    });

    it('should work with nested elements', () => {
      const {getByTestId} = render(
        <FocusScope contain>
          <input data-testid="input1" />
          <div>
            <input data-testid="input2" />
            <div>
              <input data-testid="input3" />
            </div>
          </div>
        </FocusScope>
      );

      const input1 = getByTestId('input1');
      const input2 = getByTestId('input2');
      const input3 = getByTestId('input3');

      input1.focus();
      expect(document.activeElement).toBe(input1);

      fireEvent.keyDown(document.activeElement, {key: 'Tab'});
      expect(document.activeElement).toBe(input2);

      fireEvent.keyDown(document.activeElement, {key: 'Tab'});
      expect(document.activeElement).toBe(input3);

      fireEvent.keyDown(document.activeElement, {key: 'Tab'});
      expect(document.activeElement).toBe(input1);

      fireEvent.keyDown(document.activeElement, {key: 'Tab', shiftKey: true});
      expect(document.activeElement).toBe(input3);

      fireEvent.keyDown(document.activeElement, {key: 'Tab', shiftKey: true});
      expect(document.activeElement).toBe(input2);

      fireEvent.keyDown(document.activeElement, {key: 'Tab', shiftKey: true});
      expect(document.activeElement).toBe(input1);
    });

    it('should skip non-tabbable elements', () => {
      const {getByTestId} = render(
        <FocusScope contain>
          <input data-testid="input1" />
          <div />
          <input data-testid="input2" />
          <div tabIndex={-1} />
          <input data-testid="input3" />
        </FocusScope>
      );

      const input1 = getByTestId('input1');
      const input2 = getByTestId('input2');
      const input3 = getByTestId('input3');

      input1.focus();
      expect(document.activeElement).toBe(input1);

      fireEvent.keyDown(document.activeElement, {key: 'Tab'});
      expect(document.activeElement).toBe(input2);

      fireEvent.keyDown(document.activeElement, {key: 'Tab'});
      expect(document.activeElement).toBe(input3);

      fireEvent.keyDown(document.activeElement, {key: 'Tab'});
      expect(document.activeElement).toBe(input1);

      fireEvent.keyDown(document.activeElement, {key: 'Tab', shiftKey: true});
      expect(document.activeElement).toBe(input3);

      fireEvent.keyDown(document.activeElement, {key: 'Tab', shiftKey: true});
      expect(document.activeElement).toBe(input2);

      fireEvent.keyDown(document.activeElement, {key: 'Tab', shiftKey: true});
      expect(document.activeElement).toBe(input1);
    });

    it('should do nothing if a modifier key is pressed', () => {
      const {getByTestId} = render(
        <FocusScope contain>
          <input data-testid="input1" />
          <input data-testid="input2" />
          <input data-testid="input3" />
        </FocusScope>
      );

      const input1 = getByTestId('input1');

      input1.focus();
      expect(document.activeElement).toBe(input1);

      fireEvent.keyDown(document.activeElement, {key: 'Tab', altKey: true});
      expect(document.activeElement).toBe(input1);
    });

    it('should work with multiple focus scopes', () => {
      const {getByTestId} = render(
        <div>
          <FocusScope contain>
            <input data-testid="input1" />
            <input data-testid="input2" />
            <input data-testid="input3" />
          </FocusScope>
          <FocusScope contain>
            <input data-testid="input4" />
            <input data-testid="input5" />
            <input data-testid="input6" />
          </FocusScope>
        </div>
      );

      const input1 = getByTestId('input1');
      const input2 = getByTestId('input2');
      const input3 = getByTestId('input3');
      const input4 = getByTestId('input4');
      const input5 = getByTestId('input5');
      const input6 = getByTestId('input6');

      input1.focus();
      expect(document.activeElement).toBe(input1);

      fireEvent.keyDown(document.activeElement, {key: 'Tab'});
      expect(document.activeElement).toBe(input2);

      fireEvent.keyDown(document.activeElement, {key: 'Tab'});
      expect(document.activeElement).toBe(input3);

      fireEvent.keyDown(document.activeElement, {key: 'Tab'});
      expect(document.activeElement).toBe(input1);

      fireEvent.keyDown(document.activeElement, {key: 'Tab', shiftKey: true});
      expect(document.activeElement).toBe(input3);

      fireEvent.keyDown(document.activeElement, {key: 'Tab', shiftKey: true});
      expect(document.activeElement).toBe(input2);

      fireEvent.keyDown(document.activeElement, {key: 'Tab', shiftKey: true});
      expect(document.activeElement).toBe(input1);

      input4.focus();
      expect(document.activeElement).toBe(input4);

      fireEvent.keyDown(document.activeElement, {key: 'Tab'});
      expect(document.activeElement).toBe(input5);

      fireEvent.keyDown(document.activeElement, {key: 'Tab'});
      expect(document.activeElement).toBe(input6);

      fireEvent.keyDown(document.activeElement, {key: 'Tab'});
      expect(document.activeElement).toBe(input4);

      fireEvent.keyDown(document.activeElement, {key: 'Tab', shiftKey: true});
      expect(document.activeElement).toBe(input6);

      fireEvent.keyDown(document.activeElement, {key: 'Tab', shiftKey: true});
      expect(document.activeElement).toBe(input5);

      fireEvent.keyDown(document.activeElement, {key: 'Tab', shiftKey: true});
      expect(document.activeElement).toBe(input4);
    });

    it('should restore focus to the last focused element in the scope when re-entering the browser', () => {
      const {getByTestId} = render(
        <div>
          <input data-testid="outside" />
          <FocusScope contain>
            <input data-testid="input1" />
            <input data-testid="input2" />
            <input data-testid="input3" />
          </FocusScope>
        </div>
      );

      const input1 = getByTestId('input1');
      const input2 = getByTestId('input2');
      const outside = getByTestId('outside');

      input1.focus();
      fireEvent.focusIn(input1); // jsdom doesn't fire this automatically
      expect(document.activeElement).toBe(input1);

      fireEvent.keyDown(document.activeElement, {key: 'Tab'});
      fireEvent.focusIn(input2);
      expect(document.activeElement).toBe(input2);

      input2.blur();
      outside.focus();
      fireEvent.focusIn(outside);
      expect(document.activeElement).toBe(input2);
    });

    it('should restore focus to the last focused element in the scope on focus out', () => {
      const {getByTestId} = render(
        <div>
          <FocusScope contain>
            <input data-testid="input1" />
            <input data-testid="input2" />
          </FocusScope>
        </div>
      );

      const input1 = getByTestId('input1');
      const input2 = getByTestId('input2');

      input1.focus();
      fireEvent.focusIn(input1); // jsdom doesn't fire this automatically
      expect(document.activeElement).toBe(input1);

      fireEvent.keyDown(document.activeElement, {key: 'Tab'});
      fireEvent.focusIn(input2);
      expect(document.activeElement).toBe(input2);

      input2.blur();
      fireEvent.focusOut(input2);
      expect(document.activeElement).toBe(input2);
    });
  });

  describe('focus restoration', () => {
    it('should restore focus to the previously focused node on unmount', () => {
      function Test({show = false}) {
        return (
          <div>
            <input data-testid="outside" />
            {show && (
              <FocusScope restoreFocus autoFocus>
                <input data-testid="input1" />
                <input data-testid="input2" />
                <input data-testid="input3" />
              </FocusScope>
            )}
          </div>
        );
      }

      const {getByTestId, rerender} = render(<Test />);

      const outside = getByTestId('outside');
      outside.focus();

      rerender(<Test show />);

      const input1 = getByTestId('input1');
      expect(document.activeElement).toBe(input1);

      rerender(<Test />);

      expect(document.activeElement).toBe(outside);
    });

    it('should move focus to the next element after the previously focused node on Tab', async () => {
      const user = userEvent.setup();
      function Test({show = false}) {
        return (
          <div>
            <input data-testid="before" />
            <button type="button" data-testid="trigger">
              click
            </button>
            <input data-testid="after" />
            {show && (
              <FocusScope restoreFocus autoFocus>
                <input data-testid="input1" />
                <input data-testid="input2" />
                <input data-testid="input3" />
              </FocusScope>
            )}
          </div>
        );
      }

      const {getByTestId, rerender} = render(<Test />);

      const trigger = getByTestId('trigger');
      trigger.focus();

      rerender(<Test show />);

      const input1 = getByTestId('input1');
      expect(document.activeElement).toBe(input1);

      await user.tab();
      await user.tab();

      const input3 = getByTestId('input3');
      expect(document.activeElement).toBe(input3);

      fireEvent.keyDown(input3, {key: 'Tab'});
      expect(document.activeElement).toBe(getByTestId('after'));
    });

    it('should move focus to the body on Tab', () => {
      function Test({show = false}) {
        return (
          <div>
            <button type="button" data-testid="trigger">
              click
            </button>
            {show && (
              <FocusScope restoreFocus autoFocus>
                <input data-testid="input1" />
                <input data-testid="input2" />
                <input data-testid="input3" />
              </FocusScope>
            )}
          </div>
        );
      }

      const {getByTestId, rerender} = render(<Test />);

      const trigger = getByTestId('trigger');
      trigger.focus();

      rerender(<Test show />);

      const input1 = getByTestId('input1');
      expect(document.activeElement).toBe(input1);

      const input3 = getByTestId('input3');
      input3.focus();

      fireEvent.keyDown(input3, {key: 'Tab'});
      expect(document.activeElement).toBe(document.body);
    });

    it('should move focus to the previous element on Shift+Tab', () => {
      function Test({show = false}) {
        return (
          <div>
            <input data-testid="before" />
            <button type="button" data-testid="trigger">
              click
            </button>
            <input data-testid="after" />
            {show && (
              <FocusScope restoreFocus autoFocus>
                <input data-testid="input1" />
                <input data-testid="input2" />
                <input data-testid="input3" />
              </FocusScope>
            )}
          </div>
        );
      }

      const {getByTestId, rerender} = render(<Test />);

      const trigger = getByTestId('trigger');
      trigger.focus();

      rerender(<Test show />);

      const input1 = getByTestId('input1');
      expect(document.activeElement).toBe(input1);

      fireEvent.keyDown(input1, {key: 'Tab', shiftKey: true});
      expect(document.activeElement).toBe(getByTestId('trigger'));
    });

    it('should skip over elements within the scope when moving focus to the next element', () => {
      function Test({show = false}) {
        return (
          <div>
            <input data-testid="before" />
            <button type="button" data-testid="trigger">
              click
            </button>
            {show && (
              <FocusScope restoreFocus autoFocus>
                <input data-testid="input1" />
                <input data-testid="input2" />
                <input data-testid="input3" />
              </FocusScope>
            )}
            <input data-testid="after" />
          </div>
        );
      }

      const {getByTestId, rerender} = render(<Test />);

      const trigger = getByTestId('trigger');
      trigger.focus();

      rerender(<Test show />);

      const input1 = getByTestId('input1');
      expect(document.activeElement).toBe(input1);

      const input3 = getByTestId('input3');
      input3.focus();

      fireEvent.keyDown(input3, {key: 'Tab'});
      expect(document.activeElement).toBe(getByTestId('after'));
    });

    it('should ignore Tab if combined with metaKey', () => {
      function Test({show = false}) {
        return (
          <div>
            <input data-testid="before" />
            <button type="button" data-testid="trigger">
              click
            </button>
            <input data-testid="after" />
            {show && (
              <FocusScope restoreFocus autoFocus>
                <input data-testid="input1" />
                <input data-testid="input2" />
                <input data-testid="input3" />
              </FocusScope>
            )}
          </div>
        );
      }

      const {getByTestId, rerender} = render(<Test />);

      const trigger = getByTestId('trigger');
      trigger.focus();

      rerender(<Test show />);

      const input1 = getByTestId('input1');
      expect(document.activeElement).toBe(input1);

      const input3 = getByTestId('input3');
      input3.focus();

      fireEvent.keyDown(input3, {key: 'Tab', metaKey: true});
      expect(document.activeElement).toBe(input3);
    });

    it('should follow document tab sequence tabbing into focus scope', async () => {
      const user = userEvent.setup();
      function Test() {
        return (
          <div>
            <input data-testid="before" />
            <FocusScope restoreFocus>
              <input data-testid="input1" />
            </FocusScope>
          </div>
        );
      }

      const {getByTestId} = render(<Test />);

      const trigger = getByTestId('before');

      trigger.focus();
      expect(document.activeElement).toBe(trigger);

      await user.tab();

      const input1 = getByTestId('input1');
      expect(document.activeElement).toBe(input1);
    });
  });

  describe('auto focus', () => {
    it('should auto focus the first tabbable element in the scope on mount', () => {
      const {getByTestId} = render(
        <FocusScope autoFocus>
          <div />
          <input data-testid="input1" />
          <input data-testid="input2" />
          <input data-testid="input3" />
        </FocusScope>
      );

      const input1 = getByTestId('input1');
      expect(document.activeElement).toBe(input1);
    });

    it('should do nothing if something is already focused in the scope', () => {
      const {getByTestId} = render(
        <FocusScope autoFocus>
          <div />
          <input data-testid="input1" />
          {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
          <input data-testid="input2" autoFocus />
          <input data-testid="input3" />
        </FocusScope>
      );

      const input2 = getByTestId('input2');
      expect(document.activeElement).toBe(input2);
    });

    it('should do nothing if scope is empty', () => {
      render(
        <FocusScope autoFocus>
          <></>
        </FocusScope>
      );
      expect(document.activeElement).toBe(document.body);
    });
  });

  describe('nested focus scopes', () => {
    it('should make child FocusScopes the active scope regardless of DOM structure', () => {
      function ChildComponent(props) {
        return ReactDOM.createPortal(props.children, document.body);
      }

      function Test({show = false}) {
        return (
          <div>
            <input data-testid="outside" />
            <FocusScope restoreFocus contain>
              <input data-testid="input1" />
              {show && (
                <ChildComponent>
                  <FocusScope restoreFocus contain>
                    <input data-testid="input3" />
                  </FocusScope>
                </ChildComponent>
              )}
            </FocusScope>
          </div>
        );
      }

      const {getByTestId, rerender} = render(<Test />);
      // Set a focused node and make first FocusScope the active scope
      const input1 = getByTestId('input1');
      input1.focus();
      fireEvent.focusIn(input1);
      expect(document.activeElement).toBe(input1);

      rerender(<Test show />);
      expect(document.activeElement).toBe(input1);
      const input3 = getByTestId('input3');
      input3.focus();
      fireEvent.focusIn(input3);
      expect(document.activeElement).toBe(input3);
    });
  });
});
