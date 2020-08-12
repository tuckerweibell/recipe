import React from 'react';
import {fireEvent, cleanup, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import regressionTests from './EzModal.test.md';
import EzModal from '../EzModal';
import {fullRender} from '../../../jest-globals';

afterEach(cleanup);

const scope = {EzModal};

describe('EzModal', () => {
  visualSnapshots({markdown: regressionTests, scope});

  it('does not render the children if not open', () => {
    const {queryByText} = fullRender(
      <EzModal isOpen={false} dismissLabel="dismiss" headerText="header">
        <div>foo</div>
      </EzModal>
    );
    expect(queryByText('foo')).toBeNull();
  });

  it('calls submit handler when submit button is clicked', () => {
    const clickSpy = jest.fn();
    const submitLabel = 'submit';
    const {getByText} = fullRender(
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
    const {getByText} = fullRender(
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

  it('disables the submit button when the form is submitting', () => {
    const submitLabel = 'submit';
    const {getByText} = fullRender(
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
    const {getByText} = fullRender(
      <EzModal isOpen isSubmitting dismissLabel={dismissLabel} headerText="header">
        test
      </EzModal>
    );
    const dismissButton = getByText(dismissLabel);
    expect(dismissButton).toHaveAttribute('disabled');
  });

  /**
   * Accessibility tests.
   */
  describe('Accessibility tests', () => {
    it('should meet accessibility guidelines when required labels / text are given', async () => {
      const {baseElement, unmount} = fullRender(
        <EzModal isOpen dismissLabel="dismiss" headerText="header">
          test
        </EzModal>
      );
      unmount();
      const actual = await axe(baseElement.innerHTML);
      expect(actual).toHaveNoViolations();
    });

    it('should meet accessibility guidelines when all labels / text are given', async () => {
      const {baseElement, unmount} = fullRender(
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

      fullRender(<FocusExample />);

      const trigger = screen.getByRole('button', {name: /outside/i});

      trigger.focus();

      expect(document.activeElement).toBe(trigger);

      userEvent.click(trigger);

      const firstFocusable = await screen.findByRole('button', {name: /inside/i});

      await waitFor(() => expect(document.activeElement).toBe(firstFocusable));
    });
  });
});
