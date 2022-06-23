import React from 'react';
import {render, screen} from '@testing-library/react';
import {axe} from '../../../../test-utils';
import EzFlashMessage from '../EzFlashMessage';

describe('EzFlashMessage', () => {
  it('should meet accessibility guidelines', async () => {
    const {container} = render(
      <EzFlashMessage use="error" headline="Oh Crumbs!">
        <p>
          Looks like we’re having trouble loading this store’s data. Try reloading the page or
          contact our support team if this persists. I’m adding more copy to make sure this wraps to
          a second line for testing purposes.
        </p>
      </EzFlashMessage>
    );
    const actual = await axe(container.outerHTML);
    expect(actual).toHaveNoViolations();
  });

  describe('a11y', () => {
    it('should have an status role if the type is info', async () => {
      render(<EzFlashMessage use="info" headline="oh no" />);
      expect(await screen.findByRole('status', {name: /oh no/i})).toBeInTheDocument();
    });

    it('should have an alert role for all other types', async () => {
      render(<EzFlashMessage use="error" headline="oh no" />);
      expect(await screen.findByRole('alert', {name: /oh no/i})).toBeInTheDocument();
    });

    it('should announce presence assertively if type is error', async () => {
      render(<EzFlashMessage use="error" headline="oh no" />);
      expect(await screen.findByRole('alert', {name: /oh no/i})).toHaveAttribute(
        'aria-live',
        'assertive'
      );
    });

    it('should announce presence politely if not an error', async () => {
      render(<EzFlashMessage use="info" headline="oh no" />);
      expect(await screen.findByRole('status', {name: /oh no/i})).toHaveAttribute(
        'aria-live',
        'polite'
      );
    });
  });

  it('should pass type checking', () => {
    [
      {
        childrenProp: (
          <EzFlashMessage use="success">
            <div>recipe!</div>
          </EzFlashMessage>
        ),
        headlineProp: (
          <EzFlashMessage use="success" headline="headline">
            <div>recipe!</div>
          </EzFlashMessage>
        ),
        onDismissProp: (
          <EzFlashMessage use="success" onDismiss={() => 'success!'}>
            <div>recipe!</div>
          </EzFlashMessage>
        ),
        use: (
          <EzFlashMessage use="success">
            <div>recipe!</div>
          </EzFlashMessage>
        ),
        autohide: (
          <EzFlashMessage use="success" autohide>
            <div>recipe!</div>
          </EzFlashMessage>
        ),
        autohideDuration: (
          <EzFlashMessage use="success" autohide autohideDuration={2000}>
            <div>recipe!</div>
          </EzFlashMessage>
        ),
        autohideTimer: (
          <EzFlashMessage use="success" autohide autohideDuration={2000} onAutohide={() => 'hide'}>
            <div>recipe!</div>
          </EzFlashMessage>
        ),
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
