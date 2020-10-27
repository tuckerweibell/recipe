import React from 'react';
import {render, fireEvent, cleanup, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import regressionTests from './EzModal.test.md';
import EzModal from '../EzModal';

afterEach(cleanup);

const scope = {EzModal};

describe('EzModal', () => {
  visualSnapshots({markdown: regressionTests, scope});

  it('does not render the children if not open', () => {
    const {queryByText} = render(
      <EzModal isOpen={false} dismissLabel="dismiss" headerText="header">
        <div>foo</div>
      </EzModal>
    );
    expect(queryByText('foo')).toBeNull();
  });

  it('calls submit handler when submit button is clicked', () => {
    const clickSpy = jest.fn();
    const submitLabel = 'submit';
    const {getByText} = render(
      <EzModal
        isOpen
        submitLabel={submitLabel}
        onSubmit={clickSpy}
        dismissLabel="dismiss"
        headerText="header"
      >
        Test
      </EzModal>
    );

    fireEvent.click(getByText(submitLabel));
    expect(clickSpy).toHaveBeenCalled();
  });

  it('calls dismiss handler when dismiss button is clicked', () => {
    const clickSpy = jest.fn();
    const dismissLabel = 'dismiss';
    const {getByText} = render(
      <EzModal
        isOpen
        dismissLabel={dismissLabel}
        submitLabel="submit"
        onDismiss={clickSpy}
        headerText="header"
      >
        Test
      </EzModal>
    );

    fireEvent.click(getByText(dismissLabel));
    expect(clickSpy).toHaveBeenCalled();
  });

  it('calls dismiss when clicking outside of the modal', () => {
    const dismiss = jest.fn();
    const dismissLabel = 'dismiss';
    render(
      <EzModal
        isOpen
        dismissLabel={dismissLabel}
        submitLabel="submit"
        onDismiss={dismiss}
        headerText="header"
      >
        Test
      </EzModal>
    );

    const outside = screen.getByRole('dialog').parentElement;

    fireEvent.click(outside);
    expect(dismiss).toHaveBeenCalled();
  });

  it('calls dismiss when Escape is pressed', () => {
    const dismiss = jest.fn();
    const dismissLabel = 'dismiss';
    render(
      <EzModal
        isOpen
        dismissLabel={dismissLabel}
        submitLabel="submit"
        onDismiss={dismiss}
        headerText="header"
      >
        Test
      </EzModal>
    );

    const dialog = screen.getByRole('dialog');

    userEvent.type(dialog, '{esc}');

    expect(dismiss).toHaveBeenCalled();
  });

  it('does NOT call dismiss when Escape is pressed but is already handled by a descendant component', () => {
    const dismiss = jest.fn();
    const dismissLabel = 'dismiss';

    const Child = () => (
      <input data-testid="child" onKeyDown={e => e.key === 'Escape' && e.preventDefault()} />
    );

    render(
      <EzModal
        isOpen
        dismissLabel={dismissLabel}
        submitLabel="submit"
        onDismiss={dismiss}
        headerText="header"
      >
        <Child />
      </EzModal>
    );

    const child = screen.getByTestId('child');

    userEvent.type(child, 'sample text');

    userEvent.type(child, '{esc}');

    expect(dismiss).not.toHaveBeenCalled();
  });

  it('disables the submit button when the form is submitting', () => {
    const submitLabel = 'submit';
    const {getByText} = render(
      <EzModal
        isOpen
        isSubmitting
        submitLabel={submitLabel}
        dismissLabel="dismiss"
        headerText="header"
      >
        test
      </EzModal>
    );
    const submitButton = getByText(submitLabel);
    expect(submitButton).toHaveAttribute('disabled');
  });

  it('sets the disabled prop on dismiss button when isSubmitting is true', () => {
    const dismissLabel = 'dismiss';
    const {getByText} = render(
      <EzModal isOpen isSubmitting dismissLabel={dismissLabel} headerText="header">
        test
      </EzModal>
    );
    const dismissButton = getByText(dismissLabel);
    expect(dismissButton).toHaveAttribute('disabled');
  });

  it('prevents the main document body from scrolling when open', () => {
    const dismissLabel = 'dismiss';

    const Test = ({isOpen = false}) => (
      <EzModal isOpen={isOpen} dismissLabel={dismissLabel} headerText="header">
        test
      </EzModal>
    );

    const {rerender} = render(<Test />);

    expect(document.body.style.overflow).toEqual('');

    rerender(<Test isOpen />);

    expect(document.body.style.overflow).toEqual('hidden');

    rerender(<Test />);

    expect(document.body.style.overflow).toEqual('');
  });

  /**
   * Accessibility tests.
   */
  describe('Accessibility tests', () => {
    it('should meet accessibility guidelines when required labels / text are given', async () => {
      const {baseElement, unmount} = render(
        <EzModal isOpen dismissLabel="dismiss" headerText="header">
          test
        </EzModal>
      );
      unmount();
      const actual = await axe(baseElement.innerHTML);
      expect(actual).toHaveNoViolations();
    });

    it('should meet accessibility guidelines when all labels / text are given', async () => {
      const {baseElement, unmount} = render(
        <EzModal isOpen headerText="Header" submitLabel="submit" dismissLabel="dismiss">
          test
        </EzModal>
      );
      unmount();
      const actual = await axe(baseElement.innerHTML);
      expect(actual).toHaveNoViolations();
    });

    it('should focus the first focusable element inside the modal when opened', async () => {
      // NOTE: reaktit uses getClientRects to check it tabbable elements are visible before setting focus
      jest.spyOn(window.Element.prototype, 'getClientRects').mockImplementation(() => [{}] as any);

      const FocusExample = () => {
        const [isOpen, setOpen] = React.useState(false);
        return (
          <>
            <button type="button" onClick={() => setOpen(true)}>
              Outside
            </button>
            <EzModal isOpen={isOpen} dismissLabel="dismiss" headerText="header">
              <button type="button">Inside</button>
            </EzModal>
          </>
        );
      };

      render(<FocusExample />);

      const trigger = screen.getByRole('button', {name: /outside/i});

      trigger.focus();

      expect(document.activeElement).toBe(trigger);

      userEvent.click(trigger);

      const firstFocusable = await screen.findByRole('button', {name: /inside/i});

      await waitFor(() => expect(document.activeElement).toBe(firstFocusable));
    });
  });
});
