import React from 'react';
import {axe} from 'jest-axe';
import {visualSnapshots} from 'sosia';
import {render} from '@testing-library/react';
import markdown from '../EzFlashMessage.md';
import EzFlashMessage from '../EzFlashMessage';
import {EzPage} from '../../EzPage';

const scope = {EzFlashMessage, EzPage};

describe('EzFlashMessage', () => {
  visualSnapshots({markdown, scope});

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
      },
    ].forEach(() => {});

    expect.assertions(0);
  });
});
